import React from 'react';
import { Eye, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export const Article: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <article className="max-w-3xl mx-auto px-0 md:px-0">
      {/* Editorial Header */}
      <header className="mb-6">
        <div className="flex items-center space-x-2 text-marketing-red font-bold uppercase tracking-wider text-[10px] mb-3">
          <span className="bg-red-50 px-2 py-1 rounded">Trending Health News</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4">
          Why Your Doctor Is Missing The Signs: The "4-Hour Gap" Leaving Millions of Women in Limbo
        </h1>
        
        <h2 className="text-lg md:text-xl text-slate-600 leading-relaxed mb-4 font-medium">
          If you're feeling "off" but your labs are normal, you aren't crazy. You might be falling into the medical gap that experts are finally speaking out about.
        </h2>

        <div className="flex items-center justify-between border-y border-slate-100 py-3 mt-6">
          <div className="flex items-center space-x-3">
            <img 
              src="https://picsum.photos/seed/doctor1/100/100" 
              alt="Author" 
              className="w-10 h-10 rounded-full border border-slate-200"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold text-slate-900 uppercase">By Dr. Sarah Jenkins</span>
              <span className="text-[10px] text-slate-500 mt-1">Medically Reviewed • Updated {currentDate}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-slate-500 text-xs font-bold">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>128k Views</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>4 Min Read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="prose prose-slate prose-lg max-w-none text-slate-800">
        <p className="font-serif text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-brand-600 first-letter:float-left first-letter:mr-3">
          I hear it every single day in my clinic. A woman sits down, exhausted, holding a stack of "normal" test results, and bursts into tears.
        </p>

        <p>
          "I feel like I'm losing my mind," she says. "I'm gaining weight, I can't sleep, and I'm anxious all the time. But my doctor says I'm fine."
        </p>
        
        <p>
          <span className="highlight font-bold">She isn't fine. She is being gaslit by a medical system that wasn't built for her.</span>
        </p>

        <div className="my-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md">
          <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
            The "4-Hour" Reality Check
          </h4>
          <p className="text-sm leading-relaxed text-slate-700 m-0">
            Did you know the average medical student receives <strong>less than 4 hours</strong> of menopause education in 4 years of medical school? Your vet likely knows more about hormonal shifts in animals than your GP knows about yours.
          </p>
        </div>

        <p>
          This "educational gap" means millions of women in perimenopause (the 7-10 years before menopause) are misdiagnosed with depression, anxiety, or "just stress." They are prescribed pills to mask the symptoms, while the root cause—<strong>hormonal chaos</strong>—goes untreated.
        </p>

        <h3 className="font-bold text-2xl text-slate-900 mt-10 mb-4">The "Hormone Harmony" Protocol</h3>
        <p>
          When estrogen drops, your body's "thermostat" breaks (hello, hot flashes) and your "calm" hormone (progesterone) flatlines. 
        </p>
        <p>
          For years, I looked for a non-prescription solution for my patients who weren't candidates for HRT or wanted a natural approach. <span className="highlight">Most store-bought supplements are filled with sawdust and weak dosages.</span>
        </p>
        <p>
          Then I found <strong>MenoBalance Complex</strong>. 
        </p>

        <div className="my-8">
            <img 
            src="https://picsum.photos/seed/menopausewellness/800/400" 
            alt="Happy woman outdoors" 
            className="w-full rounded-lg shadow-md mb-2"
          />
          <p className="text-xs text-center text-slate-500 italic">Patients report feeling "like themselves again" within 30 days.</p>
        </div>

        <p>
          It is the only formulation I've seen that hits the "Big 3" needed for relief:
        </p>

        <ul className="space-y-4 my-6 list-none pl-0">
          {[
            "Black Cohosh for Thermoregulation (Stops the sweats)",
            "DIM for Estrogen Metabolism (Fixes the weight gain)",
            "Ashwagandha for Cortisol Control (Calms the anxiety)"
          ].map((item, i) => (
            <li key={i} className="flex items-center text-slate-800 font-medium">
              <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p>
          It isn't magic. It's biochemistry. And for the thousands of women who have switched to it, it's been a life raft.
        </p>
        
        <p className="font-bold text-slate-900">
          The best part? You don't need a prescription, and it costs less than a daily latte.
        </p>
      </div>
    </article>
  );
};