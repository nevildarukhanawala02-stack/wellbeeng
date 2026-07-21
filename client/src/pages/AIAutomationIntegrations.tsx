import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function AIAutomationIntegrations() {
  useEffect(() => {
    usePageSEO('/ai-automation/custom-integrations');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Products', href: '/' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'Custom Integrations', href: '/ai-automation/custom-integrations' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Business Tools Should Talk to Each Other. <span className="text-cyan-400">We Make It Happen.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CRM does not know what ERP knows. Finance does not see what Sales sees. WhatsApp messages are not in your CRM. We connect your systems with AI so your business operates as one.
            </p>
            <p className="text-lg text-orange-400 font-semibold mb-8">
              Built for Indian B2B Companies | Real-Time Data Flow | 3-4 Weeks to Live
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Connect My Systems
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Problem Every Indian B2B Company Faces</h2>
              <p className="text-lg text-gray-300">
                Your CRM has customer data. Your ERP has order data. Your accounting system has payment data. Your WhatsApp has customer conversations. None of them talk to each other. Your team manually copies data between systems. Decisions are made on incomplete information. Mistakes happen. Opportunities are missed.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE CONNECT */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Can Connect</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'CRM ↔ ERP',
                  desc: 'Sales data flows to operations. Inventory data flows to sales. One source of truth.'
                },
                {
                  title: 'WhatsApp ↔ CRM',
                  desc: 'Every customer message logged automatically. Full conversation history in your CRM. No context lost.'
                },
                {
                  title: 'Email ↔ Lead Scoring',
                  desc: 'Emails analyzed automatically. Hot leads scored and routed to sales. Cold leads nurtured.'
                },
                {
                  title: 'Finance ↔ Operations',
                  desc: 'Real-time cost data. Profitability by product, customer, region. Decisions made on live numbers.'
                },
                {
                  title: 'Sales ↔ Inventory',
                  desc: 'Sales team sees live inventory before quoting. No over-commitments. No delays.'
                },
                {
                  title: 'Custom Integrations',
                  desc: 'Any system. Any data flow. We build the bridge your business needs.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPECTED OUTCOMES */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Outcomes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  metric: '0 hours',
                  label: 'Manual data entry per week'
                },
                {
                  metric: '1 source',
                  label: 'Of truth across all systems'
                },
                {
                  metric: 'Real-time',
                  label: 'Data flow between departments'
                },
                {
                  metric: '3-4 weeks',
                  label: 'Integration live and running'
                }
              ].map((outcome, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{outcome.metric}</div>
                  <p className="text-gray-300 font-semibold">{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE BUILD IT */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Built for Your Systems. Not a Generic Connector.</h2>

            <div className="space-y-6">
              {[
                {
                  week: 'Week 1',
                  title: 'System Audit',
                  desc: 'We map every system you use. Understand data structure, current workflows, pain points.'
                },
                {
                  week: 'Week 1-2',
                  title: 'Integration Design',
                  desc: 'Design the data flows. Define rules. Plan error handling. You review and approve.'
                },
                {
                  week: 'Week 2-3',
                  title: 'Build & Test',
                  desc: 'Build integrations. Test with real data. Refine until data flows perfectly.'
                },
                {
                  week: 'Week 3-4',
                  title: 'Deploy & Monitor',
                  desc: 'Deploy. Monitor first 1,000 data transactions. Refine based on real-world performance.'
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20">
                  <div className="text-orange-500 font-bold text-sm mb-2">{step.week}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Which Two Systems Should Talk to Each Other First?</h2>
            <p className="text-xl text-gray-300 mb-8">
              That's your starting point. Book a 30-minute call — tell us which systems need to connect and what data should flow between them. We'll show you exactly how we'd build it.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Connect My Systems
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
