import React, { useState } from 'react';
import './BmrModal.css';

function BmrModal({ isOpen, onClose }) {
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('male');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmr, setBmr] = useState(null);

    if (!isOpen) return null;

    const calculateBmr = (e) => {
        e.preventDefault();
        // Mifflin-St Jeor Equation
        // Men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
        // Women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
        const w = parseFloat(weight);
        const h = parseFloat(height);
        const a = parseInt(age, 10);
        
        if (isNaN(w) || isNaN(h) || isNaN(a)) return;

        let result = (10 * w) + (6.25 * h) - (5 * a);
        if (sex === 'male') {
            result += 5;
        } else {
            result -= 161;
        }
        setBmr(Math.round(result));
    };

    return (
        <div className="bmr-modal-overlay" onClick={onClose}>
            <div className="bmr-modal-content" onClick={e => e.stopPropagation()}>
                <button className="bmr-modal-close" onClick={onClose}>&times;</button>
                <h2 style={{marginTop: 0, marginBottom: '24px'}}>Calculate Your BMR</h2>
                <form onSubmit={calculateBmr}>
                    <div className="bmr-form-group">
                        <label>Sex</label>
                        <select value={sex} onChange={e => setSex(e.target.value)} required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="bmr-form-group">
                        <label>Age (years)</label>
                        <input type="number" value={age} onChange={e => setAge(e.target.value)} required min="1" max="120" placeholder="e.g. 30" />
                    </div>
                    <div className="bmr-form-group">
                        <label>Weight (kg)</label>
                        <input type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} required min="20" placeholder="e.g. 70" />
                    </div>
                    <div className="bmr-form-group">
                        <label>Height (cm)</label>
                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} required min="100" placeholder="e.g. 175" />
                    </div>
                    <button type="submit" style={{
                        width: '100%', padding: '14px', background: '#1a1e2a', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', marginTop: '12px'
                    }}>Calculate</button>
                </form>

                {bmr && (
                    <div className="bmr-result">
                        <h3>Your Basal Metabolic Rate</h3>
                        <p>{bmr} <span style={{fontSize: '0.9rem', fontWeight: 500}}>kcal / day</span></p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BmrModal;