import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Award,
  GraduationCap
} from 'lucide-react';
import { testimonialsData } from '../data/landingData';

export default function Testimonials() {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Students', 'Teachers', 'Parents'];

  const filteredTestimonials = selectedTag === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.tag === selectedTag);

  return (
    <section id="testimonials" className="py-12 md:py-16 relative overflow-hidden bg-[#0B0F19]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-violet-500/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Real Classroom Stories</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Students, Teachers &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400">
              Parents Worldwide
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            See how Nova Academy transforms academic dread into genuine enthusiasm, top exam scores, and lifelong confidence.
          </p>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 border border-amber-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredTestimonials.map((item, index) => (
            <div 
              key={index}
              className="glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-white/10 relative overflow-hidden group card-hover-lift"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 pointer-events-none">
                <Quote className="w-16 h-16 text-amber-400" />
              </div>

              <div>
                {/* Star Rating & Quantified Metric Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 font-mono">
                    {item.metrics}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed italic mb-6 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Metadata */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-violet-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-amber-300 font-extrabold text-xs tracking-wider">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  </h4>
                  <p className="text-xs text-amber-300 font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-400">{item.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Social Proof Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/60 border border-white/10 max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 mt-1">Trustpilot & App Store</div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">94%</div>
            <div className="text-xs text-slate-400 mt-1">Course Completion Rate</div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1">NEP 2020 &amp; DPDP Safe</div>
          </div>
        </div>

      </div>
    </section>
  );
}
