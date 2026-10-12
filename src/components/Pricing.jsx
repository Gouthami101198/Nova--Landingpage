import React, { useState } from 'react';
import { 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Zap,
  Building,
  School
} from 'lucide-react';
import { pricingPlans, faqData } from '../data/landingData';

export default function Pricing({ onOpenDemo, onOpenAccount }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section id="pricing" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#0E1528] to-[#0B0F19]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Accessible Tuition</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple, Transparent Tuition for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400">
              Every Ambitious Learner
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Start learning completely free, or unlock unlimited interactive live classrooms and our 24/7 Socratic AI mentor. Cancel anytime with zero hassle.
          </p>

          {/* Billing Toggle (Annual vs Monthly) */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly Tuition
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-slate-800 p-1 border border-white/10 relative transition-colors cursor-pointer"
              aria-label="Toggle annual or monthly tuition"
            >
              <div 
                className={`w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 shadow-md transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                Annual Tuition
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10 md:mb-12">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div 
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative card-hover-lift ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[#1C182E] to-[#12162A] border-2 border-amber-400 shadow-2xl shadow-amber-500/25 lg:-translate-y-2' 
                    : 'glass-card border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce-subtle">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>Most Popular For Students</span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400">{price === 0 ? 'Forever' : '/ month'}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {price === 0 ? 'Free student pass • No card/UPI needed' : isAnnual ? 'Billed annually • 2 months free included' : 'Billed month-to-month'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                      Included with this pass:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <button
                    onClick={onOpenAccount}
                    className={`btn-sheen w-full py-3.5 px-4 rounded-xl font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 shadow-amber-500/25 hover:shadow-amber-500/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-medium">
                    {plan.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* School & District Partnership Banner */}
        <div className="p-6 rounded-2xl bg-[#111827]/80 border border-white/10 mb-10 md:mb-12 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <School className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Looking for School or Coaching Institute Licensing?</h4>
              <p className="text-xs text-slate-300 mt-0.5">We partner with CBSE &amp; ICSE schools, junior colleges, and coaching institutes with discounted student seat bundles and dedicated teacher onboarding.</p>
            </div>
          </div>
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-white/10 transition-all shrink-0 cursor-pointer"
          >
            Request Institutional Plan
          </button>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 space-y-2">
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-400">
              Everything you need to know about joining Nova Academy.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = expandedFaq === index;

              return (
                <div 
                  key={index}
                  className="rounded-xl border border-white/10 bg-slate-900/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/[0.02] cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
