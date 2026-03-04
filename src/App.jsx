import { useState } from 'react'
import NavBar from './components/nav-bar'
import StartPage from './pages/StartScreen'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <StartPage />
    </>
  )
}

export default App
