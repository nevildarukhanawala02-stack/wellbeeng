import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import COIntelConversation from '@/components/COIntelConversation';
import COIntelNotDashboard from '@/components/COIntelNotDashboard';
import COIntelDataSources from '@/components/COIntelDataSources';
import COIntelBeforeAfter from '@/components/COIntelBeforeAfter';
import { ArrowRight } from 'lucide-react';

export default function RetailSolution() {
  const retailConversations = [
    {
      userQuestion: 'Which 3 outlets in my portfolio are running below 70% of their revenue potential — and what is holding each one back?',
      coIntelResponse: 'Outlets #7, #12, #19 flagged. #7: 68% potential — high footfall but low conversion. Training gap on new product line. #12: 65% — inventory stockouts on top 3 SKUs. #19: 62% — location traffic down 15% vs 6 months ago. Competitor opened 200m away.',
      answerTime: '15 seconds',
      actionTaken: 'Staff training initiated at #7. Emergency inventory allocation to #12. Promotional campaign launched at #19. Expected recovery: 8-12% within 30 days.'
    },
    {
      userQuestion: 'Which customers who were visiting weekly 60 days ago have not been back since — and should we reach out?',
      coIntelResponse: '847 customers flagged. 62% are high-value (spent Rs 5L+ annually). Churn signals: 3 visits average down to 0. Last purchase: 45-60 days ago. Top reason for lapse: competitor loyalty program adoption (detected via social signals).',
      answerTime: '15 seconds',
      actionTaken: 'Personalized re-engagement campaign launched. 40% responded within 7 days. Average recovery: Rs 2.3L in incremental revenue.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Industries', href: '/' },
        { label: 'Retail & QSR', href: '/solutions/retail' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Walk Into Every Outlet Review Knowing Which Locations Are Performing, Which Are Not, and Exactly Why.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CEO Intel connects your POS data, outlet performance, inventory, customer behaviour and market intelligence into one live system. Ask any outlet or portfolio question. Answer in 15 seconds.
            </p>
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              Built for Indian Retail & QSR Chains Rs 50-500 Cr | Outlet-Level to Portfolio-Level | Live in 30-45 Days
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book a Retail & QSR Intelligence Call
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
                  q: 'Which 3 outlets in your portfolio are running below 70% of their revenue potential — and what is holding each one back?'
                },
                {
                  num: 2,
                  q: 'Which menu item or product is your highest revenue contributor but your lowest margin contributor — and are you actively promoting it?'
                },
                {
                  num: 3,
                  q: 'Which customers who were visiting weekly 60 days ago have not been back since — and do you know why?'
                },
                {
                  num: 4,
                  q: 'If you open a new outlet in [location], what is the realistic revenue in month 6 based on your existing performance data?'
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
              Before CEO Intel — this is what getting answers costs a retail chain today:
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Every day without outlet-level intelligence is a day of lost revenue.
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
                    <td className="py-4 px-4">Which outlet is underperforming vs its potential — and since when?</td>
                    <td className="py-4 px-4">Regional manager + ops</td>
                    <td className="py-4 px-4">Weekly meeting</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 15-40L revenue lost per underperforming outlet per year before it is addressed</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Which menu items should we remove — low margin, high kitchen complexity?</td>
                    <td className="py-4 px-4">Operations + Finance</td>
                    <td className="py-4 px-4">Quarterly review</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Margin erosion continues undetected between quarterly reviews</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Which regular customers are lapsing — and who should we reach out to?</td>
                    <td className="py-4 px-4">Marketing team</td>
                    <td className="py-4 px-4">Never done systematically</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Repeat customers spend 3-5x more. Lapse detection is pure revenue.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">What is the realistic revenue potential for a new outlet in [location]?</td>
                    <td className="py-4 px-4">Regional manager + Finance</td>
                    <td className="py-4 px-4">2-3 weeks guesswork</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Wrong estimates lead to Rs 50-200L in misallocated capex per new outlet</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 text-center">
              <p className="text-white font-semibold mb-2">
                With CEO Intel: every one of these answers in under 15 seconds.
              </p>
              <p className="text-gray-300">
                Your POS data, inventory, customer behaviour, and market signals — all connected, all live.
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSATION SECTION */}
        <COIntelConversation
          exchanges={retailConversations}
          sectionHeadline="6:47am. Before the outlet review meeting."
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
                { label: 'Outlet performance improvement', value: '15-25% average uplift in underperforming locations within 90 days' },
                { label: 'Customer retention', value: '20-30% reduction in churn through early detection and intervention' },
                { label: 'Margin optimization', value: '5-10% improvement through menu and pricing intelligence' },
                { label: 'New outlet success rate', value: '40-50% improvement in revenue forecasting accuracy' },
                { label: 'Inventory carrying cost', value: '15-20% reduction through outlet-level demand forecasting' },
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
              Walk Into Every Outlet Review Knowing.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 30-minute call with our founders. Tell us your biggest retail challenge — outlets you can't optimize, customers you're losing, or new locations you're uncertain about. We'll show you exactly how CEO Intel answers it using your data and your systems.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Free Retail & QSR Intelligence Consultation
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
