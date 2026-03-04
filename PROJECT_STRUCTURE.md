# 📁 Project Structure Guide

This is the professional folder structure for your Nationality Quiz React application. Here's what each folder contains:

## Folder Organization

```
src/
├── assets/              # Images, SVGs, and static media files
├── components/          # Reusable UI components
│   └── nav-bar.jsx     # Shared navigation component
├── pages/              # Page-level components (full screens)
│   └── StartScreen.jsx # Quiz start page
├── styles/             # Global and component styles
│   ├── App.css        # App component styles
│   ├── index.css      # Global styles
│   └── StartScreen.css # StartScreen styles
├── hooks/             # Custom React hooks
│   └── useQuiz.js     # Quiz logic hook (template)
├── utils/             # Helper functions and utilities
│   └── helpers.js     # Reusable utility functions
├── constants/         # App-wide constants
│   └── questions.js   # Quiz questions and API config
├── context/           # React Context for global state
│   └── AppContext.jsx # App-level context (template)
├── types/             # Type definitions (JSDoc comments)
│   └── index.js       # Type definitions
├── data/              # Static data files (if any)
├── App.jsx            # Main App component
└── main.jsx           # React app entry point
```

## When to Use Each Folder

### 📦 **components/**
Reusable UI components that appear in multiple places
- Navigation bar
- Buttons
- Cards
- Dropdowns
- Forms

### 📄 **pages/**
Full-page components that represent complete screens
- Start/Home page
- Quiz page
- Results page
- Settings page

### 🎨 **styles/**
All CSS files organized here
- Keep component styles with their components OR in this folder
- Global styles in index.css
- Utility CSS classes

### 🪝 **hooks/**
Custom React hooks for shared logic
- `useQuiz` - Quiz state management
- `useTimer` - Timer logic
- `useLocalStorage` - Local storage management

### 🛠️ **utils/**
Pure utility functions (no React dependencies)
- `calculateScore()`
- `formatTime()`
- `validateEmail()`
- `shuffleArray()`

### ⚙️ **constants/**
App-wide constants that don't change
- Quiz questions data
- API endpoints
- Magic numbers and strings

### 🌍 **context/**
React Context API for global state
- User session
- Theme preference
- Quiz progress

### 📚 **types/**
Type definitions for better IDE support
- Use JSDoc comments for documentation

### 🖼️ **assets/**
Static media files
- Images
- SVGs
- Icons

## Best Practices

1. **Keep components small and focused** - Each component should do one thing well
2. **Extract logic to hooks** - Move complex state logic to custom hooks
3. **Use constants** - Don't hardcode magic strings or numbers
4. **Organize by feature** - Folder structure mirrors how your app works
5. **Naming conventions**:
   - Components: PascalCase (StartScreen.jsx)
   - Utilities: camelCase (helpers.js)
   - Files with React: .jsx
   - Pure JS files: .js

## Example Import Patterns

```jsx
// Import from components
import NavBar from './components/nav-bar';

// Import from pages
import StartPage from './pages/StartScreen';

// Import from utils
import { calculateScore } from './utils/helpers';

// Import from constants
import { QUIZ_QUESTIONS } from './constants/questions';

// Import from hooks
import { useQuiz } from './hooks/useQuiz';

// Import from context
import { AppContext } from './context/AppContext';

// Import styles
import './styles/App.css';
```

## Scaling Your App

As your application grows:
- 🔄 Add `api/` folder for API calling logic
- 🧪 Add `__tests__/` or `.test.js` files next to components
- 🎨 Add `theme/` folder for design system (colors, typography)
- 🔧 Add `config/` folder for environment configs

---

This structure is professional-grade and used in production React applications. Happy coding! 🚀
