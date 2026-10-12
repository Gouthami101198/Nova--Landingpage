import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  Check, 
  Award, 
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { footerLinks } from '../data/landingData';

export default function Footer({ onOpenLogin, onOpenSignup }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  const socialLinks = [
    {
      name: 'X (Twitter)',
      title: 'Follow Nova Academy on X / Twitter',
      href: 'https://twitter.com',
      hoverClass: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      title: 'Open Source Curriculum on GitHub',
      href: 'https://github.com',
      hoverClass: 'hover:text-white hover:bg-white/10',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      title: 'Join 45k+ Students on Discord',
      href: 'https://discord.com',
      hoverClass: 'hover:text-[#5865F2] hover:bg-[#5865F2]/10',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      title: 'Watch Masterclasses on YouTube',
      href: 'https://youtube.com',
      hoverClass: 'hover:text-[#FF0000] hover:bg-[#FF0000]/10',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      title: 'Connect on LinkedIn',
      href: 'https://linkedin.com',
      hoverClass: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      title: 'Classroom Highlights on Instagram',
      href: 'https://instagram.com',
      hoverClass: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#080C16] border-t border-white/10 text-slate-400 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        
        {/* 1. Interactive Contact Information Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 mb-8 border-b border-white/10">
          {/* Email Support */}
          <a 
            href="mailto:support@novaacademy.in" 
            className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-white/10 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all group shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-amber-400 transition-colors">Direct Support & Admissions (India)</div>
              <div className="text-xs font-bold text-white">support@novaacademy.in</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Avg response time: &lt; 5 mins</span>
              </div>
            </div>
          </a>

          {/* Academic Helpline */}
          <a 
            href="tel:+9118002587890" 
            className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all group shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-emerald-400 transition-colors">National Academic Toll-Free Helpline</div>
              <div className="text-xs font-bold text-white">+91 1800 258 7890</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Mon–Sat 9:00 AM – 8:00 PM IST</div>
            </div>
          </a>

          {/* Innovation Campus Address */}
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/70 border border-white/10 hover:border-violet-500/40 hover:bg-slate-800/80 transition-all group shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-violet-400 transition-colors">India Campus & Innovation Lab</div>
              <div className="text-xs font-bold text-white">Salarpuria Softzone, Bellandur</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Bengaluru, Karnataka 560103, India</div>
            </div>
          </div>
        </div>

        {/* 2. Main Footer Body: Brand, Newsletter, Socials & Useful Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          
          {/* Brand, Social Media & Newsletter Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-violet-500 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white">
                  Nova<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Academy</span>
                </span>
                <span className="text-[10px] tracking-wide text-slate-400 font-medium">
                  Interactive Learning & Education Platform
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering students and teachers worldwide through collaborative digital whiteboards, live peer pods, and our 24/7 Socratic AI study companion.
            </p>

            {/* Social Media Icons */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Official Social Channels
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 ${social.hoverClass} hover:border-amber-400/50 hover:scale-110 transition-all shadow-sm group`}
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-white block">
                Subscribe to The Nova Study Spark
              </span>
              <p className="text-[11px] text-slate-400">
                Weekly Olympiad puzzle challenges, study streak hacks, and new course drops.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm pt-1">
                <input
                  type="email"
                  required
                  placeholder="student@school.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-slate-950" />
                      <span>Joined!</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Safety & Compliance Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" />
                NEP 2020 Aligned
              </span>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                DPDP Act 2023 Certified
              </span>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-white/10 text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-violet-400" />
                ISO 27001 & SOC-2
              </span>
            </div>
          </div>

          {/* Useful Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Academic Tracks */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Subject Tracks</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerLinks.tracks.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white hover:underline transition-colors block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Platform Features */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Platform Features</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerLinks.features.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white hover:underline transition-colors block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: For Educators & Schools */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                <span>For Educators</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerLinks.educators.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white hover:underline transition-colors block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Trust, Safety & Company */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span>Trust & Company</span>
              </h4>
              <ul className="space-y-2.5 text-xs">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-400 hover:text-white hover:underline transition-colors block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal, Status & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Nova Academy India Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-400 font-mono text-[11px]">GSTIN: 29AAACN8842K1Z5</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Classrooms Operational (99.99% Uptime)
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <button 
              onClick={onOpenLogin} 
              className="hover:text-amber-300 transition-colors cursor-pointer text-slate-400 font-medium"
            >
              Student Log In
            </button>
            <button 
              onClick={onOpenSignup} 
              className="hover:text-amber-300 transition-colors cursor-pointer text-slate-400 font-medium"
            >
              Sign Up Free
            </button>
            <a href="#about" className="hover:text-slate-300 transition-colors">Student Safety Policy</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">Privacy Shield</a>
            <a href="#features" className="hover:text-slate-300 transition-colors">Honor Code</a>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Support Center</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
