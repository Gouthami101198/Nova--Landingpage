import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  GraduationCap, 
  Mail, 
  User, 
  Sparkles, 
  BookOpen, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Trophy,
  Copy
} from 'lucide-react';

export default function OpenAccountModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: 'Student / Learner',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@dpsrkp.edu.in',
    gradeLevel: 'Class 11-12 (CBSE + JEE/NEET)',
    interests: ['Class 11-12 CBSE & JEE Mathematics', 'Python & Computer Science'],
    goal: 'Ace Exams & Boost Grades'
  });
  const [copiedCode, setCopiedCode] = useState(false);
  const [isProvisioning, setIsProvisioning] = useState(false);

  if (!isOpen) return null;

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 2) {
      setIsProvisioning(true);
      setTimeout(() => {
        setIsProvisioning(false);
        setStep(3);
      }, 1500);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0D1426] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#090E1B] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-violet-500 p-[1.5px]">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Join Nova Academy
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Free Student Pass
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Unlock interactive live classrooms and your 24/7 Socratic AI mentor in 30 seconds.</p>
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

        {/* Step Progress Tracker */}
        <div className="bg-[#0A1020] px-6 py-3 border-b border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step >= 1 ? 'bg-amber-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-400'
            }`}>
              1
            </span>
            <span className={step >= 1 ? 'text-white font-semibold' : 'text-slate-500'}>
              Learner Profile
            </span>
          </div>

          <ChevronRight className="w-4 h-4 text-slate-600" />

          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step >= 2 ? 'bg-amber-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-400'
            }`}>
              2
            </span>
            <span className={step >= 2 ? 'text-white font-semibold' : 'text-slate-500'}>
              Study Tracks
            </span>
          </div>

          <ChevronRight className="w-4 h-4 text-slate-600" />

          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step === 3 ? 'bg-emerald-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-400'
            }`}>
              3
            </span>
            <span className={step === 3 ? 'text-emerald-400 font-semibold' : 'text-slate-500'}>
              Classroom Pass
            </span>
          </div>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#0B1122]">
          
          {/* STEP 1: LEARNER PROFILE */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">I am joining as a:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Student / Learner', 'Educator / Tutor', 'Parent', 'School Admin'].map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setFormData({ ...formData, role: r })}
                      className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                        formData.role === r
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    placeholder="student@school.ac.in"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Grade / Academic Level</label>
                <select
                  value={formData.gradeLevel}
                  onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="Class 6-8 (Middle School Foundation)">Class 6-8 (Middle School Foundation)</option>
                  <option value="Class 9-10 (CBSE / ICSE Board Prep)">Class 9-10 (CBSE / ICSE Board Prep)</option>
                  <option value="Class 11-12 (CBSE + JEE/NEET)">Class 11-12 (CBSE + JEE/NEET)</option>
                  <option value="Target JEE / NEET Dropper Batch">Target JEE / NEET Dropper Batch</option>
                  <option value="College / Engineering Undergraduate">College / Engineering Undergraduate</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  DPDP Act 2023 &amp; NEP 2020 Aligned • Free Pass
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Select Study Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: STUDY TRACKS & GOALS */}
          {step === 2 && !isProvisioning && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Select Your Subject Interests (Choose 1 or more):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Class 11-12 CBSE & JEE Mathematics',
                    'Python, Algorithms & Web Dev',
                    'IIT-JEE & NEET Physics / Chemistry',
                    'Class 9-10 Board Science & NTSE',
                    'Math Olympiad (PRMO / RMO / INMO)',
                    'Artificial Intelligence & Data Science'
                  ].map((interest) => {
                    const isSelected = formData.interests.includes(interest);
                    return (
                      <div
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-3 rounded-lg border text-xs font-medium flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500 text-amber-200 shadow-sm'
                            : 'bg-slate-900 border-white/5 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span>{interest}</span>
                        {isSelected ? (
                          <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-600"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-xs font-semibold text-slate-300">Primary Goal:</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="Ace Exams & Boost Grades">Ace Exams & Boost Grades (A / A+ Target)</option>
                  <option value="Prepare for College & Olympiads">Prepare for College & Olympiads</option>
                  <option value="Learn Coding & Build Projects">Learn Coding & Build Projects</option>
                  <option value="Study with Peers & Daily Streaks">Study with Peers & Daily Streaks</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  &larr; Back
                </button>

                <button
                  type="submit"
                  className="btn-sheen px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate Student Pass</span>
                </button>
              </div>
            </form>
          )}

          {/* SIMULATED PROVISIONING LOADER */}
          {isProvisioning && (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center animate-spin">
                <Sparkles className="w-7 h-7 text-amber-400" />
              </div>
              <h4 className="text-base font-bold text-white">Generating Your Virtual Classroom Pass...</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Setting up your Socratic AI homework companion profile and assigning you to active study pods.
              </p>
              <div className="w-48 h-1.5 bg-slate-800 rounded-full mx-auto overflow-hidden">
                <div className="bg-amber-400 h-full w-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* STEP 3: SUCCESS & DIGITAL STUDENT PASS */}
          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Welcome to Nova Academy, {formData.name}!</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your student account is active. Free starter pass includes 500 XP bonus and full access to live interactive whiteboards.
                  </p>
                </div>
              </div>

              {/* Digital Student ID Badge */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-violet-500/20 border-2 border-amber-400/40 space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                      NA
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">{formData.name}</h4>
                      <span className="text-[10px] text-amber-300 font-medium">{formData.gradeLevel}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    VERIFIED SCHOLAR
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Student ID Code</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-mono text-amber-300 font-bold">NOVA-IND-9942</span>
                      <button 
                        onClick={handleCopyCode}
                        className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Starting XP Bonus</span>
                    <span className="font-mono text-emerald-400 font-bold text-sm block mt-1">+500 XP (Level 1)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {formData.interests.map((item, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-800 text-amber-200 px-2 py-0.5 rounded border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors text-center"
                >
                  Done
                </button>

                <button
                  onClick={handleReset}
                  className="btn-sheen w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Launch Virtual Classroom</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
