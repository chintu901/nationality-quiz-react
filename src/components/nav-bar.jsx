import logo from '../assets/app-logo.png'
import '../App.css'
export default function NavBar(){
    return (
        <nav>
            <div className="header-image">
                <img src={logo} alt="App Logo" />
            </div>
            <div className="header-buttons">
                <button className='nav-reset-btn'>Reset</button>
            </div>
        </nav>
    )
}