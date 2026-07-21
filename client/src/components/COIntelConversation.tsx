import React from 'react';

interface ConversationExchange {
  userQuestion: string;
  coIntelResponse: string;
  answerTime: string;
  actionTaken: string;
}

interface COIntelConversationProps {
  exchanges: ConversationExchange[];
  sectionHeadline?: string;
}

export default function COIntelConversation({
  exchanges,
  sectionHeadline = '6:47am. Before the first shift starts.'
}: COIntelConversationProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">{sectionHeadline}</h2>

        <div className="space-y-8">
          {exchanges.map((exchange, idx) => (
            <div key={idx} className="space-y-4">
              {/* User Message */}
              <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-cyan-400">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold text-lg">You:</span>
                  <p className="text-white italic text-lg leading-relaxed">
                    "{exchange.userQuestion}"
                  </p>
                </div>
              </div>

              {/* CEO Intel Response */}
              <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-emerald-700 font-bold text-lg">• CEO Intel:</span>
                  <p className="text-emerald-900 text-lg leading-relaxed">
                    {exchange.coIntelResponse}
                  </p>
                </div>
                <div className="ml-0 pt-4 border-t border-emerald-200">
                  <p className="text-emerald-700 font-semibold text-sm">
                    Answer time: {exchange.answerTime}
                  </p>
                  <p className="text-emerald-600 italic text-sm mt-1">
                    {exchange.actionTaken}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
