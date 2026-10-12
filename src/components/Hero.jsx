import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  HelpCircle, 
  Hand, 
  MessageSquare, 
  Code, 
  Compass, 
  Check, 
  Zap,
  BookOpen,
  ZoomIn,
  RotateCcw,
  Maximize2,
  X
} from 'lucide-react';
import { trustedSchools } from '../data/landingData';

export default function Hero({ onOpenDemo, onOpenAccount }) {
  const [activeBoardTab, setActiveBoardTab] = useState('math');
  const [handRaised, setHandRaised] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizScore, setQuizScore] = useState(null);
  const [selectedPartner, setSelectedPartner] = useState(trustedSchools[0]);
  const [hoveredLine, setHoveredLine] = useState(null);
  const [isRunningSimulation, setIsRunningSimulation] = useState(false);

  const pythonLines = [
    { num: 1, text: "def binary_search(arr, target):", note: "O(log n) Time Complexity" },
    { num: 2, text: "    left, right = 0, len(arr) - 1", note: "Initializes pointer bounds" },
    { num: 3, text: "    while left <= right:", note: "Halves search interval every step" },
    { num: 4, text: "        mid = (left + right) // 2", note: "Calculates integer midpoint" },
    { num: 5, text: "        if arr[mid] == target: return mid", note: "🎯 Target 42 matched at index [7]" },
    { num: 6, text: "        elif arr[mid] < target: left = mid + 1", note: "Discards left half (arr[mid] < 42)" },
    { num: 7, text: "        else: right = mid - 1", note: "Discards right half" },
    { num: 8, text: "    return -1", note: "Target not found fallback" }
  ];

  const handleRunSimulation = () => {
    setIsRunningSimulation(true);
    setTimeout(() => {
      setIsRunningSimulation(false);
    }, 600);
  };

  const handleQuizAnswer = (option) => {
    setSelectedQuizOption(option);
    if (option === 'A') {
      setQuizScore('correct');
    } else {
      setQuizScore('incorrect');
    }
  };

  return (
    <section className="relative pt-24 pb-10 md:pt-32 md:pb-14 overflow-hidden">
      {/* Background ambient lighting and educational tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[950px] md:h-[500px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-violet-500/15 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Announcement Chip */}
          <div 
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 shadow-lg shadow-amber-500/10 backdrop-blur-md hover:border-amber-400/60 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200">Nova Studio v3.0 Live</span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
              Fall 2026 CBSE & JEE Interactive Cohort Now Enrolling
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Where Curiosity Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400 inline-block">
              Classroom Magic
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Say goodbye to boring video lectures. Learn with real master teachers on infinite collaborative whiteboards, solve problems with live peer pods, and level up with our 24/7 Socratic AI mentor.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenAccount}
              className="btn-sheen w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Join Classroom Free</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 shadow-lg hover:border-amber-500/40 transition-all cursor-pointer group"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 group-hover:text-amber-300 fill-amber-400/20 group-hover:fill-amber-400/40" />
              <span>Try Live Interactive Demo Class</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Award className="w-4 h-4 text-amber-400 animate-bounce-subtle" />
              NEP 2020 & DPDP Act Certified Safe
            </span>
            <span className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Payment Needed (Free Starter Pass)
            </span>
            <span className="flex items-center gap-1.5 hover:text-violet-300 transition-colors">
              <Users className="w-4 h-4 text-violet-400" />
              350k+ Active Students Across India
            </span>
          </div>

          {/* Live Classroom Activity Infinite Marquee */}
          <div className="pt-4 overflow-hidden relative">
            <div className="relative rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md py-2 px-4 overflow-hidden">
              <div className="flex items-center animate-marquee whitespace-nowrap gap-8 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <strong className="text-white">Live Broadcast:</strong> 8,940 students actively collaborating
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Aarav S. (New Delhi) solved JEE Advanced Vectors Challenge with Socratic AI</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-violet-300">
                  <Award className="w-3.5 h-3.5 text-violet-400" />
                  <span>DPS Bengaluru Coding Pod completed Python Binary Search Tree</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-orange-300">
                  <Zap className="w-3.5 h-3.5 text-orange-400" />
                  <span>Upcoming Live Lab in 10m: NEET Electromagnetism & Circuit Simulation</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Priya P. (Kota) earned +150 XP on NCERT Physics Exemplar</span>
                </span>
                <span className="text-slate-600">•</span>
                {/* Looping duplicate set */}
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <strong className="text-white">Live Broadcast:</strong> 8,940 students actively collaborating
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Aarav S. (New Delhi) solved JEE Advanced Vectors Challenge with Socratic AI</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-violet-300">
                  <Award className="w-3.5 h-3.5 text-violet-400" />
                  <span>DPS Bengaluru Coding Pod completed Python Binary Search Tree</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-orange-300">
                  <Zap className="w-3.5 h-3.5 text-orange-400" />
                  <span>Upcoming Live Lab in 10m: NEET Electromagnetism & Circuit Simulation</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Live Classroom Command Center Simulation */}
        <div className="mt-14 max-w-5xl mx-auto relative">
          {/* Floating Badge 1: Top Left Socratic AI */}
          <div className="hidden xl:flex items-center gap-3 absolute -top-7 -left-10 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-amber-500/40 shadow-2xl backdrop-blur-xl animate-float pointer-events-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
              <Sparkles className="w-4 h-4 text-slate-950 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Socratic AI Companion
              </div>
              <div className="text-xs font-bold text-white">Hint triggered in 0.8s ⚡</div>
            </div>
          </div>

          {/* Floating Badge 2: Bottom Right Breakout Pod */}
          <div className="hidden xl:flex items-center gap-3 absolute -bottom-7 -right-10 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-violet-500/40 shadow-2xl backdrop-blur-xl animate-float-reverse pointer-events-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-violet-400 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                Breakout Pod #2 Active
              </div>
              <div className="text-xs font-bold text-white">4 Peers Co-Drawing Live 🎨</div>
            </div>
          </div>

          {/* Floating Badge 3: Top Right Sync Indicator */}
          <div className="hidden xl:flex items-center gap-2 absolute -top-5 -right-6 z-20 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-emerald-500/30 shadow-xl backdrop-blur-xl animate-float-slow pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] font-bold text-emerald-300">60fps Live Sync</span>
          </div>

          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/30 via-slate-800/40 to-violet-500/20 shadow-2xl shadow-amber-950/40">
            <div className="bg-[#0E1526] rounded-xl border border-white/10 overflow-hidden">
              
              {/* Virtual Classroom Window Header */}
              <div className="bg-[#090E1B] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 badge-live-radar"></span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-400">LIVE</span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span>Room #304: Class 12 CBSE & JEE Advanced Vectors (Prof. Rajesh Verma - Bengaluru Studio)</span>
                    <span className="hidden sm:flex items-center gap-0.5 h-3 ml-1">
                      <span className="w-0.5 bg-amber-400 rounded-full animate-sound-1"></span>
                      <span className="w-0.5 bg-amber-400 rounded-full animate-sound-2"></span>
                      <span className="w-0.5 bg-amber-400 rounded-full animate-sound-3"></span>
                    </span>
                  </span>
                </div>

                {/* Subject Visual Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-white/5 text-xs">
                  <button
                    onClick={() => setActiveBoardTab('math')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      activeBoardTab === 'math'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Calculus Whiteboard
                  </button>
                  <button
                    onClick={() => setActiveBoardTab('code')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      activeBoardTab === 'code'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python Code Lab
                  </button>
                  <button
                    onClick={() => setActiveBoardTab('physics')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      activeBoardTab === 'physics'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Physics Orbital Lab
                  </button>
                  <button
                    onClick={() => setActiveBoardTab('studio')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      activeBoardTab === 'studio'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    HD Studio View 📸
                  </button>
                </div>

                <div className="hidden lg:flex items-center gap-2 text-[11px] text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  <Users className="w-3.5 h-3.5" />
                  <span>28 Students Active</span>
                </div>
              </div>

              {/* Classroom Interactive Workspace */}
              <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0B1220]">
                
                {/* Left/Center Column: The Collaborative Interactive Board */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* TAB 1: Calculus Board */}
                  {activeBoardTab === 'math' && (
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-4 font-mono">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                        <span className="text-amber-400 font-bold flex items-center gap-1.5 font-sans">
                          <Compass className="w-4 h-4 text-amber-400" />
                          Interactive Calculus Derivation: Tangent Slope of f(x) = x²
                        </span>
                        <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Live Whiteboard Sync
                        </span>
                      </div>

                      {/* Visual Formula & Graph Simulation */}
                      <div className="bg-[#060A14] p-4 rounded-lg border border-white/5 space-y-3 text-xs">
                        <div className="text-slate-300 leading-relaxed">
                          <span className="text-violet-400 font-bold">Definition of Derivative:</span> <br />
                          f'(x) = lim(h &rarr; 0) [f(x + h) - f(x)] / h
                        </div>

                        <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-200">
                          <span className="font-bold">Prof. Vance (Live Audio Note):</span> <br />
                          "Notice how as h approaches 0, the secant line morphs directly into the instantaneous tangent line. At x = 3, f'(3) = 2(3) = 6!"
                        </div>

                        {/* Interactive Graph Curve SVG */}
                        <div className="h-32 w-full relative flex items-center justify-center bg-slate-900/50 rounded-lg overflow-hidden border border-white/5">
                          <svg className="w-full h-full" viewBox="0 0 300 100">
                            {/* Grid Lines */}
                            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
                            <line x1="150" y1="0" x2="150" y2="100" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
                            {/* Parabola */}
                            <path d="M 50 90 Q 150 10 250 90" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                            {/* Tangent Line */}
                            <line x1="110" y1="80" x2="210" y2="20" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
                            {/* Point on curve */}
                            <circle cx="170" cy="45" r="4" fill="#8B5CF6" />
                            <text x="180" y="42" fill="#FFFFFF" fontSize="9" fontFamily="sans-serif">P(3, 9) slope=6</text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: Python Code Lab & Interactive Memory Array */}
                  {activeBoardTab === 'code' && (
                    <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-3 font-mono text-xs">
                      {/* Code Header Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10 font-sans">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <Code className="w-4 h-4 text-emerald-400" />
                          Python Interactive Sandbox: Binary Search in O(log n)
                        </span>

                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                            Python 3.12 Live
                          </span>
                        </div>
                      </div>

                      {/* Interactive Code Lines with Hover Scaffolding */}
                      <div className="bg-[#060A14] p-3 rounded-lg border border-white/5 space-y-0.5 text-slate-300">
                        {pythonLines.map((line) => (
                          <div
                            key={line.num}
                            onMouseEnter={() => setHoveredLine(line.num)}
                            onMouseLeave={() => setHoveredLine(null)}
                            className={`flex items-center justify-between p-1 px-2 rounded transition-all cursor-crosshair ${
                              hoveredLine === line.num
                                ? 'bg-emerald-500/15 text-white border-l-2 border-emerald-400 pl-3 shadow-sm'
                                : 'hover:bg-white/[0.03]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-slate-600 select-none text-[10px] w-3">{line.num}</span>
                              <span className={hoveredLine === line.num ? 'text-emerald-300 font-semibold' : ''}>
                                {line.text}
                              </span>
                            </div>
                            {hoveredLine === line.num && (
                              <span className="text-[10px] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 animate-in fade-in duration-150 font-sans hidden sm:inline-block">
                                {line.note}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Live Console Output & Re-Run Trigger */}
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-sans flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>
                            {isRunningSimulation ? (
                              <strong className="text-amber-300 animate-pulse">Tracing mid pointers: [5] &rarr; [8] &rarr; [6] &rarr; [7]...</strong>
                            ) : (
                              <span>Output: Target 42 found at index [6] in 3 comparisons!</span>
                            )}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 font-mono">
                          <span className="font-bold text-emerald-400">0.02ms</span>
                          <button
                            onClick={handleRunSimulation}
                            disabled={isRunningSimulation}
                            className="px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 hover:text-white border border-emerald-500/30 font-sans font-bold text-[10px] flex items-center gap-1 transition-all cursor-pointer group"
                            title="Re-run binary search simulation"
                          >
                            <RotateCcw className={`w-3 h-3 ${isRunningSimulation ? 'animate-spin text-amber-300' : 'group-hover:-rotate-90 transition-transform'}`} />
                            <span>{isRunningSimulation ? 'Running' : 'Run Again'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Interactive Memory Array Debugger (Pure React - Zero Images) */}
                      <div className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-sans">
                          <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            Memory Array Trace: <strong className="text-amber-300">Target = 42</strong>
                          </span>
                          <span className="text-emerald-400 font-mono font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            O(log n) Binary Halving
                          </span>
                        </div>

                        {/* Array Grid with Cursors */}
                        <div className="grid grid-cols-10 gap-1 sm:gap-1.5 pt-1">
                          {[
                            { val: 12, idx: 0, tag: 'left' },
                            { val: 18, idx: 1 },
                            { val: 24, idx: 2 },
                            { val: 30, idx: 3 },
                            { val: 35, idx: 4, tag: 'mid' },
                            { val: 38, idx: 5 },
                            { val: 42, idx: 6, match: true },
                            { val: 50, idx: 7, tag: 'right' },
                            { val: 61, idx: 8 },
                            { val: 75, idx: 9 }
                          ].map(item => (
                            <div 
                              key={item.idx} 
                              className={`p-1.5 rounded-lg text-center font-mono transition-all ${
                                item.match 
                                  ? 'bg-emerald-500/30 border-2 border-emerald-400 text-emerald-200 font-bold scale-105 shadow-lg shadow-emerald-500/20' 
                                  : item.tag 
                                    ? 'bg-amber-500/20 border border-amber-500/40 text-amber-200 font-semibold' 
                                    : 'bg-slate-900 border border-white/5 text-slate-300'
                              }`}
                            >
                              <div className="text-xs sm:text-sm">{item.val}</div>
                              <div className="text-[9px] text-slate-500">[{item.idx}]</div>
                              {item.tag && (
                                <div className="text-[8px] font-bold uppercase text-amber-300 mt-0.5 tracking-tight font-sans">
                                  {item.tag}
                                </div>
                              )}
                              {item.match && (
                                <div className="text-[8px] font-bold uppercase text-emerald-300 mt-0.5 tracking-tight font-sans">
                                  Found
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-sans pt-1">
                          <span>Pointers: <strong className="text-amber-300">left (0)</strong> &bull; <strong className="text-amber-300">mid (4)</strong> &bull; <strong className="text-emerald-400">match [6]=42</strong> &bull; <strong className="text-amber-300">right (7)</strong></span>
                          <span className="text-emerald-400 font-semibold">Found in 3 steps</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: Physics Orbital Lab */}
                  {activeBoardTab === 'physics' && (
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-white/10 space-y-3 text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-violet-400 font-bold flex items-center gap-1.5 font-sans">
                          <Zap className="w-4 h-4 text-violet-400" />
                          Kepler's Law & Gravitational Orbit Simulation
                        </span>
                        <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Physics Lab 2.4
                        </span>
                      </div>

                      <div className="bg-[#060A14] p-4 rounded-lg border border-white/5 space-y-2 text-slate-300 font-mono">
                        <div>v_orbital = sqrt( (G * M_star) / r )</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          As orbital radius increases from 1.0 AU to 5.2 AU (Jupiter orbit), velocity drops from 29.8 km/s to 13.1 km/s.
                        </div>
                      </div>

                      <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/20 text-violet-200 text-xs">
                        "Notice how orbital energy is strictly conserved throughout the elliptical trajectory."
                      </div>
                    </div>
                  )}

                  {/* TAB 4: HD Virtual Classroom Studio (Pure React & SVG - Zero Images) */}
                  {activeBoardTab === 'studio' && (
                    <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                        <span className="text-amber-400 font-bold flex items-center gap-1.5 font-sans">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          Nova Live Collaborative Studio Workspace
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                            60fps Live Sync
                          </span>
                          <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            4 Peers Co-Drawing
                          </span>
                        </div>
                      </div>

                      {/* Live Multi-Tile Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Instructor Main Feed (col-span-4) */}
                        <div className="md:col-span-4 rounded-xl bg-slate-950 border border-amber-500/30 p-3 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex items-center justify-between text-[11px] font-bold">
                            <span className="text-amber-300 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                              Prof. Rajesh Verma
                            </span>
                            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              Senior Faculty
                            </span>
                          </div>

                          <div className="my-3 py-3 flex flex-col items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 p-0.5 shadow-xl shadow-amber-500/25 mb-2">
                              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-amber-300 font-black text-lg">
                                RV
                              </div>
                            </div>
                            <span className="text-xs text-slate-200 font-semibold">Class 12 CBSE &amp; JEE Advanced</span>
                            <div className="flex items-center gap-1 mt-1.5">
                              <span className="w-1 bg-amber-400 rounded-full animate-sound-1 h-3"></span>
                              <span className="w-1 bg-amber-400 rounded-full animate-sound-2 h-4"></span>
                              <span className="w-1 bg-amber-400 rounded-full animate-sound-3 h-2"></span>
                              <span className="text-[10px] text-amber-400 font-mono ml-1.5">Speaking &bull; Mic Active</span>
                            </div>
                          </div>

                          {/* Student Peer Tiles Mini-Strip */}
                          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 text-[10px] text-center">
                            <div className="p-1 rounded bg-slate-900 border border-white/5">
                              <span className="text-emerald-400 font-bold block">Aarav S.</span>
                              <span className="text-slate-500 text-[9px]">Listening</span>
                            </div>
                            <div className="p-1 rounded bg-slate-900 border border-white/5">
                              <span className="text-amber-400 font-bold block">Ananya R.</span>
                              <span className="text-slate-500 text-[9px]">Drawing</span>
                            </div>
                            <div className="p-1 rounded bg-slate-900 border border-white/5">
                              <span className="text-violet-400 font-bold block">Rohan M.</span>
                              <span className="text-slate-500 text-[9px]">Hand Raised ✋</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Collaborative Whiteboard Canvas (col-span-8) */}
                        <div className="md:col-span-8 rounded-xl bg-[#080D1A] border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden">
                          {/* Live Student Cursors Floating */}
                          <div className="absolute top-5 left-10 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[9px] shadow-lg flex items-center gap-1 pointer-events-none animate-float">
                            <span>✏️ Aarav [vectors]</span>
                          </div>
                          <div className="absolute bottom-8 right-12 px-2 py-0.5 rounded-full bg-violet-500 text-white font-bold text-[9px] shadow-lg flex items-center gap-1 pointer-events-none animate-float-reverse">
                            <span>💡 Ananya [derivation]</span>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span className="font-mono text-emerald-400">Live Whiteboard #304: Derivative Graph</span>
                              <span>Multi-cursor enabled</span>
                            </div>

                            {/* Whiteboard Math SVG */}
                            <div className="h-36 w-full bg-[#050811] rounded-lg border border-white/5 relative flex items-center justify-center p-2">
                              <svg className="w-full h-full" viewBox="0 0 320 120">
                                <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                                <line x1="160" y1="0" x2="160" y2="120" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                                
                                <path d="M 40 100 Q 160 -10 280 100" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                                <line x1="80" y1="110" x2="220" y2="10" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
                                
                                <circle cx="160" cy="35" r="4" fill="#38BDF8" />
                                <text x="170" y="32" fill="#38BDF8" fontSize="9" fontWeight="bold">Tangent (x=0, m=0)</text>
                                
                                <circle cx="210" cy="55" r="4" fill="#A855F7" />
                                <text x="218" y="52" fill="#A855F7" fontSize="9" fontWeight="bold">Secant Point Q</text>
                              </svg>
                            </div>
                          </div>

                          {/* Quick Interactive Whiteboard Tool Bar */}
                          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
                            <div className="flex items-center gap-1.5 text-slate-400">
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-semibold">Pen</span>
                              <span className="px-2 py-0.5 rounded bg-slate-900">LaTeX Formula</span>
                              <span className="px-2 py-0.5 rounded bg-slate-900">Geometry</span>
                              <span className="px-2 py-0.5 rounded bg-slate-900">AI Explainer</span>
                            </div>
                            <span className="text-amber-400 font-semibold">Live Co-Drawing Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Interaction Control Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setHandRaised(!handRaised)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                          handRaised 
                            ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30' 
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/5'
                        }`}
                      >
                        <Hand className="w-3.5 h-3.5" />
                        <span>{handRaised ? 'Hand Raised (Queue #1)' : 'Raise Hand'}</span>
                      </button>

                      <button
                        onClick={onOpenDemo}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-white/5 transition-all"
                      >
                        Ask Nova AI
                      </button>
                    </div>

                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Live Peer Pods Active: <strong className="text-amber-300">7 Pods</strong>
                    </span>
                  </div>
                </div>

                {/* Right Column: Live Pop Quiz & Chat Stream */}
                <div className="lg:col-span-4 space-y-4">
                  
                  {/* Interactive Pop Quiz Widget */}
                  <div className="p-4 rounded-xl bg-gradient-to-b from-amber-500/15 via-slate-900/80 to-slate-900/90 border border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                        Live Classroom Pop Quiz!
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        +50 XP
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-white leading-snug">
                      What is the derivative of <br />
                      <span className="font-mono text-amber-300">f(x) = 3x³ - 4x + 7</span>?
                    </p>

                    {/* Quiz Choices */}
                    <div className="space-y-1.5">
                      {[
                        { id: 'A', text: "9x² - 4" },
                        { id: 'B', text: "6x² - 4" },
                        { id: 'C', text: "9x³ - 4" },
                      ].map((choice) => (
                        <button
                          key={choice.id}
                          onClick={() => handleQuizAnswer(choice.id)}
                          className={`w-full p-2 rounded-lg text-xs font-mono flex items-center justify-between border transition-all cursor-pointer ${
                            selectedQuizOption === choice.id
                              ? choice.id === 'A'
                                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                                : 'bg-rose-500/20 border-rose-500 text-rose-300'
                              : 'bg-slate-900/80 border-white/5 text-slate-300 hover:border-amber-500/40 hover:bg-slate-800'
                          }`}
                        >
                          <span>{choice.id}) {choice.text}</span>
                          {selectedQuizOption === choice.id && (
                            choice.id === 'A' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span className="text-[10px]">Try again</span>
                          )}
                        </button>
                      ))}
                    </div>

                    {quizScore === 'correct' && (
                      <div className="p-2 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-sans flex items-center gap-1.5 animate-in fade-in duration-200">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Brilliant! Power rule: 3*(3)x^(3-1) - 4 = 9x² - 4!</span>
                      </div>
                    )}
                  </div>

                  {/* Student Live Chat Feed */}
                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                      <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-violet-400" />
                        Classroom Chat
                      </span>
                      <span className="text-[10px] text-slate-500">Moderated Safe Room</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div>
                        <span className="font-bold text-amber-300">Aarav S.: </span>
                        <span className="text-slate-300">The power rule and vector cross product make so much sense now!</span>
                      </div>
                      <div>
                        <span className="font-bold text-sky-300">Ananya R.: </span>
                        <span className="text-slate-300">Can we test a JEE Advanced PYQ next?</span>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-300">Nova AI: </span>
                        <span className="text-slate-400 italic">Hint: Try applying chain rule to e^(2x) and evaluate dot product.</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Console Bottom Bar */}
              <div className="bg-[#090E1B] px-4 py-2.5 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-slate-300">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    Curriculum: CBSE, ICSE &amp; JEE Advanced Aligned
                  </span>
                  <span className="hidden sm:inline">Engine: Ultra-Low Latency Canvas</span>
                </div>
                <div>
                  <button 
                    onClick={onOpenDemo}
                    className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full-Screen Demo Class</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Academic Partners Strip - Interactive Touch/Hover Explorer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Partnered With & Recognized By Forward-Looking Academic Programs
          </p>
          <p className="text-[11px] text-amber-400/90 font-medium mb-4 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Touch or click any partner below to see accredited curriculum & classroom details</span>
          </p>
          
          {/* Stationary Partner Badges Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto">
            {trustedSchools.map((school) => {
              const isSelected = selectedPartner?.id === school.id;
              return (
                <button
                  key={school.id}
                  onClick={() => setSelectedPartner(school)}
                  onMouseEnter={() => setSelectedPartner(school)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border transition-all duration-200 cursor-pointer text-xs font-mono tracking-wider font-bold ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/20 scale-105 ring-1 ring-amber-400/50'
                      : 'bg-slate-900/80 border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-slate-800/80'
                  }`}
                  aria-label={`View details for ${school.name}`}
                >
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? 'bg-amber-400 scale-125 animate-pulse' : 'bg-slate-500'
                  }`}></span>
                  <span>{school.logo}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Information Card for Selected Partner */}
          {selectedPartner && (
            <div className="mt-4 max-w-3xl mx-auto rounded-2xl p-4 sm:p-5 bg-[#0E1526]/95 border border-amber-500/30 shadow-2xl backdrop-blur-xl text-left transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-white/10">
                <div>
                  <div className="flex items-center flex-wrap gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                      <span>{selectedPartner.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {selectedPartner.badge}
                    </span>
                  </div>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5">
                    Academic Track: {selectedPartner.category} ({selectedPartner.tag})
                  </p>
                </div>

                <div className="self-start sm:self-auto shrink-0">
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-lg font-mono inline-block">
                    ⚡ {selectedPartner.metric}
                  </span>
                </div>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-8 space-y-2">
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                    {selectedPartner.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-amber-200/90 pt-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{selectedPartner.highlight}</span>
                  </div>
                </div>

                <div className="sm:col-span-4 flex sm:justify-end">
                  <button
                    onClick={onOpenDemo}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Preview Co-Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
}
