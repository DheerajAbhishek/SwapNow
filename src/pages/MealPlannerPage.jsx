import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SiteHeader from '../components/SiteHeader';
import './MealPlannerPage.css';

// ── Constants ─────────────────────────────────────────────────────────────────

const ACTIVITY_LEVELS = [
  { value: 'sedentary',    label: 'Sedentary',            desc: 'Little or no exercise',       multiplier: 1.2   },
  { value: 'light',        label: 'Light Exercise',        desc: '1–3 days/week',               multiplier: 1.375 },
  { value: 'moderate',     label: 'Moderate Exercise',     desc: '3–5 days/week',               multiplier: 1.55  },
  { value: 'heavy',        label: 'Heavy Exercise',        desc: '6–7 days/week',               multiplier: 1.725 },
  { value: 'very-heavy',   label: 'Very Heavy Exercise',   desc: 'Twice daily / physical job',  multiplier: 1.9   },
];

const GOALS = [
  { value: 'bulking',          label: 'Bulking',          icon: 'B', desc: '+400 kcal surplus',      adjust: +400, carbs: 55, protein: 25, fat: 20 },
  { value: 'cutting',          label: 'Cutting',          icon: 'C', desc: '−400 kcal deficit',      adjust: -400, carbs: 40, protein: 35, fat: 25 },
  { value: 'muscle-building',  label: 'Muscle Building',  icon: 'MB', desc: '+400 kcal surplus',      adjust: +400, carbs: 50, protein: 30, fat: 20 },
  { value: 'eat-healthy',      label: 'Eat Healthy',      icon: 'EH', desc: 'Maintenance calories',   adjust:    0, carbs: 50, protein: 25, fat: 25 },
];

const MEDICAL_OPTIONS = [
  { value: 'diabetes', label: 'Diabetes',  icon: 'DIA', hint: 'Limits rice ≤150g, roti ≤2/meal' },
  { value: 'pcos',     label: 'PCOS',      icon: 'PCOS', hint: 'Restricts brown bread' },
  { value: 'thyroid',  label: 'Thyroid',   icon: 'THY', hint: 'Removes cabbage, cauliflower, broccoli' },
];

const ALLERGY_OPTIONS = [
  { value: 'lactose',  label: 'Lactose',  icon: 'LAC', hint: 'Removes milk, paneer, curd, yoghurt, butter' },
  { value: 'gluten',   label: 'Gluten',   icon: 'GLU', hint: 'Removes oats, brown bread, wrap' },
  { value: 'seafood',  label: 'Seafood',  icon: 'SEA', hint: 'Removes seafood items' },
  { value: 'nuts',     label: 'Nuts',     icon: 'NUT', hint: 'Removes peanut butter, mixed dry fruits' },
  { value: 'coconut',  label: 'Coconut',  icon: 'COC', hint: 'Removes coconut powder' },
];

// Step IDs
const STEP = {
  LANDING:  0,
  BMR:      1,
  ACTIVITY: 2,
  GOAL:     3,
  MEDICAL:  4,
  ALLERGY:  5,
  DIET:     6,
  RESULTS:  7,
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n) { return Number(n).toLocaleString('en-IN'); }
function r0(n)  { return Math.round(n); }

function macroGrams(calories, ratio) {
  return {
    carbs:   r0((calories * (ratio.carbs   / 100)) / 4),
    protein: r0((calories * (ratio.protein / 100)) / 4),
    fat:     r0((calories * (ratio.fat     / 100)) / 9),
  };
}

// ── Small reusable components ─────────────────────────────────────────────────

function StepBadge({ number, status }) {
  return (
    <span className={`mp-step-badge mp-step-badge--${status}`}>
      {status === 'done' ? 'Done' : number}
    </span>
  );
}

function CompletedStep({ number, title, summary, onEdit }) {
  return (
    <div className="mp-completed-step">
      <div className="mp-completed-step__left">
        <StepBadge number={number} status="done" />
        <div>
          <span className="mp-completed-step__title">{title}</span>
          <span className="mp-completed-step__summary">{summary}</span>
        </div>
      </div>
      <button className="mp-edit-btn" onClick={onEdit}>Edit</button>
    </div>
  );
}

