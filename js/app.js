/**
 * MINDEASE - INTERACTIVE CHATBOT & APP LOGIC
 * Mental Wellness AI Chatbot
 * Features: Mood tracking, chatbot interaction, grounding exercises
 */

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

const appState = {
    userMood: null,
    moodHistory: [],
    conversationHistory: [],
    exerciseInProgress: false,
};

// Load saved data from localStorage
function loadAppState() {
    const saved = localStorage.getItem('mindease-state');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            appState.moodHistory = data.moodHistory || [];
            appState.conversationHistory = data.conversationHistory || [];
        } catch (e) {
            console.error('Error loading app state:', e);
        }
    }
}

// Save state to localStorage for persistence
function saveAppState() {
    localStorage.setItem('mindease-state', JSON.stringify({
        moodHistory: appState.moodHistory,
        conversationHistory: appState.conversationHistory,
    }));
}

// ============================================================================
// MOOD TRACKER FUNCTIONALITY
// ============================================================================

const moodResponses = {
    amazing: {
        emoji: '🌟',
        messages: [
            "That's wonderful! Keep nurturing that positive energy! 🌈",
            "Amazing mood detected! You're radiating positivity! ✨",
            "Love to hear it! You're doing great! 💫"
        ]
    },
    good: {
        emoji: '😊',
        messages: [
            "Great! You're in a good place. Keep it up! 👍",
            "Good vibes! That's something to celebrate! 🎉",
            "Wonderful! You're doing well today! 💚"
        ]
    },
    okay: {
        emoji: '😐',
        messages: [
            "That's fair. Sometimes neutral is exactly where you need to be. 🌿",
            "Okay is valid. Remember, some days are just 'okay' - and that's fine! 💜",
            "Take it easy today. You're doing your best! 🧘"
        ]
    },
    stressed: {
        emoji: '😰',
        messages: [
            "I hear you. Stress is real, but you're not alone. Want to try a grounding exercise? 🫂",
            "You're feeling stressed - let's work through this together. What helps you relax? 💙",
            "Stress can be overwhelming. Remember to breathe. I'm here to help. 🌬️"
        ]
    },
    overwhelmed: {
        emoji: '😔',
        messages: [
            "I see you're overwhelmed. That's tough, but you're strong for reaching out. 💪",
            "Overwhelm happens. Let's take this one step at a time. Want a grounding exercise? 🌱",
            "You're carrying a lot right now. It's okay to ask for help and take breaks. 💝"
        ]
    }
};

function initMoodTracker() {
    const moodBtns = document.querySelectorAll('.mood-btn');
    const moodFeedback = document.getElementById('mood-feedback');

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all buttons
            moodBtns.forEach(b => b.classList.remove('active'));
            
            // Add active state to clicked button
            btn.classList.add('active');
            
            const mood = btn.getAttribute('data-mood');
            appState.userMood = mood;
            
            // Add to mood history with timestamp
            appState.moodHistory.push({
                mood: mood,
                timestamp: new Date().toISOString()
            });
            
            // Show personalized feedback
            const moodData = moodResponses[mood];
            const randomMessage = moodData.messages[Math.floor(Math.random() * moodData.messages.length)];
            
            moodFeedback.textContent = randomMessage;
            moodFeedback.classList.add('show');
            
            // Save state
            saveAppState();
            
            // Log for accessibility
            console.log(`User mood recorded: ${mood}`);
        });
    });
}

// ============================================================================
// GROUNDING EXERCISES
// ============================================================================

