import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ArrowUpRight, 
  LogIn, 
  Play,
  Sun,
  Moon
} from 'lucide-react';
import { navigationLinks } from '../data/landingData';

export default function Navbar({ 
  onOpenDemo, 
  onOpenAccount, 
  onOpenLogin, 
  onOpenSignup, 
  currentUser,
  theme = 'dark',
  toggleTheme
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-amber-950/20 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-violet-500 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-400 group-hover:text-amber-300 group-hover:scale-110 transition-all duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  Nova<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-violet-400">Academy</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  LIVE
                </span>
              </div>
              <span className="text-[10px] tracking-wide text-slate-400 font-medium hidden sm:inline-block">
                Interactive Learning & AI Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all shadow-sm cursor-pointer flex items-center justify-center group"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-violet-500 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all shadow-sm group cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20 group-hover:fill-amber-400/40" />
              <span>Try Demo Class</span>
            </button>

            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-amber-500/30">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-slate-950 font-black text-[11px]">
                  {(currentUser.name || currentUser.email || 'U').charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-amber-300">
                  {currentUser.name || currentUser.email.split('@')[0]}
                </span>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-amber-500/40 rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Log In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Action Group */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-300 hover:text-white border border-white/10 rounded-lg bg-slate-800/80 cursor-pointer flex items-center justify-center"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-500" />
              )}
            </button>

            <button
              onClick={onOpenLogin}
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white border border-white/10 rounded-lg bg-slate-800/80"
            >
              Log In
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1424] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          {/* Quick Theme Switcher in Mobile Drawer */}
          <div className="flex items-center justify-between px-3 py-2.5 bg-slate-800/60 rounded-lg border border-white/10">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-4 h-4 text-violet-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
              Appearance: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
            <button
              onClick={toggleTheme}
              className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-slate-950" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-950" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg text-center"
            >
              Launch Interactive Demo Class
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800/90 border border-amber-500/30 rounded-lg text-center flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Log In to Existing Account</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
