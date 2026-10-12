import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import OpenAccountModal from './components/OpenAccountModal';
import AuthModal from './components/AuthModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  
  // Auth Modal State: 'login' | 'signup' | 'forgot'
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  // Theme state: 'dark' | 'light' with localStorage sync
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nova_theme') || localStorage.getItem('kurtis_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('nova_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  const handleOpenAccount = () => setIsAccountOpen(true);
  const handleCloseAccount = () => setIsAccountOpen(false);

  const handleOpenLogin = () => {
    setAuthInitialMode('login');
    setIsAuthOpen(true);
  };

  const handleOpenSignup = () => {
    setAuthInitialMode('signup');
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => setIsAuthOpen(false);

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#F8FAFC] text-slate-900' : 'bg-[#0B0F19] text-slate-100'} flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 transition-colors duration-300`}>
      {/* Logged in Toast Banner */}
      {currentUser && (
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-violet-600 text-slate-950 px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2 relative z-50">
          <span>🎉 Active Session: Welcome, {currentUser.name || currentUser.email || 'Scholar'}!</span>
          <button 
            onClick={() => setCurrentUser(null)} 
            className="underline hover:text-white transition-colors ml-2 cursor-pointer font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* 1. Navbar */}
      <Navbar 
        onOpenDemo={handleOpenDemo} 
        onOpenAccount={handleOpenAccount} 
        onOpenLogin={handleOpenLogin}
        onOpenSignup={handleOpenSignup}
        currentUser={currentUser}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero 
          onOpenDemo={handleOpenDemo} 
          onOpenAccount={handleOpenSignup} 
        />

        {/* 3. About / Introduction */}
        <About onOpenDemo={handleOpenDemo} />

        {/* 4. Features Section */}
        <Features 
          onOpenDemo={handleOpenDemo} 
          onOpenAccount={handleOpenSignup} 
        />

        {/* 5. How It Works */}
        <HowItWorks onOpenDemo={handleOpenDemo} />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Pricing Section */}
        <Pricing 
          onOpenDemo={handleOpenDemo} 
          onOpenAccount={handleOpenSignup} 
        />
      </main>

      {/* 8. Footer */}
      <Footer 
        onOpenLogin={handleOpenLogin}
        onOpenSignup={handleOpenSignup}
      />

      {/* Interactive Live Classroom Demo Modal */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={handleCloseDemo} 
        onOpenAccount={() => {
          handleCloseDemo();
          handleOpenSignup();
        }}
      />

      {/* Complete Student ID Pass Onboarding Modal */}
      <OpenAccountModal isOpen={isAccountOpen} onClose={handleCloseAccount} />

      {/* Interactive Login, Signup & Forgot Password Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={handleCloseAuth} 
        initialMode={authInitialMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}
