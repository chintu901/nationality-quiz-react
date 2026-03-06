import worldMap from '../assets/world-map.jpg'
import '../styles/StartScreen.css'
import { useState, useRef, useEffect } from "react";

const options = [
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Africa",
    "Oceania"
];


export default function StartPage() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="start-page">
            <div className="head">Welcome to the Nationality Guesser</div>
            <div className="content">
                Answer a few questions about your preferences and lifestyle, and our AI will attempt to predict the nationality you most closely match.<br/><br/>

To improve the accuracy of the prediction, please select your region / continent first. This allows the quiz to ask culturally relevant questions.
                <br />
                <div className='content-inputs'>
                    <div ref={ref} className="dropdown-wrapper">
                        {/* Trigger */}
                        <button
                            onClick={() => setOpen((o) => !o)}
                            className={`dropdown-trigger${open ? " open" : ""}`}
                            aria-haspopup="listbox"
                            aria-expanded={open}
                        >
                            <span className={selected ? "dropdown-selected-text" : "dropdown-placeholder"}>
                                {selected ?? "Choose one…"}
                            </span>
                            <span className={`dropdown-chevron${open ? " rotated" : ""}`}>▾</span>
                        </button>

                        {/* Menu */}
                        {open && (
                            <ul role="listbox" className="dropdown-menu">
                                {options.map((opt) => (
                                    <li
                                        key={opt}
                                        role="option"
                                        aria-selected={selected === opt}
                                        onClick={() => { setSelected(opt); setOpen(false); }}
                                        className={`dropdown-item${selected === opt ? " active" : ""}`}
                                    >
                                        {selected === opt && <span className="dropdown-check">•</span>}
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className="button">Start</button>
                </div>
            </div>
        </div>
    )
}