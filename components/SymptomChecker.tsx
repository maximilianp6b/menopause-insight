import React, { useState } from 'react';
import { Activity, ArrowRight, Stethoscope, AlertCircle } from 'lucide-react';
import { analyzeSymptoms } from '../services/geminiService';
import { LoadingState, SymptomAnalysisResult } from '../types';

export const SymptomChecker: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<SymptomAnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    try {
      const data = await analyzeSymptoms(input);
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="my-8 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-soft">
      <div className="bg-brand-600 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white font-bold">
            <Stethoscope className="w-5 h-5" />
            <span>AI Symptom Analysis</span>
        </div>
        <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded uppercase tracking-wide">Free Tool</span>
      </div>

      <div className="p-6">
        {status === LoadingState.IDLE || status === LoadingState.LOADING || status === LoadingState.ERROR ? (
          <>
            <p className="text-slate-600 text-sm mb-4 font-medium">
              Describe your symptoms below (e.g., "night sweats, irritable, gaining weight") to get an instant assessment.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="I am feeling..."
                className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none h-24 text-sm"
              />
               {status === LoadingState.ERROR && (
                <div className="flex items-center text-red-500 text-sm font-bold">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Connection error. Please try again.
                </div>
              )}
              <button
                type="submit"
                disabled={status === LoadingState.LOADING || !input.trim()}
                className="w-full bg-marketing-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                {status === LoadingState.LOADING ? (
                  <>
                    <Activity className="w-5 h-5 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    Check My Symptoms Now <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="animate-fade-in">
            <h4 className="text-slate-900 font-bold mb-3 text-lg border-b pb-2">Your Assessment</h4>
            <p className="text-slate-700 mb-4 text-sm leading-relaxed bg-white p-3 rounded border border-slate-100 shadow-sm">
              {result?.analysis}
            </p>
            
            <h5 className="font-bold text-brand-700 text-sm mb-2 uppercase tracking-wide">Expert Tips:</h5>
            <ul className="space-y-2 mb-4">
              {result?.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-marketing-orange flex-shrink-0"></div>
                  {rec}
                </li>
              ))}
            </ul>
            
            <button 
                onClick={() => {
                  setStatus(LoadingState.IDLE);
                  setInput('');
                  setResult(null);
                }}
                className="text-xs text-slate-400 underline hover:text-brand-600"
              >
                Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};