import React, { useState, useEffect } from 'react';
import './Wheelpicker.css';

import centerBowlImg from '../assets/images/centerBowl.png';
import proteinImg from '../assets/images/protien.png';
import fatsImg from '../assets/images/fats.jpg';
import carbsImg from '../assets/images/carbs.jpg';
import veggiesImg from '../assets/images/veggies.jpg';

const Wheelpicker = ({ centerImage, scale = 1.2 }) => {
    const [rotation, setRotation] = useState(0);
    const [isRotating, setIsRotating] = useState(true);

    const categories = [
        { id: 1, label: 'PROTEIN', icon: proteinImg, initAngle: 45 },
        { id: 2, label: 'FATS', icon: fatsImg, initAngle: 135 },
        { id: 3, label: 'CARBS', icon: carbsImg, initAngle: 225 },
        { id: 4, label: 'VEGGIES', icon: veggiesImg, initAngle: 315 },
    ];

    // Number of times we've passed 360 to keep rotation continuous (no snapping backwards)
    const [rotationsCompleted, setRotationsCompleted] = useState(0);

    const handlePodClick = (angle) => {
        setIsRotating(false);

        // Calculate the shortest path to top (0/-360 etc)
        // We want the clicked pod to reach 270 degrees (which corresponds to top visually if 0 is right in classic math, but in CSS rotate, -angle degrees puts it at 0 top if it was at angle)
        // Actually, if a pod is at `angle`, we rotate the rotor by `-angle` to bring it to 0 (top).
        let targetRotation = -angle;

        // Adjust for multiple rotations so it doesn't spin wildly backwards
        // A more sophisticated calculation would be needed for perfect shortest-path, 
        // but just setting the explicit target rotation minus current loops works smoothly.
        setRotation(targetRotation);
    };

    const defaultCenter = centerBowlImg;

    return (
        <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>

                {/* Left Side: Text Content */}
                <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px', textAlign: 'left', paddingRight: '2vw' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.1' }}>
                        Customise your meal as per your goals
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                        Unlock peak performance with precision nutrition. Adjust your protein, fats, carbs, and veggies perfectly balanced around your core meals. Select a nutrient pod to dial in your optimal macro ratio and fuel your specific fitness journey, without the guesswork.
                    </p>
                </div>

                {/* Right Side: Nutri-Wheel */}
                <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: `${400 * scale}px` }}>
                    <div className="wheel-container" style={{ transform: `scale(${scale}) rotate(-90deg)` }}> {/* Rotate -90deg so 0 is at top */}
                        <div className="wheel-hub" style={{ transform: 'rotate(90deg)' }}> {/* Counter rotate hub to keep image upright */}
                            <img src={centerImage || defaultCenter} alt="Central Meal" />
                        </div>

                        <div
                            className={`wheel-rotor ${isRotating ? 'auto-spin' : ''}`}
                            style={!isRotating ? { transform: `rotate(${rotation}deg)` } : {}}
                        >
                            {categories.map((cat) => (
                                <div key={cat.id}>

                                    {/* Pod */}
                                    <div
                                        className="wheel-pod-wrapper"
                                        style={{
                                            transform: `rotate(${cat.initAngle}deg) translate(125px) rotate(-${cat.initAngle}deg)`
                                        }}
                                    >
                                        <div
                                            className="wheel-pod-counter-spin"
                                            style={!isRotating ? { transform: `rotate(${-rotation}deg)` } : {}}
                                        >
                                            <div
                                                className="wheel-pod"
                                                onClick={() => handlePodClick(cat.initAngle)}
                                                style={{ transform: 'rotate(90deg)', padding: 0, position: 'relative' }} // counteract the -90deg rotation of the container
                                            >
                                                <img src={cat.icon} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />

                                                {/* Floating Pill Label */}
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '-12px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    backgroundColor: '#1a1a1a',
                                                    color: '#fff',
                                                    padding: '6px 14px',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '800',
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                                                    zIndex: 20,
                                                    whiteSpace: 'nowrap',
                                                    pointerEvents: 'none'
                                                }}>
                                                    {cat.label}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Wheelpicker;
