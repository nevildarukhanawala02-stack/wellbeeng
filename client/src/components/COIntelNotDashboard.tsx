import React from 'react';
import { BarChart3, MessageSquare, AlertCircle } from 'lucide-react';

export default function COIntelNotDashboard() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Not a dashboard. Not a report. <span className="text-cyan-400">An intelligence system.</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          CEO Intel connects every system your business runs — and turns fragmented data into one clear, connected, real-time view of your entire business. Delivered before your first meeting.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Intelligent Drill-down */}
          <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Intelligent Drill-down</h3>
            <p className="text-gray-300">
              Revenue and operations dashboards. Your KPIs. Your business language. Updated continuously.
            </p>
          </div>

          {/* Card 2 - Multi-Source Chat */}
          <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Multi-Source Chat</h3>
            <p className="text-gray-300">
              Ask any question in plain language. Get answers from across all 7 data sources in under 15 seconds — with live charts generated on demand.
            </p>
          </div>

          {/* Card 3 - Proactive Alerts */}
          <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Proactive Alerts</h3>
            <p className="text-gray-300">
              Threats and opportunities surface before you ask. Customer drift. Stockout risk. Revenue signals. Delivered to you — not the other way around.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-white font-semibold">
            One system. Every answer. Every morning. <span className="text-cyan-400">Before the meeting starts.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
