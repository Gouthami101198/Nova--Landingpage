import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  GraduationCap, 
  KeyRound, 
  ShieldCheck, 
  Sparkles,
  School
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onAuthSuccess }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup' | 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  // Form states
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: true
  });

  const [signupData, setSignupData] = useState({
    role: 'Student / Learner',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });

  const [forgotEmail, setForgotEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Sync mode if initialMode prop changes when opening
  React.useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setSuccessMessage(null);
      setResetSent(false);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  // Handle Login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Welcome back to Nova Academy! Logging in...');
      setTimeout(() => {
        if (onAuthSuccess) onAuthSuccess({ email: loginData.email, mode: 'login' });
        onClose();
      }, 1200);
    }, 1000);
  };

  // Handle Signup submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(`Account created successfully! Welcome, ${signupData.name || 'Scholar'}!`);
      setTimeout(() => {
        if (onAuthSuccess) onAuthSuccess({ email: signupData.email, mode: 'signup', name: signupData.name });
        onClose();
      }, 1200);
    }, 1000);
  };

  // Handle Forgot Password submission
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResetSent(true);
    }, 900);
  };

  // Password strength calculation
  const getPasswordStrength = (pass) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const passStrength = getPasswordStrength(signupData.password);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#0D1426] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#090E1B] px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-violet-500 p-[1.5px] shadow-md shadow-amber-500/20">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                Nova<span className="text-amber-400">Academy</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Auth
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                {mode === 'login' && 'Sign in to access your live classes & AI tutor'}
                {mode === 'signup' && 'Create your free learner account in 30 seconds'}
                {mode === 'forgot' && 'Reset your password securely'}
              </p>
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

        {/* Mode Switcher Tabs (For Login & Signup) */}
        {mode !== 'forgot' && (
          <div className="grid grid-cols-2 bg-[#090F1E] border-b border-white/10 p-1 text-xs font-semibold">
            <button
              onClick={() => {
                setMode('login');
                setSuccessMessage(null);
              }}
              className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                mode === 'login'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setSuccessMessage(null);
              }}
              className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                mode === 'signup'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign Up Free
            </button>
          </div>
        )}

        {/* Modal Form Content */}
        <div className="p-6 space-y-5 bg-[#0B1122]">

          {/* Success Banner */}
          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* 1. LOGIN VIEW */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    placeholder="student@school.ac.in"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">Password</label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-[11px] text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-9 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={loginData.rememberMe}
                    onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                    className="rounded border-white/10 bg-slate-900 text-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <span>Remember me on this device</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-sheen w-full py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Sign In to Classroom</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </>
                )}
              </button>

              {/* Social Login Divider */}
              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <span className="relative px-3 bg-[#0B1122] text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Or continue with
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setLoginData({ email: 'alex.student@gmail.com', password: 'password123', rememberMe: true });
                    handleLoginSubmit({ preventDefault: () => {} });
                  }}
                  className="py-2 px-3 rounded-lg bg-slate-900 border border-white/10 hover:border-white/20 text-[11px] font-semibold text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" />
                    <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z" />
                    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.1 7.5 23 12 23z" />
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLoginData({ email: 'scholar@school.clever.edu', password: 'password123', rememberMe: true });
                    handleLoginSubmit({ preventDefault: () => {} });
                  }}
                  className="py-2 px-3 rounded-lg bg-slate-900 border border-white/10 hover:border-white/20 text-[11px] font-semibold text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <School className="w-3.5 h-3.5 text-amber-400" />
                  <span>School SSO</span>
                </button>
              </div>

              {/* Bottom switch to signup */}
              <p className="text-[11px] text-center text-slate-400 pt-2">
                Don't have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer"
                >
                  Sign up free
                </button>
              </p>
            </form>
          )}

          {/* 2. SIGNUP VIEW */}
          {mode === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              {/* Role selector */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">I am joining as a:</label>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  {['Student / Learner', 'Educator', 'Parent'].map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setSignupData({ ...signupData, role: r })}
                      className={`p-1.5 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                        signupData.role === r
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    placeholder="student@school.ac.in"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={8}
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    placeholder="At least 8 characters"
                    className="w-full pl-9 pr-9 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password strength bar */}
                {signupData.password && (
                  <div className="pt-1 space-y-1">
                    <div className="flex h-1 gap-1">
                      {[1, 2, 3, 4].map((step) => (
                        <div
                          key={step}
                          className={`h-full flex-1 rounded-full transition-all ${
                            passStrength >= step
                              ? passStrength >= 3 ? 'bg-emerald-400' : 'bg-amber-400'
                              : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 block">
                      {passStrength <= 1 && 'Weak password'}
                      {passStrength === 2 && 'Fair password'}
                      {passStrength === 3 && 'Good password'}
                      {passStrength >= 4 && 'Strong password!'}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    placeholder="Repeat password"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Agreement */}
              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-400 leading-tight">
                  <input
                    type="checkbox"
                    required
                    checked={signupData.agreeTerms}
                    onChange={(e) => setSignupData({ ...signupData, agreeTerms: e.target.checked })}
                    className="mt-0.5 rounded border-white/10 bg-slate-900 text-amber-500 focus:ring-0 cursor-pointer"
                  />
                  <span>I agree to Nova Academy's Terms of Service, Honor Code, and DPDP Act 2023 / NEP 2020 student privacy policy.</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-sheen w-full py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Create Free Student Account</span>
                  </>
                )}
              </button>

              {/* Bottom switch to login */}
              <p className="text-[11px] text-center text-slate-400 pt-1">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer"
                >
                  Log in
                </button>
              </p>
            </form>
          )}

          {/* 3. FORGOT PASSWORD VIEW */}
          {mode === 'forgot' && (
            <div className="space-y-4">
              {!resetSent ? (
                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <div className="text-center space-y-1 pb-1">
                    <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <KeyRound className="w-5 h-5 text-amber-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white">Reset Your Password</h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                      Enter the email associated with your Nova Academy account and we'll send you an instant reset link.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Account Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="student@school.edu"
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-sheen w-full py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-md shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Reset Email...</span>
                    ) : (
                      <>
                        <span>Send Password Reset Link</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      &larr; Back to Log In
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Reset Link Dispatched!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                      We have sent password reset instructions to <strong className="text-amber-300 font-mono">{forgotEmail || 'your email'}</strong>. Please check your inbox or spam folder.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] text-slate-400 max-w-xs mx-auto">
                    The reset link is valid for 15 minutes. Didn't receive an email?
                    <button
                      type="button"
                      onClick={() => setResetSent(false)}
                      className="text-amber-400 hover:text-amber-300 font-semibold block mx-auto mt-1 cursor-pointer"
                    >
                      Click here to retry
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setMode('login')}
                      className="px-5 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer"
                    >
                      Return to Log In
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Security Notice */}
        <div className="bg-[#090E1B] px-6 py-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>256-bit SSL Encrypted • DPDP Act 2023 Certified Student Privacy • India Cloud Hosted</span>
        </div>

      </div>
    </div>
  );
}
