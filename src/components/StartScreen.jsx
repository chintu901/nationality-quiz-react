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
            <div className="head">Find my Nationality</div>
            <div className="content">
                This is a neobrutalist-style window with a button and space for any content
                you want!
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
                                        {selected === opt && <span className="dropdown-check">✓</span>}
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className="button">Button</button>
                </div>
            </div>
        </div>
    )
}