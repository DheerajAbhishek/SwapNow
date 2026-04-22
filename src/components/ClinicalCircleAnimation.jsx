import { useRef, useEffect, useState } from 'react'
import {
    Stethoscope, Microscope, Dna, LayoutDashboard,
    ChefHat, Leaf, Package, Smartphone, TrendingUp, CheckCircle
} from 'lucide-react'
import srcLogo from '../assets/logos/logo.svg' // Import center logo
import './ClinicalCircleAnimation.css'

const STAGES = [
    {
        id: 1,
        label: 'Consult &\nClinical Data',
        sublabel: 'Doctor-led diagnostics & blood panel',
        icons: [Stethoscope, Microscope],
        color: '#7272f2',
        glow: 'rgba(114,114,242,0.35)',
        track: '#7272f2',
    },
    {
        id: 2,
        label: 'Personalized\nHealth Blueprint',
        sublabel: 'Genetics + metabolic markers decoded',
        icons: [Dna, LayoutDashboard],
        color: '#199e41',
        glow: 'rgba(25,158,65,0.35)',
        track: '#199e41',
    },
    {
        id: 3,
        label: 'Nutritionist-Crafted\nFuel',
        sublabel: 'Precision recipes built for your body',
        icons: [ChefHat, Leaf],
        color: '#f78757',
        glow: 'rgba(247,135,87,0.35)',
        track: '#f78757',
    },
    {
        id: 4,
        label: 'Precision\nMeal Delivery',
        sublabel: 'Nutritionist-approved, door to door',
        icons: [Package, CheckCircle],
        color: '#f9c041',
        glow: 'rgba(249,192,65,0.35)',
        track: '#f9c041',
    },
    {
        id: 5,
        label: 'Track, Consult\n& Optimize',
        sublabel: 'Feedback loop to your clinical team',
        icons: [Smartphone, TrendingUp],
        color: '#199e41',
        glow: 'rgba(25,158,65,0.35)',
        track: '#0d8fa8',
    },
]

const STAGE_DURATION = 3      // seconds each stage is active

export default function ClinicalCircleAnimation() {
    const containerRef = useRef(null)
    const [activeStage, setActiveStage] = useState(0)
    const [progress, setProgress] = useState(0)       // 0-100 fill within current stage

    // Unified animation loop to prevent desync glitches
    useEffect(() => {
        const start = performance.now()
        let raf
        const cycleTime = STAGE_DURATION * 1000
        const totalSteps = STAGES.length

        const tick = (now) => {
            // now from requestAnimationFrame can occasionally be very slightly earlier than performance.now()
            // on the first frame start, resulting in a negative elapsed. Math.max prevents this.
            const elapsed = Math.max(0, now - start)

            const currentStage = Math.floor(elapsed / cycleTime) % totalSteps
            const pct = ((elapsed % cycleTime) / cycleTime) * 100

            setActiveStage(currentStage)
            setProgress(pct)

            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [])

    const stage = STAGES[activeStage]

    // Larger SVG circle params to accommodate big nodes
    const R = 160
    const CX = 220
    const CY = 220
    const circ = 2 * Math.PI * R
    // overall progress across all stages
    const totalPct = (activeStage / STAGES.length) + (progress / 100) / STAGES.length

    return (
        <div className="cca-root" ref={containerRef} style={{ width: '500px', height: '500px' }}>

            {/* ── Center Logo ── */}
            <div className="cca-center-logo" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '140px',
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'white',
                boxShadow: `0 0 60px ${stage.glow}, 0 4px 20px rgba(0,0,0,0.08)`,
                transition: 'box-shadow 0.6s ease',
                zIndex: 10
            }}>
                <img src={srcLogo} alt="Logo" style={{ width: '65%' }} />
            </div>

            {/* ── Circular track ── */}
            <svg className="cca-ring-svg" viewBox="0 0 440 440" aria-hidden="true" style={{ overflow: 'visible', width: '100%', height: '100%' }}>
                {/* background track */}
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
                {/* progress arc */}
                <circle
                    cx={CX} cy={CY} r={R}
                    fill="none"
                    stroke={stage.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${circ * totalPct} ${circ}`}
                    strokeDashoffset={0}
                    transform={`rotate(-90 ${CX} ${CY})`}
                    style={{ transition: 'stroke 0.6s ease' }}
                />
                {/* Stage node circles with icons */}
                {STAGES.map((s, i) => {
                    const angle = (i / STAGES.length) * 2 * Math.PI - Math.PI / 2
                    const dx = CX + R * Math.cos(angle)
                    const dy = CY + R * Math.sin(angle)
                    const isPast = i < activeStage || (i === activeStage && progress > 5)
                    const isActive = i === activeStage

                    // Position labels radially outwards
                    const textOffsetX = Math.cos(angle) * 50
                    const textOffsetY = Math.sin(angle) * 50 + 5
                    const textAnchor = Math.cos(angle) > 0.1 ? "start" : Math.cos(angle) < -0.1 ? "end" : "middle"

                    const StageIcon = s.icons[0]

                    return (
                        <g key={s.id}>
                            {/* Big background circular node */}
                            <circle
                                cx={dx} cy={dy} r={28}
                                fill={isPast ? s.color : '#ffffff'}
                                stroke={isPast ? s.color : '#e2e8f0'}
                                strokeWidth="2"
                                style={{ transition: 'fill 0.5s ease, stroke 0.5s ease' }}
                            />
                            {/* Embedded Lucide Icon inside SVG container */}
                            <g transform={`translate(${dx - 14}, ${dy - 14})`}
                                style={{ color: isPast ? '#ffffff' : '#64748b', transition: 'color 0.5s ease' }}>
                                <StageIcon size={28} strokeWidth={1.5} />
                            </g>

                            {/* Label */}
                            <text
                                x={dx + textOffsetX}
                                y={dy + textOffsetY - (s.label.includes('\n') ? 8 : 0)}
                                textAnchor={textAnchor}
                                fill={isActive ? s.color : '#1a202c'}
                                fontSize={isActive ? "15" : "13.5"}
                                fontWeight={isActive ? "700" : "600"}
                                style={{
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    pointerEvents: 'none',
                                    filter: isActive ? `drop-shadow(0px 2px 6px ${s.glow})` : 'drop-shadow(0px 1px 2px rgba(0,0,0,0.05))',
                                    letterSpacing: '-0.3px',
                                }}
                            >
                                {s.label.split('\n').map((line, index) => (
                                    <tspan key={index} x={dx + textOffsetX} dy={index === 0 ? 0 : "1.2em"}>
                                        {line}
                                    </tspan>
                                ))}
                            </text>
                        </g>
                    )
                })}
            </svg>

        </div>
    )
}
