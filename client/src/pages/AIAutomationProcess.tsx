import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function AIAutomationProcess() {
  useEffect(() => {
    usePageSEO('/ai-automation/process-automation');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Products', href: '/' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'Process Automation', href: '/ai-automation/process-automation' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Doing Manually What AI Can Do Automatically
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We map your exact process — not a generic template. Approval workflows, data entry, report generation, inventory updates, invoice processing, status notifications. All automated.
            </p>
            <p className="text-lg text-orange-400 font-semibold mb-8">
              Built for Indian B2B Companies | Results in 2-3 Weeks | Live Fast
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Automate Your Process
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
                Your team spends hours every day on repetitive tasks: copying data between systems, approving routine requests, generating reports, updating inventory, processing invoices. These tasks don't require judgment — they require consistency. That's exactly what AI does best.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Automate</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Approval Workflows',
                  desc: 'Routine approvals (leave requests, expense reimbursements, purchase orders below threshold) auto-approved based on rules. Exceptions escalated to humans.'
                },
                {
                  title: 'Data Entry & Migration',
                  desc: 'Extract data from emails, PDFs, forms. Validate. Enter into your systems. No manual copy-paste. No errors.'
                },
                {
                  title: 'Report Generation',
                  desc: 'Daily/weekly/monthly reports compiled automatically from your systems. Sent to stakeholders on schedule. No manual assembly.'
                },
                {
                  title: 'Inventory Updates',
                  desc: 'Stock levels sync across systems in real-time. Low-stock alerts triggered automatically. Reorder points hit without human intervention.'
                },
                {
                  title: 'Invoice Processing',
                  desc: 'Invoices received → extracted → matched to POs → entered into accounting system. 3-day process becomes 3-minute process.'
                },
                {
                  title: 'Status Notifications',
                  desc: 'Order shipped → customer notified via SMS/email/WhatsApp automatically. No manual status updates. No forgotten notifications.'
                }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.desc}</p>
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
                  metric: '10-30 hrs/week',
                  label: 'Manual work eliminated per automation deployed'
                },
                {
                  metric: '80-95%',
                  label: 'Reduction in manual errors through AI-driven workflows'
                },
                {
                  metric: '1-2 people',
                  label: 'Freed per automation to focus on higher-value work'
                },
                {
                  metric: '2-4 weeks',
                  label: 'Time from kickoff to go-live'
                }
              ].map((outcome, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{outcome.metric}</div>
                  <p className="text-gray-300 font-semibold">{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE BUILD IT */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Built for Your Business. Not a Generic Template.</h2>

            <div className="space-y-6">
              {[
                {
                  week: 'Week 1',
                  title: 'Discovery & Mapping',
                  desc: 'We map your exact workflow. Every step. Every decision point. Every exception. We identify which parts can be automated and which need human judgment.'
                },
                {
                  week: 'Week 1-2',
                  title: 'Solution Design',
                  desc: 'We design the automation. Define rules. Map data flows. Plan integrations with your existing systems. You review and approve.'
                },
                {
                  week: 'Week 2-3',
                  title: 'Build & Test',
                  desc: 'We build and test against your real data. Real scenarios. Real edge cases. Refine until it works perfectly.'
                },
                {
                  week: 'Week 3-4',
                  title: 'Go Live & Monitor',
                  desc: 'Deploy. Monitor first 100 cycles. Refine based on real-world performance. Your team trained and confident.'
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
            <h2 className="text-4xl font-bold text-white mb-6">What Process Is Eating Your Team's Time Right Now?</h2>
            <p className="text-xl text-gray-300 mb-8">
              That process is the perfect starting point. Book a 30-minute call — describe it, we'll show you exactly how we'd automate it and what it would cost your team to keep doing it manually.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Automate Your Process
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
