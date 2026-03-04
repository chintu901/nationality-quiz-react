# 🌍 Nationality Quiz

A fun and interactive quiz application that guesses your nationality based on your answers to harmless, stereotypical questions. Answer questions about your preferences, habits, and lifestyle to discover which country matches your personality!

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Future Features](#future-features)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🎯 **Interactive Quiz** - Answer fun questions about your lifestyle and preferences
- 🌐 **Nationality Detection** - Get a match to a country based on your answers
- 📊 **Score Tracking** - Track your quiz progress and results
- 🎨 **Clean UI** - Intuitive and user-friendly interface
- ⚡ **Fast Performance** - Built with React and Vite for lightning-fast load times
- 📱 **Responsive Design** - Works smoothly on desktop and mobile devices

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3
- **Package Manager:** npm

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (or extract if you have it as a zip)
   ```bash
   git clone <repository-url>
   cd nationality-quiz-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   - The app will typically run at `http://localhost:5173`
   - Your terminal will show the exact URL

---

## 💻 Usage

### Running the Application

**Development Mode (with hot reload):**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

**Check Code Quality:**
```bash
npm run lint
```

---

## 📁 Project Structure

```
nationality-quiz-react/
├── src/
│   ├── components/           # Reusable UI components
│   │   └── nav-bar.jsx      # Navigation bar
│   ├── pages/               # Full-page components
│   │   └── StartScreen.jsx  # Quiz start page
│   ├── styles/              # CSS stylesheets
│   │   ├── App.css
│   │   ├── index.css
│   │   └── StartScreen.css
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   ├── constants/           # App constants and quiz data
│   ├── context/             # React Context for global state
│   ├── types/               # Type definitions
│   ├── assets/              # Images and static files
│   ├── App.jsx              # Main App component
│   └── main.jsx             # React entry point
├── public/                  # Static public files
├── dist/                    # Production build output (auto-generated)
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules
└── PROJECT_STRUCTURE.md     # Detailed folder structure guide
```

For a detailed explanation of each folder, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

---

## 🎯 How It Works

1. User starts the quiz by clicking the "Start" button on the start screen
2. Questions are presented one by one with multiple choice answers
3. User selects answers based on their lifestyle and preferences
4. After completing all questions, the app calculates a score and matches the user to a country
5. Results are displayed with the matched nationality

---

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |

---

## 🚀 Future Features

### Planned Enhancements

- [ ] **Database Integration** - Save user results and quiz history
- [ ] **Enhanced Scoring Algorithm** - More accurate nationality matching
- [ ] **Leaderboards** - Track top players and scores
- [ ] **User Profiles** - Save user preferences and quiz history
- [ ] **Different Quiz Categories** - Beyond just nationality
- [ ] **Difficulty Levels** - Easy, Medium, Hard modes
- [ ] **Timed Mode** - Answer questions against the clock
- [ ] **Multi-language Support** - Support for multiple languages
- [ ] **Share Results** - Share quiz results on social media
- [ ] **Mobile App** - React Native version for iOS/Android

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and commit them (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request** describing your changes

### Development Guidelines

- Write clean, readable code
- Use the existing project structure and naming conventions
- Test your changes before submitting
- Keep components small and focused
- Add comments for complex logic

---

## 📝 License

This project is open source and available under the **MIT License** - see the LICENSE file for details.

---

## 📧 Support & Contact

Have questions or found a bug? Feel free to:
- Open an issue on GitHub
- Reach out to the project maintainer
- Check the [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for development guidance

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) - A JavaScript library for building user interfaces
- Powered by [Vite](https://vitejs.dev/) - Next generation frontend tooling
- Styled with [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 📈 Project Status

- **Current Version:** 0.0.0
- **Status:** 🚧 In Development
- **Last Updated:** March 2025

**Note:** This is an early-stage project. Features and the API may change frequently.

---

**Happy Quizzing! 🎉**