function MacroRow({ calories, ratio }) {
  const g = macroGrams(calories, ratio);
  const total = ratio.carbs + ratio.protein + ratio.fat || 100;
  return (
    <div className="mp-macro-row">
      <div className="mp-macro-bar">
        <div className="mp-macro-bar__c" style={{ width: `${(ratio.carbs   / total) * 100}%` }} />
        <div className="mp-macro-bar__p" style={{ width: `${(ratio.protein / total) * 100}%` }} />
        <div className="mp-macro-bar__f" style={{ width: `${(ratio.fat     / total) * 100}%` }} />
      </div>
      <div className="mp-macro-legend">
        <span><span className="mp-dot mp-dot--c" />{ratio.carbs}% · {g.carbs}g carbs</span>
        <span><span className="mp-dot mp-dot--p" />{ratio.protein}% · {g.protein}g protein</span>
        <span><span className="mp-dot mp-dot--f" />{ratio.fat}% · {g.fat}g fat</span>
      </div>
    </div>
  );
}

function MealResultCard({ meal, index }) {
  const [open, setOpen] = useState(index === 0);
  const MEAL_ICONS = { Breakfast: 'B', Lunch: 'L', Dinner: 'D', 'Mid-Morning Snack': 'MS', 'Evening Snack': 'ES', 'Daily Meal': 'DM' };
  return (
    <div className="mp-meal-card">
      <button className="mp-meal-card__header" onClick={() => setOpen(o => !o)}>
        <div className="mp-meal-card__left">
          <span className="mp-meal-card__icon">{MEAL_ICONS[meal.mealName] || 'M'}</span>
          <div>
            <h3 className="mp-meal-card__name">{meal.mealName}</h3>
            <p className="mp-meal-card__sub">{meal.totals.calories} kcal · {meal.totals.protein}g protein · {meal.items.length} items</p>
          </div>
        </div>
        <span className={`mp-chevron ${open ? 'mp-chevron--up' : ''}`}>▾</span>
      </button>

      {open && (
        <div className="mp-meal-card__body">
          <div className="mp-meal-pills">
            {[
              { l: 'Calories', v: meal.totals.calories, u: 'kcal', cls: 'cal' },
              { l: 'Protein',  v: meal.totals.protein,  u: 'g',    cls: 'pro' },
              { l: 'Carbs',    v: meal.totals.carbs,    u: 'g',    cls: 'car' },
              { l: 'Fat',      v: meal.totals.fat,       u: 'g',    cls: 'fat' },
            ].map(({ l, v, u, cls }) => (
              <div key={l} className={`mp-pill mp-pill--${cls}`}>
                <span className="mp-pill__v">{v}</span>
                <span className="mp-pill__u">{u}</span>
                <span className="mp-pill__l">{l}</span>
              </div>
            ))}
          </div>

          <div className="mp-table-wrap">
            <table className="mp-table">
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Qty</th>
                  <th>Kcal</th>
                  <th>Protein</th>
                  <th>Carbs</th>
                  <th>Fat</th>
                </tr>
              </thead>
              <tbody>
                {meal.items.map((item, i) => (
                  <tr key={i} className={item.food.toLowerCase().includes('salad') || item.food === 'Lettuce' ? 'mp-table__veg-row' : ''}>
                    <td className="mp-table__food">
                      {(item.food.toLowerCase().includes('salad') || item.food === 'Lettuce') && <span className="mp-veg-dot" title="Mandatory vegetables" />}
                      {item.food}
                    </td>
                    <td>{item.quantity}{item.uom || 'g'}</td>
                    <td>{item.calories}</td>
                    <td>{item.protein}g</td>
                    <td>{item.carbs}g</td>
                    <td>{item.fat}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page Component ───────────────────────────────────────────────────────

export default function MealPlannerPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const [step, setStep]         = useState(STEP.LANDING);
  const [bmrForm, setBmrForm]   = useState({ gender: 'male', age: '', weight: '', height: '' });
  const [bmr, setBmr]           = useState(null);
  const [activity, setActivity] = useState(null);
  const [tdee, setTdee]         = useState(null);
  const [goal, setGoal]         = useState(null);
  const [goalCals, setGoalCals] = useState(null);
  const [medical, setMedical]   = useState([]);
  const [allergy, setAllergy]   = useState([]);
  const [dietType, setDietType] = useState('veg');
  const [plan, setPlan]         = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  const stepRefs = useRef({});

  // Auto-scroll to the newly active step
  useEffect(() => {
    const el = stepRefs.current[step];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  // Return null while redirecting to prevent rendering
  if (!isAuthenticated) {
    return null;
  }

  // ── API calls ──────────────────────────────────────────────────────────

  const handleBMRSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res  = await fetch('/api/calculate-bmr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gender: bmrForm.gender,
          age:    Number(bmrForm.age),
          weight: Number(bmrForm.weight),
          height: Number(bmrForm.height),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'BMR calculation failed');
      setBmr(data.bmr);
      setStep(STEP.ACTIVITY);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleActivitySelect = async (lvl) => {
    setError(null);
    setActivity(lvl);
    setLoading(true);
    try {
      const res  = await fetch('/api/calculate-tdee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bmr, activityLevel: lvl.value }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'TDEE calculation failed');
      setTdee(data.maintenanceCalories);
      setStep(STEP.GOAL);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoalSelect = (g) => {
    setGoal(g);
    setGoalCals(Math.max(1200, tdee + g.adjust));
    setStep(STEP.MEDICAL);
  };

  const handleMedicalNext = () => setStep(STEP.ALLERGY);
  const handleAllergyNext = () => setStep(STEP.DIET);

  const toggleMedical = (val) => {
    if (val === 'none') { setMedical([]); return; }
    setMedical(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
  };

  const toggleAllergy = (val) => {
    if (val === 'none') { setAllergy([]); return; }
    setAllergy(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
  };

  const handleGenerate = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const g = goal || GOALS[2];
      const res = await fetch('/api/generate-meal-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'guest',
          calorieTarget: goalCals,
          goal: g.value,
          dietType,
          mealsPerDay: 3,
          macroRatio: { carbs: g.carbs, protein: g.protein, fat: g.fat },
          medicalConditions: medical,
          allergies: allergy,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Meal generation failed');
      setPlan(data);
      setStep(STEP.RESULTS);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [goal, goalCals, dietType, medical, allergy]);

  const restart = () => {
    setStep(STEP.LANDING);
    setBmr(null); setActivity(null); setTdee(null);
    setGoal(null); setGoalCals(null);
    setMedical([]); setAllergy([]);
    setPlan(null); setError(null);
  };

  // ── Step summaries ─────────────────────────────────────────────────────

  const bmrSummary     = bmr ? `BMR: ${fmt(bmr)} kcal/day · ${bmrForm.gender}, ${bmrForm.age}y, ${bmrForm.weight}kg, ${bmrForm.height}cm` : '';
  const activitySummary = activity && tdee ? `${activity.label} (×${activity.multiplier}) → ${fmt(tdee)} kcal/day` : '';
  const goalSummary    = goal && goalCals ? `${goal.label} · ${fmt(goalCals)} kcal/day` : '';
  const medicalSummary = medical.length ? medical.join(', ') : 'None';
  const allergySummary = allergy.length  ? allergy.join(', ')  : 'None';
  const dietSummary    = dietType === 'veg' ? 'Vegetarian' : dietType === 'non-veg' ? 'Non-Vegetarian' : 'Vegan';

  // ── Render ────────────────────────────────────────────────────────────

  return (
    <div className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />
      <SiteHeader />

      <main className="mp-main">
        {/* ── Hero ── */}
        <section className="mp-hero">
          <div className="mp-hero__tag">Personalised Nutrition</div>
          <h1 className="mp-hero__title">
            Your Body.<br />
            <span className="mp-hero__accent">Your Meals.</span>
          </h1>
          <p className="mp-hero__sub">
            Answer 6 quick questions and we'll generate a clinically-informed meal plan
            built around your metabolism, goal, and health profile.
          </p>
        </section>

        <div className="mp-wizard">

          {/* ───────────── LANDING ───────────── */}
          {step === STEP.LANDING && (
            <div className="mp-card mp-card--landing" ref={el => stepRefs.current[STEP.LANDING] = el}>
              <div className="mp-card__icon-wrap">
                <span className="mp-card__big-icon">BMR</span>
              </div>
              <h2 className="mp-card__title">Let's Start with Your Metabolism</h2>
              <p className="mp-card__desc">
                We'll calculate your Basal Metabolic Rate (BMR) — the calories your body burns
                at rest — and build a personalised plan from there.
              </p>
              <button className="mp-btn mp-btn--primary mp-btn--lg" onClick={() => setStep(STEP.BMR)}>
                Calculate BMR →
              </button>
            </div>
          )}

          {/* ───────────── BMR FORM ───────────── */}
          {step >= STEP.BMR && (
            <>
              {step > STEP.BMR && bmr ? (
                <CompletedStep
                  number={1} title="Your Body Stats" summary={bmrSummary}
                  onEdit={() => setStep(STEP.BMR)}
                />
              ) : step === STEP.BMR && (
                <div className="mp-card" ref={el => stepRefs.current[STEP.BMR] = el}>
                  <div className="mp-card__step-header">
                    <StepBadge number={1} status="active" />
                    <div>
                      <h2 className="mp-card__title">Your Body Stats</h2>
                      <p className="mp-card__desc">Used in the Harris-Benedict equation to find your BMR.</p>
                    </div>
                  </div>

                  <form className="mp-form" onSubmit={handleBMRSubmit}>
                    {/* Gender */}
                    <div className="mp-field">
                      <label className="mp-label">Gender</label>
                      <div className="mp-toggle-row">
                        {['male', 'female'].map(g => (
                          <button
                            key={g} type="button"
                            className={`mp-toggle-btn ${bmrForm.gender === g ? 'mp-toggle-btn--active' : ''}`}
                            onClick={() => setBmrForm(f => ({ ...f, gender: g }))}
                          >
                            {g === 'male' ? 'Male' : 'Female'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mp-field-row">
                      <div className="mp-field">
                        <label className="mp-label">Age <span className="mp-unit">years</span></label>
                        <input className="mp-input" type="number" min={10} max={120} required
                          value={bmrForm.age}
                          onChange={e => setBmrForm(f => ({ ...f, age: e.target.value }))}
                          placeholder="e.g. 25"
                        />
                      </div>
                      <div className="mp-field">
                        <label className="mp-label">Weight <span className="mp-unit">kg</span></label>
                        <input className="mp-input" type="number" min={20} max={300} step={0.1} required
                          value={bmrForm.weight}
                          onChange={e => setBmrForm(f => ({ ...f, weight: e.target.value }))}
                          placeholder="e.g. 70"
                        />
                      </div>
                      <div className="mp-field">
                        <label className="mp-label">Height <span className="mp-unit">cm</span></label>
                        <input className="mp-input" type="number" min={100} max={250} required
                          value={bmrForm.height}
                          onChange={e => setBmrForm(f => ({ ...f, height: e.target.value }))}
                          placeholder="e.g. 170"
                        />
                      </div>
                    </div>

                    {error && <div className="mp-error">{error}</div>}

                    <button className="mp-btn mp-btn--primary" type="submit" disabled={loading}>
                      {loading ? <span className="mp-spinner" /> : 'Calculate BMR →'}
                    </button>
                  </form>

                  {/* BMR result inline */}
                  {bmr && (
                    <div className="mp-bmr-result">
                      <div className="mp-bmr-result__label">Your BMR</div>
                      <div className="mp-bmr-result__value">{fmt(bmr)} <span>kcal/day</span></div>
                      <div className="mp-bmr-result__note">Calories your body burns at complete rest</div>
                      <button className="mp-btn mp-btn--primary mp-btn--sm" onClick={() => setStep(STEP.ACTIVITY)}>
                        Go a step further and get recommended meals →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ───────────── ACTIVITY LEVEL ───────────── */}
          {step >= STEP.ACTIVITY && (
            <>
              {step > STEP.ACTIVITY && activity ? (
                <CompletedStep
                  number={2} title="Activity Level" summary={activitySummary}
                  onEdit={() => setStep(STEP.ACTIVITY)}
                />
              ) : step === STEP.ACTIVITY && (
                <div className="mp-card" ref={el => stepRefs.current[STEP.ACTIVITY] = el}>
                  <div className="mp-card__step-header">
                    <StepBadge number={2} status="active" />
                    <div>
                      <h2 className="mp-card__title">Activity Level</h2>
                      <p className="mp-card__desc">
                        How active are you? This multiplies your BMR to find your maintenance calories (TDEE).
                      </p>
                    </div>
                  </div>

                  {bmr && (
                    <div className="mp-inline-stat">
                      Your BMR: <strong>{fmt(bmr)} kcal</strong>
                    </div>
                  )}

                  <div className="mp-activity-list">
                    {ACTIVITY_LEVELS.map(lvl => (
                      <button
                        key={lvl.value}
                        className={`mp-activity-btn ${activity?.value === lvl.value ? 'mp-activity-btn--active' : ''}`}
                        onClick={() => handleActivitySelect(lvl)}
                        disabled={loading}
                      >
                        <div className="mp-activity-btn__top">
                          <span className="mp-activity-btn__label">{lvl.label}</span>
                          <span className="mp-activity-btn__mult">×{lvl.multiplier}</span>
                        </div>
                        <span className="mp-activity-btn__desc">{lvl.desc}</span>
                        {tdee && activity?.value === lvl.value && (
                          <span className="mp-activity-btn__tdee">→ {fmt(tdee)} kcal/day</span>
                        )}
                      </button>
                    ))}
                  </div>

                  {loading && <div className="mp-loading-row"><span className="mp-spinner" /> Calculating…</div>}
                  {error && <div className="mp-error">{error}</div>}
                </div>
              )}
            </>
          )}

          {/* ───────────── GOAL ───────────── */}
          {step >= STEP.GOAL && (
            <>
              {step > STEP.GOAL && goal ? (
                <CompletedStep
                  number={3} title="Your Goal" summary={goalSummary}
                  onEdit={() => setStep(STEP.GOAL)}
                />
              ) : step === STEP.GOAL && (
                <div className="mp-card" ref={el => stepRefs.current[STEP.GOAL] = el}>
                  <div className="mp-card__step-header">
                    <StepBadge number={3} status="active" />
                    <div>
                      <h2 className="mp-card__title">Your Goal</h2>
                      <p className="mp-card__desc">
                        We'll adjust your maintenance calories and set macro ratios accordingly.
                      </p>
                    </div>
                  </div>

                  {tdee && (
                    <div className="mp-inline-stat">
                      Maintenance: <strong>{fmt(tdee)} kcal/day</strong>
                    </div>
                  )}

                  <div className="mp-goal-grid">
                    {GOALS.map(g => {
                      const calTarget = tdee ? Math.max(1200, tdee + g.adjust) : null;
                      return (
                        <button
                          key={g.value}
                          className={`mp-goal-btn ${goal?.value === g.value ? 'mp-goal-btn--active' : ''}`}
                          onClick={() => handleGoalSelect(g)}
                        >
                          <span className="mp-goal-btn__icon">{g.icon}</span>
                          <span className="mp-goal-btn__label">{g.label}</span>
                          <span className="mp-goal-btn__desc">{g.desc}</span>
                          {calTarget && (
                            <span className="mp-goal-btn__cal">{fmt(calTarget)} kcal/day</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {goal && goalCals && (
                    <div className="mp-goal-macros">
                      <div className="mp-goal-macros__header">
                        <span>Macro targets for <strong>{goal.label}</strong></span>
                        <span className="mp-goal-macros__cal">{fmt(goalCals)} kcal/day</span>
                      </div>
                      <MacroRow calories={goalCals} ratio={{ carbs: goal.carbs, protein: goal.protein, fat: goal.fat }} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* ───────────── MEDICAL CONDITIONS ───────────── */}
          {step >= STEP.MEDICAL && (
            <>
              {step > STEP.MEDICAL ? (
                <CompletedStep
                  number={4} title="Medical Conditions" summary={medicalSummary}
                  onEdit={() => setStep(STEP.MEDICAL)}
                />
              ) : step === STEP.MEDICAL && (
                <div className="mp-card" ref={el => stepRefs.current[STEP.MEDICAL] = el}>
                  <div className="mp-card__step-header">
                    <StepBadge number={4} status="active" />
                    <div>
                      <h2 className="mp-card__title">Medical Conditions</h2>
                      <p className="mp-card__desc">We'll apply clinical dietary restrictions to your meal plan.</p>
                    </div>
                  </div>

                  <div className="mp-check-grid">
                    {MEDICAL_OPTIONS.map(opt => (
                      <label key={opt.value} className={`mp-check-card ${medical.includes(opt.value) ? 'mp-check-card--on' : ''}`}>
                        <input
                          type="checkbox"
                          checked={medical.includes(opt.value)}
                          onChange={() => toggleMedical(opt.value)}
                        />
                        <span className="mp-check-card__icon">{opt.icon}</span>
                        <span className="mp-check-card__label">{opt.label}</span>
                        <span className="mp-check-card__hint">{opt.hint}</span>
                      </label>
                    ))}
                    <label className={`mp-check-card mp-check-card--none ${medical.length === 0 ? 'mp-check-card--on' : ''}`}>
                      <input
                        type="checkbox"
                        checked={medical.length === 0}
                        onChange={() => toggleMedical('none')}
                      />
                      <span className="mp-check-card__icon">None</span>
                      <span className="mp-check-card__label">None</span>
                      <span className="mp-check-card__hint">No dietary restrictions</span>
                    </label>
                  </div>

                  <button className="mp-btn mp-btn--primary" onClick={handleMedicalNext}>
                    Continue →
                  </button>
                </div>
              )}
            </>
          )}

          {/* ───────────── ALLERGIES ───────────── */}
          {step >= STEP.ALLERGY && (
            <>
              {step > STEP.ALLERGY ? (
                <CompletedStep
                  number={5} title="Allergies" summary={allergySummary}
                  onEdit={() => setStep(STEP.ALLERGY)}
                />
              ) : step === STEP.ALLERGY && (
                <div className="mp-card" ref={el => stepRefs.current[STEP.ALLERGY] = el}>
                  <div className="mp-card__step-header">
                    <StepBadge number={5} status="active" />
                    <div>
                      <h2 className="mp-card__title">Allergies</h2>
                      <p className="mp-card__desc">Selected allergens will be fully excluded from your plan.</p>
                    </div>
                  </div>

                  <div className="mp-check-grid">
                    {ALLERGY_OPTIONS.map(opt => (
                      <label key={opt.value} className={`mp-check-card ${allergy.includes(opt.value) ? 'mp-check-card--on' : ''}`}>
                        <input
                          type="checkbox"
                          checked={allergy.includes(opt.value)}
                          onChange={() => toggleAllergy(opt.value)}
                        />
                        <span className="mp-check-card__icon">{opt.icon}</span>
                        <span className="mp-check-card__label">{opt.label}</span>
                        <span className="mp-check-card__hint">{opt.hint}</span>
                      </label>
                    ))}
                    <label className={`mp-check-card mp-check-card--none ${allergy.length === 0 ? 'mp-check-card--on' : ''}`}>
                      <input
                        type="checkbox"
                        checked={allergy.length === 0}
                        onChange={() => toggleAllergy('none')}
                      />
                      <span className="mp-check-card__icon">None</span>
                      <span className="mp-check-card__label">None</span>
                      <span className="mp-check-card__hint">No known allergies</span>
                    </label>
                  </div>

                  <button className="mp-btn mp-btn--primary" onClick={handleAllergyNext}>
                    Continue →
                  </button>
                </div>
              )}
            </>
          )}

          {/* ───────────── DIET TYPE + GENERATE ───────────── */}
          {step >= STEP.DIET && step < STEP.RESULTS && (
            <div className="mp-card" ref={el => stepRefs.current[STEP.DIET] = el}>
              <div className="mp-card__step-header">
                <StepBadge number={6} status="active" />
                <div>
                  <h2 className="mp-card__title">Diet Preference</h2>
                  <p className="mp-card__desc">What kind of foods should we include?</p>
                </div>
              </div>

              <div className="mp-diet-row">
                {[
                  { v: 'veg',     l: 'Vegetarian' },
                  { v: 'non-veg', l: 'Non-Vegetarian' },
                  { v: 'vegan',   l: 'Vegan' },
                ].map(({ v, l }) => (
                  <button
                    key={v}
                    className={`mp-diet-btn ${dietType === v ? 'mp-diet-btn--active' : ''}`}
                    onClick={() => setDietType(v)}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Summary before generating */}
              {goal && goalCals && (
                <div className="mp-summary-box">
                  <div className="mp-summary-box__row">
                    <span>Goal</span><strong>{goal.label}</strong>
                  </div>
                  <div className="mp-summary-box__row">
                    <span>Daily Calories</span><strong>{fmt(goalCals)} kcal</strong>
                  </div>
                  <div className="mp-summary-box__row">
                    <span>Diet</span><strong>{dietSummary}</strong>
                  </div>
                  {medical.length > 0 && (
                    <div className="mp-summary-box__row">
                      <span>Medical</span><strong>{medical.join(', ')}</strong>
                    </div>
                  )}
                  {allergy.length > 0 && (
                    <div className="mp-summary-box__row">
                      <span>Allergies</span><strong>{allergy.join(', ')}</strong>
                    </div>
                  )}
                  <div className="mp-summary-box__row">
                    <span>Meals</span><strong>3 (Breakfast · Lunch · Dinner)</strong>
                  </div>
                  <div className="mp-summary-box__row">
                    <span>Vegetables</span><strong>100g mandatory per meal</strong>
                  </div>
                </div>
              )}

              {error && <div className="mp-error">{error}</div>}

              <button
                className="mp-btn mp-btn--generate"
                onClick={handleGenerate}
                disabled={loading}
              >
                {loading
                  ? <><span className="mp-spinner" /> Generating your plan…</>
                  : 'Generate My Meal Plan'}
              </button>
            </div>
          )}

          {/* ───────────── RESULTS ───────────── */}
          {step === STEP.RESULTS && plan && (
            <div className="mp-results" ref={el => stepRefs.current[STEP.RESULTS] = el}>
              <div className="mp-results__header">
                <div>
                  <h2 className="mp-results__title">Your Personalised Meal Plan</h2>
                  <p className="mp-results__meta">
                    {goal?.label} · {dietSummary} · 3 meals/day
                    {medical.length > 0 && ` · ${medical.join(', ')}`}
                    {allergy.length > 0 && ` · No ${allergy.join('/')}`}
                  </p>
                </div>
                <button className="mp-restart-btn" onClick={restart}>Start Over</button>
              </div>

              {/* Totals card */}
              <div className="mp-totals">
                <div className="mp-totals__header">
                  <span className="mp-totals__badge">Target</span>
                  <div className="mp-totals__nums">
                    <span>{fmt(plan.targetMacros.calories)} <em>kcal</em></span>
                    <span>{plan.targetMacros.protein}g <em>protein</em></span>
                    <span>{plan.targetMacros.carbs}g <em>carbs</em></span>
                    <span>{plan.targetMacros.fat}g <em>fat</em></span>
                  </div>
                </div>
                <div className="mp-totals__divider" />
                <div className="mp-totals__header">
                  <span className="mp-totals__badge mp-totals__badge--actual">Actual</span>
                  <div className="mp-totals__nums">
                    <span>{fmt(plan.totals.calories)} <em>kcal</em></span>
                    <span>{plan.totals.protein}g <em>protein</em></span>
                    <span>{plan.totals.carbs}g <em>carbs</em></span>
                    <span>{plan.totals.fat}g <em>fat</em></span>
                  </div>
                </div>
                {goal && (
                  <div className="mp-totals__macro-bar">
                    <MacroRow
                      calories={goalCals}
                      ratio={{ carbs: goal.carbs, protein: goal.protein, fat: goal.fat }}
                    />
                  </div>
                )}
              </div>

              {/* Meal cards */}
              <div className="mp-meals">
                {plan.meals.map((meal, i) => (
                  <MealResultCard key={i} meal={meal} index={i} />
                ))}
              </div>

              <p className="mp-disclaimer">
                Every meal includes 100g of fresh vegetables. Quantities are calculated to
                match your macro targets. Consult a registered dietitian for medically
                supervised plans.
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