const exercises = {
    '543': {
        title: '5-4-3-2-1 Grounding Technique',
        content: `
            <h4>How it works:</h4>
            <p>This technique uses all your senses to bring you back to the present moment. It's quick, effective, and can be done anywhere.</p>
            
            <h4>Step by step:</h4>
            <ol>
                <li><strong>5 things you can SEE:</strong> Look around and name 5 things you notice. Be specific (colors, sizes, shapes).</li>
                <li><strong>4 things you can TOUCH:</strong> Feel 4 different textures around you. Describe how they feel.</li>
                <li><strong>3 things you can HEAR:</strong> Listen carefully and identify 3 sounds in your environment.</li>
                <li><strong>2 things you can SMELL:</strong> Notice 2 scents around you. They can be pleasant or neutral.</li>
                <li><strong>1 thing you can TASTE:</strong> Identify 1 taste - could be your gum, coffee, or the residual taste of your meal.</li>
            </ol>
            
            <h4>Tips:</h4>
            <ul>
                <li>Take your time with each sense</li>
                <li>Don't judge yourself for struggling to find items</li>
                <li>Repeat this exercise as often as needed</li>
                <li>It typically takes 3-5 minutes</li>
            </ul>
            
            <p><strong>When to use:</strong> Anxiety, panic, dissociation, overwhelming thoughts</p>
        `
    },
    'breathing': {
        title: 'Box Breathing Exercise',
        content: `
            <h4>What is Box Breathing?</h4>
            <p>Box breathing (also called square breathing) is a powerful technique used by athletes, soldiers, and wellness professionals to calm the nervous system instantly.</p>
            
            <h4>How to practice:</h4>
            <ol>
                <li>Find a comfortable seated position</li>
                <li><strong>Inhale</strong> for 4 counts through your nose</li>
                <li><strong>Hold</strong> your breath for 4 counts</li>
                <li><strong>Exhale</strong> slowly for 4 counts through your mouth</li>
                <li><strong>Hold</strong> for 4 counts before the next cycle</li>
                <li>Repeat 4-6 times (2-3 minutes total)</li>
            </ol>
            
            <h4>Why it works:</h4>
            <ul>
                <li>Regulates your breathing and heart rate</li>
                <li>Activates the parasympathetic nervous system (rest & digest)</li>
                <li>Reduces cortisol (stress hormone) levels</li>
                <li>Improves focus and clarity</li>
            </ul>
            
            <h4>Pro tips:</h4>
            <ul>
                <li>Set a timer to help keep rhythm</li>
                <li>Place hand on chest to feel breathing slow</li>
                <li>Practice when calm to make it easier during stress</li>
                <li>Can be done in just 2 minutes for quick relief</li>
            </ul>
            
            <p><strong>When to use:</strong> Anxiety, stress, insomnia, racing thoughts</p>
        `
    },
    'relaxation': {
        title: 'Progressive Muscle Relaxation',
        content: `
            <h4>What is Progressive Muscle Relaxation (PMR)?</h4>
            <p>PMR involves systematically tensing and releasing muscle groups to release physical tension and promote relaxation throughout your body.</p>
            
            <h4>Instructions:</h4>
            <ol>
                <li>Find a comfortable position (lying or sitting)</li>
                <li>Close your eyes and take 3 deep breaths</li>
                <li>Starting with your toes, tense the muscles for 5 seconds</li>
                <li>Release and notice the sensation of relaxation for 10 seconds</li>
                <li>Move up through: feet, calves, thighs, buttocks, abdomen, chest, hands, arms, shoulders, neck, and face</li>
                <li>End with your scalp and forehead</li>
            </ol>
            
            <h4>What to expect:</h4>
            <ul>
                <li>Increased body awareness</li>
                <li>Physical relaxation spreading through your body</li>
                <li>Mental calmness following physical release</li>
                <li>Better sleep when done before bed</li>
            </ul>
            
            <h4>Duration:</h4>
            <ul>
                <li>Quick version: 5-10 minutes</li>
                <li>Full version: 15-30 minutes</li>
            </ul>
            
            <p><strong>When to use:</strong> Muscle tension, anxiety, sleep issues, chronic stress</p>
        `
    },
    'grounding': {
        title: 'Mindful Grounding Technique',
        content: `
            <h4>What is Mindful Grounding?</h4>
            <p>This simple technique helps you feel more present and connected to the earth, reducing anxiety and racing thoughts.</p>
            
            <h4>Quick Grounding Exercise:</h4>
            <ol>
                <li>Stand barefoot on the ground if possible (grass, soil, sand)</li>
                <li>If indoors, that's fine too - just stand firmly on the floor</li>
                <li>Press your feet firmly into the ground</li>
                <li>Feel the connection between you and the earth</li>
                <li>Imagine roots growing from your feet deep into the ground</li>
                <li>Breathe deeply and visualize any stress flowing down and away</li>
                <li>Stay for 2-3 minutes</li>
            </ol>
            
            <h4>Mental Grounding (If Standing is Difficult):</h4>
            <ul>
                <li>Name 5 things you appreciate about where you are right now</li>
                <li>Describe your favorite grounded place in detail</li>
                <li>Visualize roots keeping you safe and stable</li>
                <li>Think of 3 people who make you feel grounded and safe</li>
            </ul>
            
            <h4>Physical Grounding Alternatives:</h4>
            <ul>
                <li>Hold ice or splash cold water on your face</li>
                <li>Press your hands against a hard surface</li>
                <li>Stomp your feet gently</li>
                <li>Hug yourself firmly</li>
            </ul>
            
            <p><strong>When to use:</strong> Dissociation, anxiety spikes, emotional overwhelm, panic</p>
        `
    }
};

