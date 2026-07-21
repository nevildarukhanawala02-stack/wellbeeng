import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import COIntelConversation from '@/components/COIntelConversation';
import COIntelNotDashboard from '@/components/COIntelNotDashboard';
import COIntelDataSources from '@/components/COIntelDataSources';
import COIntelBeforeAfter from '@/components/COIntelBeforeAfter';
import { ArrowRight } from 'lucide-react';

export default function B2BServicesSolution() {
  const b2bConversations = [
    {
      userQuestion: 'Which of our top 10 clients is showing early churn signals — declining engagement, reduced project scope, slower payments?',
      coIntelResponse: 'Client #3 (Acme Corp): Project scope down 35% vs last quarter. Response time to RFQs increased from 2 days to 7 days. Payment delays: 15→32 days. Last interaction: 28 days ago. Competitor activity detected in their procurement system.',
      answerTime: '15 seconds',
      actionTaken: 'Account manager called same day. Executive meeting scheduled. Retention offer prepared. Client retained. Scope recovered within 45 days.'
    },
    {
      userQuestion: 'Which clients are our most profitable after accounting for delivery cost, support overhead, and payment delays?',
      coIntelResponse: '3 clients identified as unprofitable. Client #7: Gross margin 22% but support cost 18% + payment delays cost 8% = net margin -4%. Client #12: Gross margin 18%, net -2%. Client #15: Gross margin 25%, net 3% (barely profitable).',
      answerTime: '15 seconds',
      actionTaken: 'Pricing restructured for #7 and #12. Support model optimized. Clients #7 and #12 moved to net +8% and +6% respectively. Client #15 moved to +12%.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Industries', href: '/' },
        { label: 'B2B Services', href: '/solutions/b2b-services' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Walk Into Every Client Review Knowing Which Relationships Are Growing, Which Are Dying, and Exactly Why.
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              CEO Intel connects your CRM, project data, financials, and delivery systems into one live intelligence system. Ask any client or revenue question. Answer in 15 seconds.
            </p>
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              Built for Indian B2B Services Companies Rs 50-500 Cr | Client-Level to Portfolio-Level | Live in 30-45 Days
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book a B2B Services Intelligence Call
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
                  q: 'Which of your top 10 clients is showing early churn signals — declining engagement, reduced project scope, slower payments — before they leave?'
                },
                {
                  num: 2,
                  q: 'Which clients are actually profitable after accounting for delivery cost, support overhead, and payment delays?'
                },
                {
                  num: 3,
                  q: 'Which clients have untapped upsell potential — services they should be buying but aren\'t?'
                },
                {
                  num: 4,
                  q: 'Where is the next Rs 1 crore of revenue already sitting in your client data — unclaimed and unrecognised?'
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
              Before CEO Intel — this is what getting answers costs a B2B services company today:
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Every day without client intelligence is a day of lost revenue and missed retention.
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
                    <td className="py-4 px-4">Which clients are showing early churn signals?</td>
                    <td className="py-4 px-4">Account managers + Sales</td>
                    <td className="py-4 px-4">Monthly review</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 50-200L per lost client. Churn detected too late.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">What is the true profitability of each client?</td>
                    <td className="py-4 px-4">Finance + Operations</td>
                    <td className="py-4 px-4">Quarterly analysis</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Unprofitable clients continue draining margin. Never identified.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Which clients have upsell potential?</td>
                    <td className="py-4 px-4">Sales + Account team</td>
                    <td className="py-4 px-4">Never done systematically</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Rs 30-100L in annual upsell revenue missed per year</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Where is our next revenue opportunity hiding in client data?</td>
                    <td className="py-4 px-4">Leadership team</td>
                    <td className="py-4 px-4">Quarterly meeting</td>
                    <td className="py-4 px-4 text-cyan-400 font-semibold">Opportunity missed. Competitors identify it first.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 text-center">
              <p className="text-white font-semibold mb-2">
                With CEO Intel: every one of these answers in under 15 seconds.
              </p>
              <p className="text-gray-300">
                Your CRM, project data, financials, and delivery systems — all connected, all live.
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSATION SECTION */}
        <COIntelConversation
          exchanges={b2bConversations}
          sectionHeadline="6:47am. Before the client review call."
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
                { label: 'Client retention', value: '25-35% improvement through early churn detection and intervention' },
                { label: 'Revenue growth', value: '15-25% through upsell and cross-sell identification' },
                { label: 'Profitability improvement', value: '10-20% through pricing restructuring and cost optimization' },
                { label: 'Sales productivity', value: '3-5x improvement through intelligent lead and opportunity identification' },
                { label: 'Account management efficiency', value: '20-30% time savings through automated client health monitoring' },
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
              Walk Into Every Client Review Knowing.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 30-minute call with our founders. Tell us your biggest B2B services challenge — clients you're losing, profitability you can't see, or revenue you're leaving on the table. We'll show you exactly how CEO Intel answers it using your data and your systems.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Free B2B Services Intelligence Consultation
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
