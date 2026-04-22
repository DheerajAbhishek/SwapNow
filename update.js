const fs = require('fs');

const heroJsx = `import React from 'react'

function HeroSection() {
  return (
    <section className="hero-wrapper" id="top" aria-label="Swapnow introduction">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-kicker">Swapnow Personalized Nutrition</span>
        <h1 className="hero-title">Meals designed around your body, goals, and routine.</h1>
        <p className="hero-text">
          Swapnow blends nutrition intelligence with practical meal planning, so every suggestion is aligned with your BMI, calorie target, and day-to-day lifestyle. We are a healthy food brand focused on true personalization. Take our proven approach today to better meal planning.
        </p>

        <div className="hero-badges" aria-label="Core value points">
          <span className="hero-badge">BMI-led planning</span>
          <span className="hero-badge">Calorie-focused guidance</span>
          <span className="hero-badge">Doctor-backed consultation</span>
        </div>

        <aside className="hero-stats" aria-label="Brand pillars">
          <article className="metric-card">
            <p className="metric-label">Nutrition Method</p>
            <p className="metric-value">Personalized Meal Mapping</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Consultation Layer</p>
            <p className="metric-value">Doctor Guidance Integration</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">User Experience</p>
            <p className="metric-value">Actionable Recommendations</p>
          </article>
        </aside>
      </div>
    </section>
  )
}

export default HeroSection;
`;
fs.writeFileSync('src/components/HeroSection.jsx', heroJsx);

const appCss = `
.page-shell {
  min-height: 100vh;
  color: var(--text-strong);
  position: relative;
  overflow-x: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #fcfcfc;
}

.main-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--stroke-soft);
  transition: all 0.3s ease;
}

.site-header-inner {
  width: min(1200px, calc(100% - 4rem));
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-mark img {
  height: 40px;
  width: auto;
}

.site-nav {
  display: flex;
  gap: 1.5rem;
}

.site-nav a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-700);
  text-decoration: none;
  transition: color 0.2s;
}

.site-nav a:hover {
  color: var(--primary-600);
}

.container {
  width: min(1200px, calc(100% - 4rem));
  margin: 0 auto;
  padding: 5rem 0;
}

.hero-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('../assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-bottom: 4rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(6, 56, 71, 0.9) 0%, rgba(6, 56, 71, 0.4) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: min(1200px, calc(100% - 4rem));
  margin: 0 auto;
  padding-top: 80px;
  color: #fff;
  max-width: 800px;
}

.hero-kicker {
  color: var(--primary-600);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: block;
}

.hero-title {
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #fff;
}

.hero-text {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: rgba(255,255,255,0.9);
  max-width: 600px;
}

.hero-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-badge {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}

.metric-card .metric-label {
  color: var(--secondary-700);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.metric-card .metric-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.section-card {
  background: #fff;
  border-radius: 24px;
  padding: 4rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.section-kicker {
  color: var(--primary-500);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary-700);
  margin-bottom: 1.5rem;
}

.section-text {
  font-size: 1.125rem;
  color: var(--text-body);
  line-height: 1.7;
}

.calculator-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: min(1200px, calc(100% - 4rem));
  margin: 0 auto;
}

.site-footer {
  background: var(--primary-700);
  color: #fff;
  text-align: center;
  padding: 4rem 2rem;
  margin-top: 4rem;
}

@media (max-width: 768px) {
  .calculator-grid { grid-template-columns: 1fr; }
  .section-card { padding: 2rem; }
  .hero-badges { flex-direction: column; }
}
`;
fs.writeFileSync('src/App.css', appCss);

const appJsx = `import './theme.css'
import './App.css'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import PersonalizedSection from './components/PersonalizedSection'
import BmiCalculatorSection from './components/BmiCalculatorSection'
import CalorieCalculatorSection from './components/CalorieCalculatorSection'
import DoctorConsultationSection from './components/DoctorConsultationSection'
import TestimonialsSection from './components/TestimonialsSection'
import ReelsSection from './components/ReelsSection'

function App() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="main-content">
        <HeroSection />

        <div className="container" style={{paddingTop: 0}}>
          <PersonalizedSection />
        </div>

        <div className="calculator-grid" id="tools">
          <BmiCalculatorSection />
          <CalorieCalculatorSection />
        </div>

        <div className="container">
          <DoctorConsultationSection />
          <TestimonialsSection testimonials={[]} />
          <ReelsSection reels={[]} />
        </div>
      </main>

      <footer className="site-footer">
        <p>Swapnow - Healthy food, personalized for your goals. Nutrition that works.</p>
      </footer>
    </div>
  )
}

export default App
`;
fs.writeFileSync('src/App.jsx', appJsx);
