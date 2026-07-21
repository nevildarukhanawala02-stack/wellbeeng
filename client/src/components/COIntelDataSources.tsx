import React from 'react';

export default function COIntelDataSources() {
  const dataSources = [
    {
      name: 'Accounting (Tally)',
      description: 'Revenue, margin, receivables — updated 4x daily'
    },
    {
      name: 'CRM (Zoho / Salesforce)',
      description: 'Pipeline, churn signals, last contact — every 2 hours'
    },
    {
      name: 'ERP / Warehousing',
      description: 'Inventory, suppliers, lead times — 2x daily'
    },
    {
      name: 'eCommerce',
      description: 'Orders, returns, demand spikes — hourly'
    },
    {
      name: 'Email (Gmail / Outlook)',
      description: 'Relationship health, response gaps — every 3 hours'
    },
    {
      name: 'Google Sheets / Excel',
      description: 'Custom KPIs, targets, manual data — continuously'
    },
    {
      name: 'WhatsApp Business',
      description: 'Complaints, distributor signals — daily digest'
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          7 systems. 1 intelligence layer. <span className="text-cyan-400">All connected.</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          No migration. No new software. No IT project. CEO Intel connects to everything your business already runs.
        </p>

        <div className="space-y-4">
          {dataSources.map((source, idx) => (
            <div
              key={idx}
              className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20 flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-cyan-400/20">
                  <span className="text-cyan-400 font-bold text-sm">{idx + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{source.name}</h3>
                <p className="text-gray-300 mt-1">{source.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-cyan-400/10 border border-cyan-400/20 rounded-lg text-center">
          <p className="text-white font-semibold mb-2">
            340+ automated intelligence processes run every day.
          </p>
          <p className="text-gray-300 text-sm">
            Pattern recognition · Anomaly detection · Opportunity mapping · Threat scoring · Natural language answers.
          </p>
        </div>
      </div>
    </section>
  );
}
