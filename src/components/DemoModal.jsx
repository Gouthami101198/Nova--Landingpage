import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  GraduationCap, 
  HelpCircle, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Compass, 
  Trophy, 
  Users, 
  Hand, 
  MessageSquare, 
  Play,
  RotateCcw
} from 'lucide-react';

export default function DemoModal({ isOpen, onClose, onOpenAccount }) {
  const [activeMode, setActiveMode] = useState('whiteboard'); // 'whiteboard', 'aitutor', 'quiz'
  const [activeProblem, setActiveProblem] = useState('math');
  const [userAnswer, setUserAnswer] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  if (!isOpen) return null;

  const homeworkQuestions = {
    math: {
      title: "Quadratic Factoring: 2x² + 5x - 3 = 0",
      hint1: "Look for two numbers that multiply to a*c = 2*(-3) = -6, and add up to b = 5.",
      hint2: "Numbers 6 and -1 satisfy this: 6 * (-1) = -6, and 6 + (-1) = 5.",
      socraticPrompt: "Now rewrite the middle term 5x as 6x - 1x: 2x² + 6x - x - 3 = 0. What do you get when factoring by grouping?",
      finalAnswer: "(2x - 1)(x + 3) = 0, so x = 1/2 or x = -3."
    },
    physics: {
      title: "Newton's Second Law & Momentum",
      hint1: "Force is defined as the rate of change of momentum: F = dp/dt = m*(dv/dt).",
      hint2: "If mass remains constant, this simplifies to F = m * a.",
      socraticPrompt: "If a 1,200 kg vehicle accelerates from 0 to 20 m/s in 4 seconds, what is its acceleration?",
      finalAnswer: "Acceleration a = 20/4 = 5 m/s². Net force F = 1,200 * 5 = 6,000 Newtons."
    },
    code: {
      title: "Python Fibonacci with Memoization",
      hint1: "Naive recursion computes the same subproblems repeatedly in O(2^n) time.",
      hint2: "Memoization stores previously calculated fib(n) values in a dictionary or array.",
      socraticPrompt: "By saving past states, what does the time complexity reduce to?",
      finalAnswer: "It reduces from exponential O(2^n) to linear O(n) time!"
    }
  };

  const currentHomework = homeworkQuestions[activeProblem];

  const quizQuestions = [
    {
      q: "What is the slope of y = 4x² - 2x at x = 2?",
      options: ["14", "16", "8", "12"],
      answer: "14",
      explanation: "y' = 8x - 2. At x = 2: 8(2) - 2 = 14."
    },
    {
      q: "Which data structure operates on Last-In, First-Out (LIFO)?",
      options: ["Stack", "Queue", "Binary Tree", "Linked List"],
      answer: "Stack",
      explanation: "A Stack pushes and pops from the top (LIFO)."
    }
  ];

  const handleSelectQuiz = (ans) => {
    setUserAnswer(ans);
    setQuizSubmitted(true);
    if (ans === quizQuestions[0].answer) {
      setQuizScore(1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0D1426] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#090E1B] px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Nova Live Classroom Simulator
                <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Interactive Studio
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Experience our collaborative whiteboard, Socratic AI mentor, and live quiz arena.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulator Mode Tabs */}
        <div className="bg-[#0A1020] px-5 py-2.5 border-b border-white/10 flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setActiveMode('whiteboard')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'whiteboard'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Mode 1: Interactive Whiteboard</span>
          </button>

          <button
            onClick={() => setActiveMode('aitutor')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'aitutor'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mode 2: 24/7 Socratic AI Tutor</span>
          </button>

          <button
            onClick={() => setActiveMode('quiz')}
            className={`px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'quiz'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Mode 3: Live Quiz Arena (+XP)</span>
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-[#0B1122]">
          
          {/* MODE 1: INTERACTIVE WHITEBOARD */}
          {activeMode === 'whiteboard' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Live Problem Solving: Calculus Tangent Line Derivation
                  </h4>
                  <p className="text-[11px] text-slate-400">Teacher and students solve on the shared infinite canvas simultaneously.</p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Whiteboard Connected
                </span>
              </div>

              {/* Whiteboard Surface */}
              <div className="p-5 rounded-xl bg-slate-900 border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 font-sans">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-amber-400" />
                    Problem: Find the equation of the tangent line to f(x) = x³ - 3x at point (2, 2)
                  </span>
                  <span className="text-slate-400 text-[10px]">Class 12 CBSE &amp; JEE Advanced</span>
                </div>

                <div className="space-y-2 text-slate-300">
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-violet-400 font-bold">Step 1: Calculate f'(x)</span> <br />
                    f'(x) = 3x² - 3
                  </div>
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-violet-400 font-bold">Step 2: Evaluate Slope at x = 2</span> <br />
                    m = f'(2) = 3(2)² - 3 = 12 - 3 = 9
                  </div>
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-violet-400 font-bold">Step 3: Point-Slope Formula (y - y1 = m(x - x1))</span> <br />
                    y - 2 = 9(x - 2) &rarr; <strong className="text-amber-300">y = 9x - 16</strong>
                  </div>
                </div>

                <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-200 font-sans text-xs flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Teacher Feedback:</strong> "Spot on! The tangent line has a steep slope of 9 and crosses the y-axis at (0, -16)."
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: SOCRATIC AI TUTOR */}
          {activeMode === 'aitutor' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select a Homework Problem to Test Socratic Tutoring:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveProblem('math')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      activeProblem === 'math'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Quadratic Factoring
                  </button>
                  <button
                    onClick={() => setActiveProblem('physics')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      activeProblem === 'physics'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Physics & Momentum
                  </button>
                  <button
                    onClick={() => setActiveProblem('code')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      activeProblem === 'code'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Python Memoization
                  </button>
                </div>
              </div>

              {/* Socratic Dialogue Box */}
              <div className="p-5 rounded-xl bg-slate-900 border border-white/10 space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="font-bold text-white text-sm">
                    {currentHomework.title}
                  </span>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Socratic Mode Active
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-white/5 space-y-1">
                    <span className="text-amber-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Nova AI Hint 1:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{currentHomework.hint1}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-800/60 border border-white/5 space-y-1">
                    <span className="text-violet-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      Nova AI Hint 2:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{currentHomework.hint2}</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-1 text-amber-200">
                    <span className="font-bold block">Guided Question for the Student:</span>
                    <p className="leading-relaxed">{currentHomework.socraticPrompt}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    <span className="font-bold block text-[11px] uppercase">Final Verified Solution:</span>
                    <p className="font-mono mt-0.5">{currentHomework.finalAnswer}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODE 3: LIVE QUIZ ARENA */}
          {activeMode === 'quiz' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Lightning Quiz Arena
                  </h4>
                  <p className="text-[11px] text-slate-400">Test your speed and earn XP points with immediate answer feedback.</p>
                </div>
                <span className="text-xs font-bold text-amber-300 font-mono">Score: {quizScore * 50} XP</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-white/10 space-y-4">
                <span className="text-xs font-mono text-amber-400">Question 1 of 2:</span>
                <p className="text-sm font-bold text-white leading-relaxed">
                  {quizQuestions[0].q}
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  {quizQuestions[0].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelectQuiz(opt)}
                      className={`p-3 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                        userAnswer === opt
                          ? opt === quizQuestions[0].answer
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                            : 'bg-rose-500/20 border-rose-500 text-rose-300'
                          : 'bg-slate-800 border-white/5 text-slate-300 hover:border-amber-500/40'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {quizSubmitted && (
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-white/5 space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{quizQuestions[0].explanation}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="bg-[#090E1B] px-5 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Nova Academy v3.0 Active</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Close Simulator
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAccount();
              }}
              className="btn-sheen w-1/2 sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Join Classroom Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
