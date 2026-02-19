import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 py-1 px-4 text-center">
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
        Advertorial • Paid Content • Health Insight
      </p>
    </div>
  );
};