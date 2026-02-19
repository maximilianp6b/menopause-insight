import React from 'react';
import { ArrowRight, Star, Clock, Check } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-marketing-orange shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-40 p-3 md:hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          <div className="flex text-yellow-500 mb-1">
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
          </div>
           <p className="text-xs font-bold text-slate-900 leading-tight">
            Limited Stock Alert: MenoBalance
          </p>
        </div>
        <button className="bg-marketing-orange text-white font-bold py-3 px-4 rounded shadow-md hover:bg-orange-600 transition-colors flex items-center text-sm whitespace-nowrap">
          Check Availability <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export const ProductBlock: React.FC = () => {
  return (
    <div className="my-12 border-4 border-dashed border-marketing-orange/30 bg-[#FFFDF5] rounded-xl p-6 sm:p-8 relative">
      {/* Badge */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-marketing-red text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap">
        Internet Exclusive Offer
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Update: Low Stock Warning
        </h3>
        <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 mb-6 bg-white inline-block px-4 py-1 rounded-full border border-slate-200">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span>Demand is high as of <strong>{new Date().toLocaleDateString()}</strong></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-left">
           <div className="flex justify-center">
             <div className="relative">
                <img 
                    src="https://picsum.photos/seed/supplementbottle/300/400" 
                    alt="Product Bottle" 
                    className="w-48 rounded shadow-xl border border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 font-bold w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12 border-2 border-white">
                    <span className="text-xs">SAVE</span>
                    <span className="text-xl leading-none">50%</span>
                </div>
             </div>
           </div>
           
           <div>
             <h4 className="font-bold text-lg text-slate-900 mb-4">Why Readers Are Choosing MenoBalance:</h4>
             <ul className="space-y-3 mb-6">
                {[
                    "Clinically studied ingredients",
                    "GMP Certified Facility",
                    "30-Day Money-Back Guarantee",
                    "Free Express Shipping Today"
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                        <Check className="w-5 h-5 text-green-600 mr-2" /> {item}
                    </li>
                ))}
             </ul>
             
             <button className="w-full bg-marketing-orange hover:bg-orange-600 text-white font-bold text-xl py-4 px-6 rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center group">
               Claim Your Bottle Now <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
             </button>
             
             <div className="mt-4 flex items-center justify-center space-x-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};