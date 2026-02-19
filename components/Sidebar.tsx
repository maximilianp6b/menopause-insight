import React from 'react';
import { CheckCircle2, ChevronRight, Star, ShieldCheck, TrendingUp, Quote, ExternalLink } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Trending Topics Section */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trending Now</h3>
             <TrendingUp className="w-4 h-4 text-slate-400" />
        </div>
        <div className="divide-y divide-slate-100">
           {[
            { title: "5 Foods That Spike Estrogen After 40", img: "https://picsum.photos/seed/food/100/100" },
            { title: "The 'Cortisol Belly' Myth Explained", img: "https://picsum.photos/seed/belly/100/100" },
            { title: "Why Japanese Women Don't Get Hot Flashes", img: "https://picsum.photos/seed/japan/100/100" },
            { title: "Is Your Thyroid The Real Culprit?", img: "https://picsum.photos/seed/thyroid/100/100" }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-marketing-orange transition-colors">
                        {item.title}
                    </h4>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Testimonial Widget */}
      <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 relative overflow-hidden">
         <Quote className="absolute top-2 right-2 w-12 h-12 text-brand-200/50 transform rotate-12" />
         <div className="flex text-yellow-500 mb-3 relative z-10">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
         </div>
         <p className="text-slate-700 italic text-sm mb-4 relative z-10 font-medium leading-relaxed">
            "I was skeptical at first, but after 2 weeks the night sweats just stopped. I haven't slept this well in 5 years. It's truly a lifesaver."
         </p>
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs shadow-sm">
                JS
            </div>
            <div>
                <div className="text-xs font-bold text-slate-900">Jessica S.</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> Verified Buyer
                </div>
            </div>
         </div>
      </div>

      {/* Author Widget */}
      <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-4">
          <img 
            src="https://picsum.photos/seed/doctor1/100/100" 
            alt="Dr. Sarah Jenkins" 
            className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
          />
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Dr. Sarah Jenkins</h4>
            <p className="text-xs text-slate-500 mb-1">Medical Reviewer</p>
            <a href="#" className="text-[10px] text-marketing-orange font-bold uppercase hover:underline flex items-center gap-1">
                View Bio <ExternalLink className="w-3 h-3" />
            </a>
          </div>
      </div>

      {/* Sticky Offer Widget */}
      <div className="sticky top-24 bg-white p-6 rounded-lg border-2 border-slate-100 shadow-soft text-center z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-marketing-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Best Seller
        </div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-2">Reader's Choice</h3>
        <img 
            src="https://picsum.photos/seed/supplementbottle/300/300" 
            alt="MenoBalance" 
            className="w-32 mx-auto mb-4 hover:scale-105 transition-transform duration-300"
        />
        <h4 className="font-bold text-slate-900 text-xl leading-tight mb-2">
            MenoBalance Complex
        </h4>
        <div className="flex justify-center mb-4">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
        </div>
        <p className="text-sm text-slate-600 mb-6 px-2">
            The #1 rated formula for hot flashes and hormonal weight gain.
        </p>
        <button className="w-full bg-marketing-orange text-white font-bold py-3 px-4 rounded shadow hover:bg-orange-600 transition-colors mb-4 transform hover:-translate-y-0.5 active:translate-y-0">
          Check Availability
        </button>
        <div className="flex items-center justify-center text-xs text-slate-500 gap-2 bg-slate-50 py-2 rounded">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>30-Day Money Back Guarantee</span>
        </div>
      </div>
    </div>
  );
};