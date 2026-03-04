import worldMap from '../assets/world-map.jpg'
import '../styles/StartScreen.css'


export default function StartPage(){
    return (
        <div className="start-page">
            <div className="head">Find my Nationality</div>
            <div className="content">
                This is a neobrutalist-style window with a button and space for any content
                you want!
                <br />
                <div className='content-inputs'>
                    <div className="dropdown-wrapper">
                        <button className="dropdown-trigger" id="trigger" onClick={() => toggleDropdown()}>
                        <span id="selected-text">Dropdown</span>
                        <span className="arrow"><i class="hgi hgi-stroke hgi-arrow-down-01"></i></span>
                        </button>
                        <div className="dropdown-menu" id="menu">
                        <div className="dropdown-item" onClick={() => selectItem('Option 1')}>Option 1</div>
                        <div className="dropdown-item" onClick={() => selectItem('Option 2')}>Option 2</div>
                        <div className="dropdown-item" onClick={() => selectItem('Option 3')}>Option 3</div>
                        <div className="dropdown-item" onClick={() => selectItem('Option 4')}>Option 4</div>
                        </div>
                    </div>
                    <button className="button">Button</button>
                </div>
            </div>
        </div>
    )
}