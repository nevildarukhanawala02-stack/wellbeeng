import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import COIntelConversation from '@/components/COIntelConversation';
import COIntelNotDashboard from '@/components/COIntelNotDashboard';
import COIntelDataSources from '@/components/COIntelDataSources';
import COIntelBeforeAfter from '@/components/COIntelBeforeAfter';
import { ArrowRight } from 'lucide-react';

export default function ManufacturingSolution() {
  const manufacturingConversations = [
    {
      userQuestion: 'How has Machine 7 performed in the last 30 days — utilisation, downtime events, and when was it last serviced?',
      coIntelResponse: 'Utilisation: 61% vs floor average of 78%. 3 unplanned downtime events in last 30 days totalling 14.5 hours. Last service: 47 days ago. Next scheduled service is overdue by 12 days.',
      answerTime: '15 seconds',
      actionTaken: 'Maintenance scheduled before the next shift. Rs 4.2L in estimated downtime cost prevented.'
    },
    {
      userQuestion: 'Which product lines are at risk of a stockout in the next 14 days based on current order pipeline and inventory?',
      coIntelResponse: '2 lines flagged. Product Line C: 9 days of stock at current run rate with 3 unallocated pending orders. Product Line F: 11 days. Supplier lead time on both: 14 days.',
      answerTime: '15 seconds',
      actionTaken: 'Procurement alerted. Emergency reorder placed. Sales team notified to hold new commitments on Line C pending restock.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Industries', href: '/' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Walk Into Every Production Meeting Knowing Exactly What Is Happening on Your Floor.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CEO Intel connects your machines, ERP, supply chain, quality systems and costs into one live intelligence system. Ask any operational question. Get the answer in 15 seconds.
            </p>
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              Built for Indian Manufacturers Rs 50-500 Cr | Live in 30-45 Days | No IT Project Required
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book a Manufacturing Intelligence Call
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* 60-SECOND CHALLENGE */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Can you answer these — right now, in under 60 seconds?
            </h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  num: 1,
                  q: 'Which machine on your floor is running below optimal utilisation right now — and since when?'
                },
                {
                  num: 2,
                  q: 'Which product line is fewer than 10 days from a stockout — and does your sales team know?'
                },
                {
                  num: 3,
                  q: 'Which supplier is showing early stress signals — delayed responses, quality deviations — before they call you?'
                },
                {
                  num: 4,
                  q: 'Where is the next Rs 50 lakh of operational efficiency already sitting in your data — unclaimed?'
                }
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.num}
                  </div>
                  <p className="text-gray-300 text-lg pt-1">{item.q}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-800/30 border border-cyan-400/20 rounded-lg p-8 text-center">
              <p className="text-white text-lg">
                If any of these took you more than 60 seconds — or you couldn't answer at all —{' '}
                <span className="text-cyan-400 font-bold">CEO Intel is built for you.</span>
              </p>
            </div>
          </div>
        </section>

        {/* NOT A DASHBOARD */}
        <COIntelNotDashboard />

        {/* COST TABLE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Before CEO Intel — this is what getting answers costs a manufacturer today:
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Every day without intelligence is a day of missed optimization.
            </p>

            <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 overflow-x-auto">
              <table className="w-full text-gray-300 text-sm">
                <thead>
                  <tr className="border-b border-cyan-400/20">
                    <th className="text-left py-4 px-4 font-bold text-white">The Question</th>
                    <th className="text-left py-4 px-4 font-bold text-white">People Involved</th>
                    <th className="text-left py-4 px-4 font-bold text-white">Time to Answer</th>
                    <th className="text-left py-4 px-4 font-bold text-cyan-400">Real Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Which machine had the most unplanned downtime last month — and what caused it?</td>
                    <td className="py-4 px-4">Operations + IT</td>
                    <td className="py-4 px-4">3-5 days</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 50,000+ plus days of lost insight</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">What is our true cost per unit on Product Line A at current capacity?</td>
                    <td className="py-4 px-4">CFO + Production</td>
                    <td className="py-4 px-4">1 week</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Never accurately calculated. Pricing decisions made blind.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Which supplier is at risk of a delivery failure in the next 30 days?</td>
                    <td className="py-4 px-4">Procurement team</td>
                    <td className="py-4 px-4">Never done</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 2-10L loss risk per disruption</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Where is material waste occurring and what is it costing us?</td>
                    <td className="py-4 px-4">Operations + Finance</td>
                    <td className="py-4 px-4">Monthly review</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Waste continues undetected between reviews</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 text-center">
              <p className="text-white font-semibold mb-2">
                With CEO Intel: every one of these answers in under 15 seconds.
              </p>
              <p className="text-gray-300">
                Your ERP, production systems, supplier data and financials — all connected, all live.
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSATION SECTION */}
        <COIntelConversation
          exchanges={manufacturingConversations}
          sectionHeadline="6:47am. Before the first shift starts."
        />

        {/* 7 DATA SOURCES */}
        <COIntelDataSources />

        {/* BEFORE / AFTER */}
        <COIntelBeforeAfter />

        {/* EXPECTED OUTCOMES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Outcomes</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Production efficiency', value: '15-25% increase in output with same resources' },
                { label: 'Unplanned downtime', value: '20-35% reduction through predictive maintenance intelligence' },
                { label: 'Operational cost', value: '10-20% reduction through true unit economics visibility' },
                { label: 'Quality improvement', value: '30-40% reduction in defect rates' },
                { label: 'Inventory cost', value: '25-35% reduction in carrying costs' },
                { label: 'Time to live', value: '30-45 days from first conversation to go-live' }
              ].map((outcome, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-lg font-bold text-white mb-2">{outcome.label}</h3>
                  <p className="text-gray-300">{outcome.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Walk Into Every Production Meeting Knowing.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 30-minute call with our founders. Tell us your biggest manufacturing blind spot — downtime you can't predict, costs you can't see, inventory you can't optimise. We'll show you exactly how CEO Intel answers it using your data and your systems.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Free Manufacturing Intelligence Consultation
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
