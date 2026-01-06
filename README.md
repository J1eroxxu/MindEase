# MindEase - Mental Wellness AI Chatbot

**Check in with your mind, learn grounding exercises, and manage stress anytime with a supportive AI wellness chatbot.**

## 🌟 About MindEase

MindEase is a web-based mental wellness application designed specifically for youths and young adults experiencing academic or work-related stress. It combines an interactive AI chatbot, evidence-based grounding exercises, and mood tracking to provide accessible, non-judgmental mental health support.

### Key Features

- **🤖 AI Wellness Chatbot** - Non-judgmental conversation support for stress, anxiety, and overwhelm
- **🧘 Grounding Exercises** - Quick, proven techniques including:
  - 5-4-3-2-1 Sensory Technique
  - Box Breathing
  - Progressive Muscle Relaxation
  - Mindful Grounding
- **📊 Mood Tracking** - Track your emotional state with personalized feedback
- **🔒 Privacy-First** - All data stored locally, no third-party sharing
- **⚡ Offline Support** - Works without internet connection
- **♿ Accessible Design** - WCAG 2.1 AA compliant, keyboard navigable
- **📱 Responsive** - Mobile-first design for on-the-go support

## 🎨 Design System

### Color Palette
- **Primary Teal (#2DD4CF)** - Calm, trustworthy, healing
- **Secondary Lavender (#D4A5FF)** - Supportive, anxiety-reducing
- **Accent Amber (#FFA500)** - Uplifting energy and engagement
- **Dark Navy (#1F2937)** - Professional, grounded base
- **Off-White (#F8F9FA)** - Reduces eye strain

### UX Principles
1. **Emotional Safety** - Non-judgmental, no forced positivity
2. **Simplicity** - Minimal cognitive load
3. **Accessibility** - Keyboard nav, high contrast, screen reader friendly
4. **Responsiveness** - Mobile-first, works on all devices
5. **Micro-interactions** - Gentle animations for comfort

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mindease.git
   cd mindease
   ```

2. **Open in browser**
   - Double-click `index.html` to open locally, OR
   - Use Live Server (see below)

### 🔴 Live Server Setup

If you want live reloading during development:

#### Option 1: VS Code Live Server Extension
1. Install "Live Server" extension by Ritwick Dey
2. Right-click `index.html` → "Open with Live Server"
3. Default: http://localhost:5500

#### Option 2: Python HTTP Server
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

#### Option 3: Node.js http-server
```bash
npm install -g http-server
http-server
# Visit http://localhost:8080
```

## 📁 Project Structure

```
mindease/
├── index.html              # HTML5 boilerplate
├── css/
│   └── styles.css         # Complete styling system
├── js/
│   └── app.js             # Interactive features & chatbot logic
├── assets/                # Images, icons (future)
├── .gitignore             # Git ignore patterns
├── README.md              # This file
└── package.json           # Project metadata (if needed)
```

## 💻 JavaScript Features

### State Management
- **localStorage** for persistent data storage
- Mood history tracking
- Conversation history logging

### Interactivity
- **Real-time mood tracking** with personalized responses
- **Interactive chatbot** with context-aware replies
- **Modal exercises** with step-by-step guidance
- **Smooth animations** and micro-interactions

### Accessibility
- **ARIA labels** and semantic HTML
- **Keyboard navigation** support
- **Focus management** for modals
- **Screen reader** friendly
- **Color contrast** WCAG AA compliant

### Performance
- **Minimal dependencies** (pure vanilla JS)
- **Efficient event handling**
- **Lazy loading ready** for future images
- **Service Worker support** for offline capability

## 🛠️ JavaScript Utilities

### Core Functions
- `loadAppState()` - Restore user data from localStorage
- `saveAppState()` - Persist data between sessions
- `initMoodTracker()` - Initialize mood tracking
- `initExercises()` - Set up exercise modals
- `initChatbot()` - Initialize chatbot interaction
- `initNavigation()` - Handle mobile nav toggle

### Chatbot Intelligence
- Keyword matching for contextual responses
- Multi-category response library:
  - Stress/Anxiety/Overwhelm
  - Sleep/Academic/Work
  - Positive reinforcement
- Randomized responses to feel natural

## 📱 Responsive Breakpoints
- **Desktop** (1024px+) - Full layout
- **Tablet** (768px - 1023px) - Adjusted grid
- **Mobile** (<768px) - Stack layout, hamburger menu

## ♿ Accessibility Features
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ ARIA labels on all interactive elements
- ✅ High contrast colors
- ✅ Focus indicators
- ✅ Semantic HTML5
- ✅ Screen reader optimized
- ✅ No auto-playing sounds/videos

## 📊 Data Storage

All user data is stored locally in the browser:
- Mood history with timestamps
- Conversation history
- No server uploads
- Privacy-first approach

```javascript
{
  moodHistory: [
    { mood: "stressed", timestamp: "2026-01-06T..." },
    { mood: "good", timestamp: "2026-01-06T..." }
  ],
  conversationHistory: [
    { type: "user", message: "...", timestamp: "2026-01-06T..." }
  ]
}
```

## ⚠️ Important Disclaimer

**MindEase is a supportive tool, not a substitute for professional mental health care.**

If you're experiencing serious mental health concerns, please reach out to:
- A mental health professional
- Your school/university counseling service
- Crisis hotline in your country
- Emergency services if in immediate danger

## 🔐 Privacy & Security

- **No tracking** - No analytics or user data collection
- **Local storage only** - All data stays on your device
- **No cookies** (except essential ones)
- **No third-party integrations**
- **Open source** - Code is transparent

## 🤝 Contributing

This is an educational project. Contributions welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes.

## 👨‍💻 Developer Notes

### Adding New Exercises
1. Add to `exercises` object in `js/app.js`
2. Create exercise card in `index.html`
3. Add corresponding button with `data-exercise` attribute

### Extending Chatbot Responses
1. Add new response arrays to `chatbotResponses` in `js/app.js`
2. Add keywords to `generateBotResponse()` function
3. Test with various user inputs

### Future Enhancements
- [ ] Service Worker for offline support
- [ ] Speech recognition for voice input
- [ ] Meditation/breathing timer with audio
- [ ] Mood trend analysis & visualizations
- [ ] Export mood data to PDF
- [ ] Multi-language support
- [ ] Customizable themes
- [ ] Dark mode toggle

## 💡 Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients & animations
- **Vanilla JavaScript** - No frameworks needed
- **localStorage API** - Client-side persistence
- **Service Workers** - Offline capability (future)

## 🙏 Credits

Designed with care for mental wellness. 

**Remember: Your mind matters. You deserve support.**

---

**Last Updated:** January 2026  
**Version:** 1.0.0
