import React from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  GraduationCap, 
  ArrowRight, 
  Users, 
  Trophy, 
  Zap, 
  Compass,
  BookOpen
} from 'lucide-react';
import { statsData } from '../data/landingData';

export default function About({ onOpenDemo }) {
  const comparisonPoints = [
    {
      capability: 'Classroom Engagement & Focus',
      legacy: 'Passive recorded videos with cameras off; over 85% of students report multitasking or losing attention.',
      nova: 'Infinite multi-cursor digital whiteboards, live code sandboxes, and lightning quiz rounds keep everyone actively solving problems.',
      advantage: '3.8x higher completion'
    },
    {
      capability: 'Homework & Conceptual Guidance',
      legacy: 'Stuck students resort to copy-pasting cheating answers from forum sites without understanding underlying logic.',
      nova: '24/7 Nova AI Socratic Companion provides adaptive hints and visual diagrams—guiding students to discover solutions themselves.',
      advantage: 'True conceptual mastery'
    },
    {
      capability: 'Peer Camaraderie & Social Learning',
      legacy: 'Lonely, solitary screen-staring with zero peer interaction, leading to high burnout and dropout rates.',
      nova: '1-click 4-student breakout pods, collaborative whiteboards, and daily study streaks build lifelong study buddy friendships.',
      advantage: '90+ day study streaks'
    },
    {
      capability: 'Teacher Grading & Parent Insights',
      legacy: 'Teachers spend 12+ hours grading on weekends; parents only see vague letter grades at semester end.',
      nova: 'AI assisted grading drafts detailed rubric feedback instantly; parents receive automated weekly comprehension digests.',
      advantage: '8.5 hrs saved / week'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#0E1526] to-[#0B0F19]">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[130px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Rethinking Education for the Digital Generation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passive Video Lectures Put Students to Sleep. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400">
              Nova Academy Sparks Real Curiosity.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Education should be an interactive adventure, not solitary screen-time. 
            We replaced passive Zoom webinars with active collaborative canvases, live peer study pods, and 24/7 Socratic AI guidance.
          </p>
        </div>

        {/* Quantified Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 md:mb-12">
          {statsData.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card-hover p-6 rounded-2xl relative overflow-hidden group border border-white/10 card-hover-lift"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none"></div>
              
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-orange-300 tracking-tight font-mono">
                {stat.value}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mt-2 group-hover:text-amber-300 transition-colors">
                {stat.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Comparison Architectural Matrix */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              The Evolution of Modern Online Learning
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
              Compare outdated static lecture platforms with Nova Academy's active learning ecosystem.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0E1526]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-amber-950/30">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#090E1B] p-4 sm:p-5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
              <div className="col-span-12 sm:col-span-4 text-slate-300">Learning Dimension</div>
              <div className="hidden sm:block sm:col-span-4 text-slate-400">Traditional Recorded MOOCs / Zoom</div>
              <div className="col-span-12 sm:col-span-4 text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Nova Active Classroom</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-white/5">
              {comparisonPoints.map((point, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-12 p-4 sm:p-5 gap-3 sm:gap-4 items-center hover:bg-white/[0.02] transition-colors"
                >
                  {/* Dimension Column */}
                  <div className="col-span-12 sm:col-span-4">
                    <span className="text-sm font-bold text-white block">
                      {point.capability}
                    </span>
                    <span className="inline-block mt-1 sm:hidden text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {point.advantage}
                    </span>
                  </div>

                  {/* Legacy Column */}
                  <div className="col-span-12 sm:col-span-4 text-xs text-slate-400 flex items-start gap-2 bg-slate-900/40 sm:bg-transparent p-3 sm:p-0 rounded-lg">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{point.legacy}</span>
                  </div>

                  {/* Nova Academy Column */}
                  <div className="col-span-12 sm:col-span-4 text-xs text-slate-200 flex items-start gap-2 bg-amber-950/20 sm:bg-transparent p-3 sm:p-0 rounded-lg border sm:border-0 border-amber-500/20">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                    <div>
                      <span className="font-medium text-slate-200">{point.nova}</span>
                      <span className="hidden sm:inline-block ml-2 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {point.advantage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer Banner */}
            <div className="bg-gradient-to-r from-amber-950/50 via-slate-900 to-amber-950/50 p-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Ready to Experience Active Learning?</h4>
                  <p className="text-[11px] text-slate-400">Join a live demo class and see why 120,000+ students love learning here.</p>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Interactive Demo Class</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
