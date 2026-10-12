import React, { useState } from 'react';
import { 
  Video, 
  Sparkles, 
  Trophy, 
  Users, 
  HelpCircle, 
  GraduationCap, 
  ArrowRight, 
  Zap, 
  Clock,
  BookOpen
} from 'lucide-react';
import { featuresData } from '../data/landingData';

// Map icon strings to Lucide components
const iconMap = {
  Video: Video,
  Sparkles: Sparkles,
  Trophy: Trophy,
  Users: Users,
  HelpCircle: HelpCircle,
  GraduationCap: GraduationCap,
};

export default function Features({ onOpenDemo, onOpenAccount }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 
    'Virtual Classroom', 
    'AI Tutor', 
    'Gamification', 
    'Interactive Quizzes', 
    'Educator Tools'
  ];

  const filteredFeatures = selectedCategory === 'All'
    ? featuresData
    : featuresData.filter(f => f.category === selectedCategory);

  return (
    <section id="features" className="py-12 md:py-16 relative overflow-hidden bg-[#0B0F19]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-violet-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Learning Superpowers</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Joyful Mastery.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400">
              Engineered for Real Understanding.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every feature in Nova Academy is purpose-built to pull students into the flow state of active discovery, deep comprehension, and collaborative problem-solving.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 border border-amber-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Zap;

            return (
              <div 
                key={feature.id}
                className="glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-white/10 card-hover-lift"
              >
                {/* Subtle card glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/30 group-hover:scale-125 transition-all duration-500 pointer-events-none"></div>

                <div>
                  {/* Card Header: Category & Metric Chip */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 group-hover:border-amber-400/50 transition-colors">
                      {feature.badge}
                    </span>

                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
                      {feature.metric}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:border-amber-400 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {feature.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-[10px] font-medium text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={onOpenDemo}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/btn cursor-pointer transition-colors"
                  >
                    <span>Simulate in Demo Class</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenAccount}
                    className="text-[11px] text-slate-400 hover:text-white transition-colors"
                  >
                    Enroll Free &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Showcase: Live Interactive Socratic AI & Learning Dashboard (Pure React & SVG - Zero Images) */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0B101D] p-4 sm:p-6 lg:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Interactive AI Companion Workspace</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white">
                Nova Socratic AI Study Companion & Mastery Dashboard
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Real-time hint scaffolding, conceptual physics vector diagrams, daily study streaks, and certified skill trees.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Calculus: 92% Mastery
              </span>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
              >
                <span>Launch Demo Class</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Socratic Dashboard Interface Window */}
          <div className="rounded-xl border border-white/10 bg-[#070B14] p-3 sm:p-5 shadow-2xl space-y-5">
            {/* Window Top Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-xs font-bold text-slate-300 ml-2">Nova Socratic AI &mdash; Live Workspace</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-bold text-amber-300">
                  <span className="text-base leading-none">🔥</span>
                  <span>Active 92-Day Streak</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-[10px] font-black text-slate-950">
                    A
                  </div>
                  <span className="font-semibold">Aarav S. (Scholar)</span>
                </div>
              </div>
            </div>

            {/* Main Workspace Grid (Left: Achievement Overview & Skill Tree | Right: Socratic Dialogue & Vector Diagram) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* LEFT COLUMN: Student Achievement Overview */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* 1. Daily Study Streak Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-white/10 relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Daily Study Streak
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-white font-mono">92</span>
                        <span className="text-xs font-semibold text-amber-300">Days Active</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">Keep it going, Aarav! 8 days until Century Award 🏆</p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-amber-500/30">
                      🔥
                    </div>
                  </div>

                  {/* Progress Streak Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
                      <span>Milestone Progress</span>
                      <span className="text-amber-400 font-bold">92%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 w-[92%] transition-all duration-500 shadow-sm"></div>
                    </div>
                  </div>
                </div>

                {/* 2. Skill Tree Progress */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Skill Tree Progress</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Verified Scaffolding
                    </span>
                  </div>

                  {/* Subject Category 1: Class 12 CBSE & JEE Mathematics */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                      <span className="text-amber-300 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        Class 12 CBSE &amp; JEE Math
                      </span>
                      <span className="text-emerald-400 font-mono">88% Avg</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                        <span className="text-xs font-mono font-bold text-emerald-400 block">85%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Derivatives</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                        <span className="text-xs font-mono font-bold text-amber-400 block">68%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Integrals</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                        <span className="text-xs font-mono font-bold text-violet-400 block">92%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Limits</span>
                      </div>
                    </div>
                  </div>

                  {/* Subject Category 2: Computer Science */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                      <span className="text-sky-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-sky-400" />
                        Algorithms & Python
                      </span>
                      <span className="text-sky-400 font-mono">74% Avg</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                        <span className="text-xs font-mono font-bold text-sky-400 block">74%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Data Struct</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                        <span className="text-xs font-mono font-bold text-rose-400 block">58%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Complexity</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                        <span className="text-xs font-mono font-bold text-emerald-400 block">89%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Python Lab</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Verified Achievements Banner */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-violet-500/10 via-slate-900 to-amber-500/10 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <h5 className="font-bold text-white text-xs">CBSE &amp; JEE Advanced STEM Honors</h5>
                      <span className="text-[10px] text-slate-400">Awarded for 90+ Day Consecutive Problem Solving</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                    VERIFIED
                  </span>
                </div>

              </div>

              {/* RIGHT COLUMN: Nova AI Dialogue & Interactive Vector Diagram */}
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                
                {/* Active Problem Prompt Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-violet-500/30">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                    <span className="font-bold text-violet-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      Physics & Calculus Socratic Challenge
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Step 1 of 3
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 mt-2 font-mono leading-relaxed">
                    <strong>Problem:</strong> Calculate the terminal velocity of a skydiver (m = 80kg) where drag force is <span className="text-amber-300">F<sub>d</sub> = &frac12; &rho; v<sup>2</sup> C<sub>d</sub> A</span>.
                  </p>
                </div>

                {/* Socratic Dialogue Stream */}
                <div className="space-y-3 p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs">
                  
                  {/* Message 1: Nova AI */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold shrink-0 text-xs">
                      AI
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-200 leading-relaxed max-w-xl">
                      <strong className="text-violet-300 block mb-0.5">Nova AI Companion:</strong>
                      Hello Aarav! Let's solve this conceptually. First: what forces are balanced against each other when reaching steady terminal velocity?
                    </div>
                  </div>

                  {/* Message 2: Aarav (Student) */}
                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-100 leading-relaxed max-w-xl text-right">
                      <strong className="text-amber-300 block mb-0.5">Aarav (Student):</strong>
                      Downward Gravity (F<sub>g</sub>) and Upward Air Resistance (F<sub>d</sub>)!
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold shrink-0 text-xs">
                      A
                    </div>
                  </div>

                  {/* Message 3: Socratic Hint Badge */}
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-400/40 flex items-start gap-2.5 shadow-md">
                    <span className="text-base leading-none">💡</span>
                    <div>
                      <strong className="text-amber-300 block">Socratic Hint 1: Force Equilibrium:</strong>
                      <span className="text-slate-300 text-[11px] leading-relaxed">
                        At terminal velocity, vertical acceleration is zero (<em className="text-amber-200">a = 0</em>). Therefore, net force is zero (<em className="text-amber-200">&Sigma;F = 0</em>), which directly yields <strong className="text-white">F<sub>g</sub> = F<sub>d</sub></strong>.
                      </span>
                    </div>
                  </div>

                  {/* Message 4: Nova AI Follow-up */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold shrink-0 text-xs">
                      AI
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-200 leading-relaxed max-w-xl">
                      <strong className="text-violet-300 block mb-0.5">Nova AI Companion:</strong>
                      Spot on! Since F<sub>g</sub> = m &middot; g, we have <code className="text-emerald-300 font-bold">80kg &times; 9.8m/s&sup2; = 784 N</code>. Now look at the dynamic vector diagram below:
                    </div>
                  </div>
                </div>

                {/* Interactive Forces at Terminal Velocity Vector Diagram (SVG) */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-amber-500/30 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      Dynamic Vector Diagram &mdash; Forces at Terminal Velocity
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Equilibrium: Fg = Fd
                    </span>
                  </div>

                  {/* SVG Vector Graphic */}
                  <div className="py-2 flex items-center justify-center">
                    <svg className="w-full max-w-md h-36" viewBox="0 0 360 140">
                      {/* Central Skydiver Node */}
                      <circle cx="180" cy="70" r="18" fill="#1E293B" stroke="#F59E0B" strokeWidth="2.5" />
                      <text x="180" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">80kg</text>

                      {/* Upward Air Drag Vector */}
                      <line x1="180" y1="52" x2="180" y2="12" stroke="#10B981" strokeWidth="3" markerEnd="url(#arrow-green)" />
                      <polygon points="180,6 175,16 185,16" fill="#10B981" />
                      <text x="195" y="24" fill="#34D399" fontSize="11" fontWeight="bold">Fd (Air Drag) = 784 N &uarr;</text>

                      {/* Downward Gravity Vector */}
                      <line x1="180" y1="88" x2="180" y2="128" stroke="#F59E0B" strokeWidth="3" />
                      <polygon points="180,134 175,124 185,124" fill="#F59E0B" />
                      <text x="195" y="122" fill="#FBBF24" fontSize="11" fontWeight="bold">Fg (Gravity) = 784 N &darr;</text>

                      {/* Equilibrium Formula Box */}
                      <rect x="15" y="42" width="125" height="56" rx="8" fill="#0B132B" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <text x="25" y="62" fill="#94A3B8" fontSize="10">Equilibrium State:</text>
                      <text x="25" y="78" fill="#FDE68A" fontSize="11" fontWeight="bold">v = &radic;(2mg / &rho;CdA)</text>
                      <text x="25" y="91" fill="#34D399" fontSize="9" fontWeight="bold">v &asymp; 54.2 m/s (195 km/h)</text>
                    </svg>
                  </div>
                </div>

                {/* Socratic Interactive Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Ready for Step 2: Solve for Surface Area (A) with Parachute Deployed</span>
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="w-full sm:w-auto px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Solve in Live Classroom</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl">
            <span className="text-xs font-semibold text-slate-300">
              Are you an educator, tutor, or school administrator interested in hosting classes?
            </span>
            <button
              onClick={onOpenAccount}
              className="px-4 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md cursor-pointer"
            >
              Get Educator Suite
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