function initExercises() {
    const exerciseBtns = document.querySelectorAll('.exercise-btn');
    const modal = document.getElementById('exercise-modal');
    const closeBtn = document.getElementById('close-exercise');
    const exerciseTitle = document.getElementById('exercise-title');
    const exerciseContent = document.getElementById('exercise-content');

    exerciseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseKey = btn.getAttribute('data-exercise');
            const exercise = exercises[exerciseKey];
            
            if (exercise) {
                exerciseTitle.textContent = exercise.title;
                exerciseContent.innerHTML = exercise.content;
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                
                // Log for analytics
                console.log(`Exercise started: ${exerciseKey}`);
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================================================
// CHATBOT FUNCTIONALITY
// ============================================================================

// Wellness-focused chatbot responses
const chatbotResponses = {
    greetings: [
        "Hi there! How can I support you today?",
        "Hello! What's on your mind?",
        "Welcome! I'm here to listen and help. What's going on?",
        "Hi! I'm listening. Tell me more."
    ],
    stress: [
        "It sounds like you're dealing with a lot. That's understandable. Have you tried any grounding exercises?",
        "Stress can feel overwhelming. Would a breathing exercise help right now?",
        "I hear you. Stress is valid. Remember, you're stronger than you think. 💪",
        "Take a moment. You don't have to handle everything at once. Want to try a calming technique?"
    ],
    anxiety: [
        "Anxiety can be really difficult. You're not alone in feeling this way.",
        "It's great that you're naming what you're feeling. That takes courage. Want to ground yourself?",
        "Anxiety lies sometimes. Remember: this feeling is temporary and you can handle it.",
        "Let's focus on what you can control right now. What would help you feel safer?"
    ],
    overwhelm: [
        "Feeling overwhelmed is a sign you're carrying too much. It's okay to ask for help.",
        "Break it down into smaller pieces. You don't have to solve everything at once.",
        "You're doing your best, and that's enough. Seriously. 💙",
        "What's the smallest thing you could focus on right now?"
    ],
    sleep: [
        "Sleep is crucial for mental health. Have you tried progressive relaxation before bed?",
        "Trouble sleeping can make everything feel harder. Box breathing can help.",
        "Your body needs rest. Be gentle with yourself about sleep struggles.",
        "What usually helps you wind down? Let's build on that."
    ],
    academic: [
        "Academic pressure is real, especially for students. You're not alone in this struggle.",
        "Grades don't define your worth. Remember to take breaks and be kind to yourself.",
        "What subject is stressing you most? Let's talk through it.",
        "You're doing better than you think. Take things one step at a time."
    ],
    work: [
        "Work stress affects so many people. Your wellbeing matters more than any deadline.",
        "It's okay to set boundaries at work. Your health comes first.",
        "Burnout is real. Make sure you're taking time to rest and recharge.",
        "What part of work is most draining? Let's explore that."
    ],
    positive: [
        "That's wonderful! Keep nurturing that energy! ✨",
        "I'm so glad to hear that! 🌈",
        "You deserve to feel good. Keep it up! 💫",
        "That's fantastic! Celebrate the small wins! 🎉"
    ]
};

function initChatbot() {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const suggestedPrompts = document.querySelectorAll('.prompt-btn');
    const moodQuickBtns = document.querySelectorAll('.mood-quick-btn');
    const startChatBtn = document.getElementById('start-chat-btn');

    // Handle mood quick-start buttons
    moodQuickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.getAttribute('data-mood');
            const moodLabel = btn.textContent.split(' ')[0].toLowerCase();
            
            // Add user's mood selection as message
            addUserMessage(`I'm feeling ${moodLabel}`);
            
            // Track mood
            appState.userMood = mood;
            appState.moodHistory.push({
                mood: mood,
                timestamp: new Date().toISOString()
            });
            
            // Generate contextual response with exercise suggestion
            setTimeout(() => {
                const response = generateWellnessResponse(mood);
                addBotMessage(response);
            }, 800);
            
            // Log conversation
            appState.conversationHistory.push({
                type: 'user',
                message: `Mood check-in: ${moodLabel}`,
                timestamp: new Date().toISOString()
            });
            saveAppState();
        });
    });

    // Handle form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        
        if (message) {
            addUserMessage(message);
            chatInput.value = '';
            
            // Simulate typing and respond
            setTimeout(() => {
                const response = generateBotResponse(message);
                addBotMessage(response);
            }, 800);
            
            // Log conversation
            appState.conversationHistory.push({
                type: 'user',
                message: message,
                timestamp: new Date().toISOString()
            });
            saveAppState();
        }
    });

    // Suggested prompts
    suggestedPrompts.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.textContent;
            chatInput.value = text;
            chatInput.focus();
        });
    });

    // Start chat button
    startChatBtn.addEventListener('click', () => {
        const chatSection = document.getElementById('chatbot');
        chatSection.scrollIntoView({ behavior: 'smooth' });
        chatInput.focus();
    });

    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `<div class="message-content"><p>${escapeHtml(text)}</p></div>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addBotMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `<div class="message-content"><p>${text}</p></div>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateWellnessResponse(mood) {
        // Personalized wellness response based on mood check-in
        // Includes exercise suggestions
        const wellnessFlows = {
            great: "That's wonderful! 💙 I'm so glad you're feeling great. Keep nurturing that positive energy! Remember, grounding exercises like the 5-4-3-2-1 technique can help maintain this feeling. Would you like to try one?",
            good: "Awesome, I'm glad you're in a good place! 😊 To keep this momentum going, try our Box Breathing exercise or a quick grounding session. Would either of those interest you?",
            okay: "Thank you for checking in. Some days are just 'okay' and that's completely valid. 🌿 If you'd like, I can guide you through a grounding exercise to help you feel more centered. The 5-4-3-2-1 technique is quick and effective!",
            stressed: "I hear you - stress is real, and it's brave of you to acknowledge it. 💙 Let me suggest some tools: Try our Box Breathing (quick relief) or the 5-4-3-2-1 Sensory Technique to ground yourself. Which sounds helpful right now?",
            overwhelmed: "I see you're carrying a lot, and I'm glad you reached out. 💪 You're stronger than you think. Let's break this down together. Would Progressive Muscle Relaxation or Mindful Grounding help you feel more in control?"
        };
        
        return wellnessFlows[mood] || "Thank you for sharing how you're feeling. I'm here to support you with grounding exercises and coping strategies. Which would help most right now?";
    }

    function generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Keyword matching for contextual responses
        if (lowerMessage.includes('stress') || lowerMessage.includes('stressed')) {
            return getRandomResponse(chatbotResponses.stress);
        }
        if (lowerMessage.includes('anxiety') || lowerMessage.includes('anxious') || lowerMessage.includes('panic')) {
            return getRandomResponse(chatbotResponses.anxiety);
        }
        if (lowerMessage.includes('overwhelm') || lowerMessage.includes('too much')) {
            return getRandomResponse(chatbotResponses.overwhelm);
        }
        if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia') || lowerMessage.includes('tired')) {
            return getRandomResponse(chatbotResponses.sleep);
        }
        if (lowerMessage.includes('school') || lowerMessage.includes('exam') || lowerMessage.includes('assignment') || lowerMessage.includes('study')) {
            return getRandomResponse(chatbotResponses.academic);
        }
        if (lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('boss') || lowerMessage.includes('deadline')) {
            return getRandomResponse(chatbotResponses.work);
        }
        if (lowerMessage.includes('good') || lowerMessage.includes('great') || lowerMessage.includes('amazing') || lowerMessage.includes('happy')) {
            return getRandomResponse(chatbotResponses.positive);
        }
        
        // Default responses
        return "Thank you for sharing that with me. Remember, you're not alone in what you're feeling. What specifically is bothering you most right now?";
    }

    function getRandomResponse(responseArray) {
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
}

// ============================================================================
// MOBILE NAVIGATION
// ============================================================================

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
            // Create mobile menu
            if (!document.querySelector('.mobile-menu')) {
                const mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = navLinks.innerHTML;
                
                // Add close functionality
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navToggle.setAttribute('aria-expanded', 'false');
                        mobileMenu.remove();
                    });
                });
                
                document.body.appendChild(mobileMenu);
            }
        } else {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) mobileMenu.remove();
        }
    });
}

// ============================================================================
// ACCESSIBILITY & UTILITY FUNCTIONS
// ============================================================================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================================================
// SERVICE WORKER REGISTRATION (for offline support)
// ============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here when available
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ============================================================================
// APP INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🧠 MindEase is loading...');
    
    // Initialize all features
    loadAppState();
    initMoodTracker();
    initExercises();
    initChatbot();
    initNavigation();
    
    console.log('✅ MindEase is ready to support you!');
});

// ============================================================================
// PERFORMANCE OPTIMIZATIONS
// ============================================================================

// Lazy load images if added in future
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });
}

// Handle network status
window.addEventListener('online', () => {
    console.log('Back online! Syncing data...');
});

window.addEventListener('offline', () => {
    console.log('You are offline. Using cached data.');
});
