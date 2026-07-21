import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import COIntelConversation from '@/components/COIntelConversation';
import COIntelNotDashboard from '@/components/COIntelNotDashboard';
import COIntelDataSources from '@/components/COIntelDataSources';
import COIntelBeforeAfter from '@/components/COIntelBeforeAfter';
import { ArrowRight } from 'lucide-react';

export default function FMCGSolution() {
  const fmcgConversations = [
    {
      userQuestion: 'How has Sharma Distributors performed in the last 60 days — primary vs secondary sales, payment behaviour, and when did someone last visit?',
      coIntelResponse: 'Primary sales up 12%. Secondary sales down 8% — gap widening over 6 weeks. Payment delays increased from avg 22 days to 34 days. Last field visit: 47 days ago. Competitor brand newly listed in their top 3 outlets.',
      answerTime: '15 seconds',
      actionTaken: 'Distributor called before the review. Field visit scheduled. Gap addressed before it becomes a lost territory.'
    },
    {
      userQuestion: 'Which SKUs are at stockout risk in the next 14 days across our distribution network?',
      coIntelResponse: '3 SKUs flagged. SKU-14 (North): 9 days stock. SKU-22 (West): 11 days — demand spike from new modern trade listing. SKU-07 (Pan-India): 13 days — seasonal uplift not factored into last forecast.',
      answerTime: '15 seconds',
      actionTaken: 'Production and logistics alerted. Allocation priority adjusted. Field team briefed.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Industries', href: '/' },
        { label: 'FMCG & Consumer', href: '/solutions/fmcg' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Walk Into Every Channel Review Knowing Exactly Where Your Brand Is Growing — and Where It Is Quietly Losing.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CEO Intel connects your distributor data, SKU performance, secondary sales, consumer signals and market intelligence into one live system. Ask any brand or channel question. Answer in 15 seconds.
            </p>
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              Built for Indian FMCG Companies Rs 50-500 Cr | SKU-Level to Strategy-Level | Live in 30-45 Days
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book a FMCG Intelligence Call
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
                  q: 'Which of your distributors is showing early loyalty erosion — reduced orders, slower payments, competitor listings — before they tell you?'
                },
                {
                  num: 2,
                  q: 'Which SKU is fewer than 10 days from a stockout in the North region — and does your field team know to hold new commitments?'
                },
                {
                  num: 3,
                  q: 'Which trade promotion you ran last month actually delivered positive ROI — and which one quietly bled margin?'
                },
                {
                  num: 4,
                  q: 'Where is the next Rs 75 lakh of revenue already sitting in your distribution data — unclaimed and unrecognised?'
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
              Before CEO Intel — this is what getting answers costs an FMCG company today:
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Every day without intelligence is a day of missed opportunities.
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
                    <td className="py-4 px-4">Which distributors had a gap between primary and secondary sales last month?</td>
                    <td className="py-4 px-4">Sales + Finance</td>
                    <td className="py-4 px-4">2-3 weeks</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 2L+ loss risk per distributor. Gaps never caught in real time.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">How accurate was our demand forecast by SKU last quarter?</td>
                    <td className="py-4 px-4">Demand planning</td>
                    <td className="py-4 px-4">Monthly review</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Forecast errors cost Rs 30-80L in overstock or lost sales per quarter</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Which trade promotion delivered positive vs negative ROI?</td>
                    <td className="py-4 px-4">Marketing + Finance</td>
                    <td className="py-4 px-4">4-6 weeks post-campaign</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Most FMCG brands never calculate true promotion ROI</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">What is our brand health trend in Tier 2 cities vs metros?</td>
                    <td className="py-4 px-4">Market research agency</td>
                    <td className="py-4 px-4">3-month study</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 5-15L per study. Insight arrives after the market has moved.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 text-center">
              <p className="text-white font-semibold mb-2">
                With CEO Intel: every one of these answers in under 15 seconds.
              </p>
              <p className="text-gray-300">
                Your distributor data, Tally, CRM, field reports and market signals — all connected, all live.
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSATION SECTION */}
        <COIntelConversation
          exchanges={fmcgConversations}
          sectionHeadline="6:47am. Before the distributor review call."
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
                { label: 'Demand forecast accuracy', value: '30-40% improvement — fewer stockouts, less overstock' },
                { label: 'Revenue growth', value: '15-25% through better channel focus' },
                { label: 'Distributor efficiency', value: '15-20% improvement through real-time channel intelligence' },
                { label: 'Marketing ROI', value: '3-5x improvement through promotion intelligence' },
                { label: 'Inventory carrying cost', value: '20-30% reduction through SKU-level demand intelligence' },
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
              Walk Into Every Channel Review Knowing.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 30-minute call with our founders. Tell us your biggest FMCG challenge — distributor loyalty you can't track, demand you can't forecast, promotions you can't measure. We'll show you exactly how CEO Intel answers it using your data and your systems.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Free FMCG Intelligence Consultation
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
