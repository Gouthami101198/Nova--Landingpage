import React, { useState } from 'react';
import { 
  workflowSteps 
} from '../data/landingData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Trophy, 
  Zap, 
  Users, 
  Award, 
  Flame, 
  Check 
} from 'lucide-react';

export default function HowItWorks({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#0E1528] to-[#0B0F19]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>The Learning Journey</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Nova Academy Works in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From your very first lesson to earning verified mastery certificates, 
            here is how you will transform your confidence and academic success.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {workflowSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                activeStep === idx ? 'bg-slate-950 text-amber-400 font-extrabold' : 'bg-slate-800 text-slate-400'
              }`}>
                {idx + 1}
              </span>
              <span>{step.badge}</span>
            </button>
          ))}
        </div>

        {/* Step Details & Interactive Mockup Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Step Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block text-3xl sm:text-4xl font-black text-amber-500/30 font-mono">
              {workflowSteps[activeStep].number}
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
              {workflowSteps[activeStep].title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {workflowSteps[activeStep].description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">
                Highlights at this stage:
              </span>
              {workflowSteps[activeStep].highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-all cursor-pointer"
              >
                <span>Experience this in Demo Class</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Step Visualizer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0E1528] p-6 shadow-2xl shadow-amber-950/40 relative overflow-hidden card-hover-lift">
              
              {/* Step 1 Visual: Track Selection */}
              {activeStep === 0 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Choose Your Academic Track</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Placement Matched
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {[
                      { name: 'Class 12 CBSE & JEE Vectors', level: 'Boards & JEE Advanced Track', active: true },
                      { name: 'Python & Algorithmic Code', level: 'Beginner to INMO Olympiad', active: false },
                      { name: 'IIT-JEE & NEET Physics Labs', level: 'Kinematics & Electromagnetism', active: false },
                      { name: 'Class 9-10 Board Boosters', level: 'NCERT Foundation & NTSE', active: false },
                    ].map((track, i) => (
                      <div 
                        key={i} 
                        className={`p-3.5 rounded-xl border transition-all ${
                          track.active 
                            ? 'bg-amber-500/15 border-amber-500/50 shadow-md shadow-amber-500/10' 
                            : 'bg-slate-900/80 border-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{track.name}</span>
                          {track.active && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">{track.level}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Room Code Entry: <strong className="font-mono text-amber-400">#NOVA-INDIA-2026</strong></span>
                    <span className="text-emerald-400 font-semibold text-[11px]">Instant 1-Click Access</span>
                  </div>
                </div>
              )}

              {/* Step 2 Visual: Interactive Live Whiteboard & Breakout Pods */}
              {activeStep === 1 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Breakout Pod #3: Active Canvas</span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      4 Students Live
                    </span>
                  </div>

                  {/* Multi-Cursor Whiteboard Preview */}
                  <div className="bg-[#070B14] p-4 rounded-xl border border-white/5 space-y-3 relative overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        Aarav S. (Drawing Curve)
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Ananya R. (Adding Vector)
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/70 rounded-lg border border-white/5 font-mono text-xs text-amber-300">
                      d/dx [sin(2x) * cos(x)] = 2cos(2x)cos(x) - sin(2x)sin(x)
                    </div>

                    <p className="text-xs text-slate-300 italic">
                      "Pod consensus reached! All 4 students solved step 3 before the breakout timer expired."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                      <span className="font-bold block">Live Teacher Broadcast</span>
                      <span className="text-[10px] text-slate-400">Instructor visiting Pod #3</span>
                    </div>
                    <div className="p-2.5 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300">
                      <span className="font-bold block">Collaborative Whiteboard</span>
                      <span className="text-[10px] text-slate-400">Zero latency shared canvas</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 Visual: Certified Mastery & Streaks */}
              {activeStep === 2 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Verified Learner Passport</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-400" />
                      95 Day Study Streak
                    </span>
                  </div>

                  {/* Certified Diploma Badge */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-violet-500/20 border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-6 h-6 text-amber-400" />
                        <div>
                          <h4 className="text-xs font-bold text-white">CBSE &amp; JEE Advanced Vectors Mastery Certificate</h4>
                          <span className="text-[10px] text-slate-400">Issued by Nova Academy &amp; Verified by Academic Board</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-300">Grade: A+ (99.4%ile)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                      <span className="text-amber-400 font-bold block text-sm font-mono">1,850 XP</span>
                      <span className="text-[10px] text-slate-400">Earned This Month</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                      <span className="text-emerald-400 font-bold block text-sm font-mono">100%</span>
                      <span className="text-[10px] text-slate-400">Quiz Completion</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                      <span className="text-violet-400 font-bold block text-sm font-mono">Top 2%</span>
                      <span className="text-[10px] text-slate-400">Global Class Rank</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
