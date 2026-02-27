import worldMap from '../assets/world-map.jpg'
import '../App.css'
export default function StartPage(){
    return (
        <div className="main-page"> 
            <img  alt="world map" className="background-image" />
            <div className="start-page">
                <div className="head">Window</div>
                <div className="content">
                    This is a neobrutalist-style window with a button and space for any content
                    you want!
                    <br />
                    <button className="button">Button</button>
                </div>
            </div>
        </div>
    )
}