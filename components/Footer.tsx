import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <span className="text-2xl font-serif font-bold text-white tracking-tight mb-4 block">
            Menopause<span className="text-brand-500">Insight</span>
          </span>
          <p className="mb-4 max-w-sm text-slate-500">
            Dedicated to closing the information gap in women's health through research-backed journalism and expert insights.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Advertorial Disclaimer</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 text-xs text-slate-600 text-center leading-relaxed">
        <p className="mb-2">
          THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE.
        </p>
        <p className="mb-2">
          *The content on this site is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
        <p>
          © {new Date().getFullYear()} Menopause Insight. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};