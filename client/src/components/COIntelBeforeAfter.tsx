import React from 'react';
import { X, Check } from 'lucide-react';

export default function COIntelBeforeAfter() {
  const transformations = [
    {
      before: 'Reactive — firefighting crises',
      after: 'Proactive — problems prevented'
    },
    {
      before: 'Fragmented picture across 5+ systems',
      after: 'Complete, connected intelligence'
    },
    {
      before: 'Dependent on team to pull answers',
      after: 'Self-sufficient — answers in 15 seconds'
    },
    {
      before: 'Anxious before board meetings',
      after: 'Confident — already knows everything'
    },
    {
      before: 'Best-guess decisions under pressure',
      after: 'Data-backed conviction'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          The CEO Transformation
        </h2>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4">
                <h3 className="text-lg font-bold text-red-200">BEFORE CEO Intel</h3>
              </div>
              <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-lg p-4">
                <h3 className="text-lg font-bold text-emerald-200">AFTER CEO Intel</h3>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {transformations.map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                    <X size={20} className="text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item.before}</p>
                  </div>

                  {/* After */}
                  <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-lg p-4 flex items-start gap-3">
                    <Check size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-white">
            <span className="text-cyan-400">Walk Into Every Room Knowing.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
