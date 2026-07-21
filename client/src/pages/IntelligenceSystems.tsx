import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CEOIntelConversation from '@/components/COIntelConversation';
import CEOIntelBeforeAfter from '@/components/COIntelBeforeAfter';
import { ArrowRight } from 'lucide-react';

export default function IntelligenceSystems() {
  const rajeshConversations = [
    {
      userQuestion: 'How has Mehta Assemblies performed in the last 90 days — orders, deliveries, and when did we last contact them?',
      coIntelResponse: 'Orders down 34% vs prior period. Two delayed deliveries in the last 45 days. Last contact: 61 days ago. Nine days of stock remaining on their most critical component. Supplier lead time to reorder: 14 days.',
      answerTime: '15 seconds',
      actionTaken: 'He was five days away from a third service failure on a customer already frustrated by two. He called the MD personally. Acknowledged the delays. Offered a priority slot. The MD said: "I was starting to wonder if we mattered to you." Three weeks later — Mehta placed their largest order of the year.'
    },
    {
      userQuestion: 'Which customers have we not contacted in 60+ days with declining order value?',
      coIntelResponse: '3 accounts found. Mehta Assemblies — ₹18L risk (already actioned above). Sharma Industries — ₹12L risk. Also: never offered Product Line C. Growing company. ₹75L opportunity. Kapoor Manufacturing — ₹8L risk. Last contact: 74 days ago.',
      answerTime: '15 seconds',
      actionTaken: 'Same morning. Same 15 seconds. One disaster prevented. ₹75L opportunity found.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Walk Into Every Room <span className="text-orange-500">Knowing.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Most Indian CEOs are making ₹50 crore decisions on fragmented data. We connect everything your business knows — and turn it into answers you can act on in seconds.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-semibold">Built for Indian Businesses ₹50–500 Cr</span>
              <span className="px-4 py-2 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-semibold">Results in 20–30 Days</span>
              <span className="px-4 py-2 rounded-full border border-cyan-400/50 text-cyan-400 text-sm font-semibold">Works With Your Existing Systems</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/consultation">
                <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Book a Discovery Call
                  <ArrowRight size={20} />
                </a>
              </Link>
              <Link href="/demo">
                <a className="inline-flex items-center justify-center gap-2 bg-transparent border border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Explore the Demo
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FEELING EVERY CEO KNOWS */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-white mb-12">There's a feeling every CEO knows.</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Walking into a board meeting — or an investor call, or a leadership review — and not being completely sure what you're about to face.
              </p>
              <p>
                Not because you're not good at your job.
              </p>
              <p>
                But because your revenue data is in the CRM. Your operations data is in the ERP. Your customer health is in a spreadsheet. Your supplier performance is in an email thread. And nobody has connected the dots.
              </p>
              <p>
                By the time the full picture comes together — the moment to act has passed.
              </p>
              <p>
                That feeling has a name.
              </p>
              <p className="font-bold text-white">
                It's called flying blind.
              </p>
              <p className="font-bold text-white">
                CEO Intel ends it.
              </p>
            </div>

            <div className="mt-12 p-6 bg-blue-800/20 border-l-4 border-orange-500 rounded italic text-lg text-gray-300">
              Imagine walking into every room already knowing — every risk, every opportunity, every action required. Before the meeting starts.
            </div>
          </div>
        </section>

        {/* SECTION 3: TWO THINGS CEOs PAY FOR */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12">Two things CEOs pay us for.</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Disasters Prevented */}
              <div className="bg-blue-800/30 border-l-4 border-orange-500 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">We find the disasters before they find you.</h3>
                <div className="space-y-4 text-gray-300 mb-6">
                  <p>
                    Right now, somewhere in your data, a ₹2–3 crore problem is quietly building.
                  </p>
                  <p>
                    A customer reducing orders — and the last time your team called them was 61 days ago. A stockout 9 days away that nobody noticed because inventory lives in the ERP and customer orders live somewhere else. A supplier performance issue that hasn't hit your P&L yet — but will.
                  </p>
                  <p>
                    These aren't management failures. They're visibility failures.
                  </p>
                  <p>
                    When your data is fragmented, problems are invisible until they're expensive. CEO Intel connects every system — and surfaces what needs your attention before it becomes a crisis.
                  </p>
                </div>
                <p className="text-lg font-semibold text-orange-400 italic">
                  The disaster didn't happen. Because the data connected.
                </p>
              </div>

              {/* Card 2: Revenue Found */}
              <div className="bg-blue-800/30 border-l-4 border-cyan-400 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Your next ₹75 lakh is already in your data.</h3>
                <div className="space-y-4 text-gray-300 mb-6">
                  <p>
                    A customer scaling their business — buying a product category from someone else that you manufacture. A product line quietly outperforming that your sales team hasn't prioritised. A market segment growing that your competitors haven't reached yet.
                  </p>
                  <p>
                    Growth opportunities don't announce themselves. They sit silently in the gap between your CRM and your ERP, between your sales data and your operations data — waiting for someone to connect the dots.
                  </p>
                  <p>
                    CEO Intel finds them. Before your competition does.
                  </p>
                </div>
                <p className="text-lg font-semibold text-cyan-400 italic">
                  Same question. Same morning. One disaster prevented. One opportunity unlocked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MONDAY MORNING - RAJESH STORY */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12">This is what a Monday morning looks like with CEO Intel.</h2>
            
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-300">
                <span className="text-cyan-400 font-semibold">6:47am</span> Rajesh runs a ₹65 crore auto components company. He types one question into CEO Intel.
              </p>
            </div>

            <CEOIntelConversation
              exchanges={rajeshConversations}
              sectionHeadline=""
            />

            <div className="mt-12 italic text-gray-300 text-center text-lg max-w-3xl mx-auto">
              That's not a product demo. That's what running a business with complete intelligence feels like.
            </div>
          </div>
        </section>

        {/* SECTION 5: NOT A DASHBOARD */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Not a dashboard. Not a report. <span className="text-cyan-400">An intelligence system.</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              CEO Intel connects every system your business runs — and turns fragmented data into one clear, connected, real-time view of your entire business. Delivered before your first meeting.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                <h3 className="text-lg font-bold text-white mb-3">Intelligent Drill-down</h3>
                <p className="text-gray-300">
                  Revenue and operations dashboards. Your KPIs. Your business language. Updated continuously.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                <h3 className="text-lg font-bold text-white mb-3">Multi-Source Chat</h3>
                <p className="text-gray-300">
                  Ask any question in plain language. Get answers from across all 7 data sources in under 15 seconds — with live charts generated on demand.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                <h3 className="text-lg font-bold text-white mb-3">Proactive Alerts</h3>
                <p className="text-gray-300">
                  Threats and opportunities surface before you ask. Customer drift. Stockout risk. Revenue signals. Delivered to you — not the other way around.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-white font-semibold">
                One system. Every answer. Every morning. <span className="text-orange-500 italic">Before the meeting starts.</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: THREE INTELLIGENCE SYSTEMS */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Three intelligence systems. One complete picture.</h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              CEO Intel is built around three intelligence systems — each designed to answer a different category of question your business is constantly asking. Start with one. Expand as you see results.
            </p>

            <div className="space-y-6">
              {/* Revenue Intelligence */}
              <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-cyan-400">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">REVENUE INTELLIGENCE</h3>
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-semibold rounded-full">MOST POPULAR</span>
                </div>
                <p className="text-lg font-semibold text-gray-300 mb-4">
                  "Where is your revenue really coming from — and what is threatening it?"
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">Connects to:</h4>
                    <p className="text-gray-400 text-sm">CRM, sales pipelines, customer databases, financial systems, sales history</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">What it answers:</h4>
                    <p className="text-gray-400 text-sm">Customer churn risk prediction · Sales focus optimisation · Product/SKU prioritisation · Revenue driver analysis · Team performance insights</p>
                  </div>
                </div>
                <div className="mb-6 p-4 bg-orange-500/10 rounded border border-orange-500/20">
                  <p className="text-gray-300"><span className="font-bold text-white">Outcome:</span> Better allocation · Reduced churn · Faster decisions</p>
                </div>
                <Link href="/intelligence-systems/revenue">
                  <a className="text-cyan-400 font-semibold hover:text-cyan-300 inline-flex items-center gap-2">
                    Explore <ArrowRight size={16} />
                  </a>
                </Link>
              </div>

              {/* Operational Excellence */}
              <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-orange-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">OPERATIONAL EXCELLENCE</h3>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full">RECOMMENDED</span>
                </div>
                <p className="text-lg font-semibold text-gray-300 mb-4">
                  "Where are you bleeding money — and how do you scale efficiently?"
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">Connects to:</h4>
                    <p className="text-gray-400 text-sm">Production systems, supply chain, inventory, quality control, HR, procurement, vendors</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">What it answers:</h4>
                    <p className="text-gray-400 text-sm">Money leak identification · Process bottleneck detection · Scaling opportunity mapping · Supplier performance analysis · Margin improvement areas</p>
                  </div>
                </div>
                <div className="mb-6 p-4 bg-orange-500/10 rounded border border-orange-500/20">
                  <p className="text-gray-300"><span className="font-bold text-white">Outcome:</span> EBITDA improvement · Scalability readiness · Higher valuation</p>
                </div>
                <Link href="/intelligence-systems/operations">
                  <a className="text-cyan-400 font-semibold hover:text-cyan-300 inline-flex items-center gap-2">
                    Explore <ArrowRight size={16} />
                  </a>
                </Link>
              </div>

              {/* Market & Competitive */}
              <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-slate-600">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">MARKET & COMPETITIVE</h3>
                  <span className="px-3 py-1 bg-slate-600/20 text-slate-400 text-sm font-semibold rounded-full">STRATEGIC EDGE</span>
                </div>
                <p className="text-lg font-semibold text-gray-300 mb-4">
                  "How do you stay ahead of competition — and find the next opportunity?"
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">Connects to:</h4>
                    <p className="text-gray-400 text-sm">Market data sources, competitor monitoring, customer sentiment platforms, industry trends, regulatory tracking</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">What it answers:</h4>
                    <p className="text-gray-400 text-sm">Competitor activity monitoring · Market direction prediction · Opportunity identification · Threat early warning · Strategic positioning insights</p>
                  </div>
                </div>
                <div className="mb-6 p-4 bg-orange-500/10 rounded border border-orange-500/20">
                  <p className="text-gray-300"><span className="font-bold text-white">Outcome:</span> First-mover opportunities · Risk mitigation · Market leadership</p>
                </div>
                <Link href="/intelligence-systems/market">
                  <a className="text-cyan-400 font-semibold hover:text-cyan-300 inline-flex items-center gap-2">
                    Explore <ArrowRight size={16} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: MORNING BRIEFING - THREE LIVE ALERTS */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Every morning, before your first meeting, CEO Intel briefs you.</h2>
            <p className="text-center text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-12">Live Intelligence · 6:47am</p>

            <div className="space-y-4 mb-12">
              <div className="bg-blue-800/30 border-l-4 border-orange-500 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">⚠ Revenue Alert</h3>
                <p className="text-gray-300 mb-3">Mehta Assemblies orders down 34%. Last contact: 61 days ago.</p>
                <p className="text-orange-400 font-semibold">Action required today</p>
              </div>

              <div className="bg-blue-800/30 border-l-4 border-cyan-400 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">📦 Operations Alert</h3>
                <p className="text-gray-300 mb-3">Brake pads: 9 days stock remaining. 14-day reorder lead time. Stockout risk.</p>
                <p className="text-cyan-400 font-semibold">Order today to avoid crisis</p>
              </div>

              <div className="bg-blue-800/30 border-l-4 border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">📈 Growth Opportunity</h3>
                <p className="text-gray-300 mb-3">Sharma Industries scaling fast. Never offered Product Line C. ₹75L opportunity sitting unclaimed.</p>
                <p className="text-slate-400 font-semibold">Propose this week</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                Three questions. Three answers. Three actions. <span className="text-orange-500 italic">Before 7am.</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: 7 DATA SOURCES */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Your data is already there. Nobody has connected it.</h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              CEO Intel connects to every system your business already runs — no migration, no new software, no disruption to how your team works. 7 systems. 1 intelligence layer. All connected.
            </p>

            <div className="space-y-3 mb-12">
              {[
                { name: 'Accounting (Tally / Busy)', detail: 'Revenue by customer, payment cycles, outstanding receivables, margin by product line, P&L movement signals', freq: 'Synced 4× daily' },
                { name: 'CRM (Zoho / Salesforce)', detail: 'Pipeline health, customer engagement, deal velocity, last-contact gaps, churn risk signals', freq: 'Synced every 2 hours' },
                { name: 'ERP / Warehousing', detail: 'Inventory levels, reorder triggers, supplier performance, lead times, WIP status, order fulfilment', freq: 'Synced 2× daily' },
                { name: 'eCommerce Platform', detail: 'Order velocity, return rates, category performance, demand spikes, customer acquisition signals', freq: 'Synced hourly' },
                { name: 'Email (Gmail / Outlook)', detail: 'Last contact dates, response pattern gaps, relationship health, dormant account detection', freq: 'Scanned every 3 hours' },
                { name: 'Google Sheets / Excel', detail: 'Custom KPIs, sales targets vs actuals, distributor scorecards, any structured data outside core systems', freq: 'Synced continuously' },
                { name: 'WhatsApp Business', detail: 'Customer complaint patterns, distributor communication health, field sales signals, complaint-to-churn warnings', freq: 'Daily digest' }
              ].map((source, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-4 border border-cyan-400/20">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-cyan-400 mb-1">{source.name}</h3>
                      <p className="text-gray-400 text-sm">{source.detail}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs font-semibold rounded-full whitespace-nowrap">{source.freq}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-blue-800/30 border border-cyan-400/20 rounded-lg">
              <p className="text-white font-semibold">
                No migration. No new software. No IT project. CEO Intel reads from your existing systems — it does not replace them.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: THE INTELLIGENCE ENGINE */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">While you lead, CEO Intel never sleeps.</h2>

            <div className="text-center mb-12">
              <p className="text-7xl font-bold text-orange-500 mb-2">340+</p>
              <p className="text-2xl font-bold text-white">automated intelligence processes every day</p>
            </div>

            <p className="text-lg text-gray-300 text-center mb-12">
              Every 24 hours, CEO Intel runs 340+ automated intelligence processes across your connected data — syncing, scanning, pattern-matching, and alerting — so that when you open your phone, walk into a meeting, or type a question, the answer is already there.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {['Pattern recognition', 'Anomaly detection', 'Opportunity mapping', 'Threat scoring', 'Natural language answers'].map((capability, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-4 text-center border border-cyan-400/20">
                  <p className="font-semibold text-white">{capability}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-white mb-4">Without CEO Intel</h3>
                <p className="text-gray-300">
                  Finance team pulls data: 3 days. Report arrives on the day — no nuance. By the time you have the answer, the moment to act has passed.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-cyan-400">
                <h3 className="text-xl font-bold text-white mb-4">With CEO Intel</h3>
                <p className="text-gray-300">
                  You ask the question: 15 seconds. Live charts on demand. Morning briefing waiting before you wake up. Always.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: SECURITY */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Your data. Protected.</h2>
            <p className="text-lg text-gray-300 text-center mb-12">
              Your business data is your most sensitive asset. CEO Intel is architected with security as a first principle — not an afterthought.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: '🔐', title: 'Your Data Stays Yours', desc: 'We never store, sell, or share your business data with third parties. Your data is used exclusively to generate your intelligence — and no one else\'s.' },
                { icon: '🔒', title: 'Encrypted in Transit and at Rest', desc: 'All data connections use TLS 1.3 encryption. Data at rest is encrypted with AES-256 — the same standard used by global banks.' },
                { icon: '🏢', title: 'Isolated Client Environments', desc: 'Every CEO Intel deployment is completely isolated. Your data is never co-mingled with another client\'s data — architecturally separated at every layer.' },
                { icon: '📋', title: 'Formal Data Processing Agreement', desc: 'Every engagement begins with a signed Data Processing Agreement that legally defines what data we access, how it is used, and your rights as the data owner.' },
                { icon: '🔑', title: 'Minimal Access Principle', desc: 'We request only the specific read permissions required to answer your intelligence questions. We never request write access to any of your source systems.' },
                { icon: '🗑️', title: 'Right to Deletion', desc: 'When your engagement ends, all copies of your data held within CEO Intel are permanently deleted within 30 days — with written confirmation provided.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-blue-800/30 border border-cyan-400/20 rounded-lg">
              <p className="text-white">
                Have specific security or compliance requirements? We address them directly in your discovery call. <span className="font-semibold">No generic answers.</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11: BEFORE / AFTER */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              The same CEO. The same business. Completely different intelligence.
            </h2>

            <CEOIntelBeforeAfter />

            <div className="text-center mt-12">
              <p className="text-4xl font-bold text-white">
                <span className="text-orange-500 italic">Walk Into Every Room Knowing.</span>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA */}
        <section className="py-24 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The question isn't whether you need this.<br />
              The question is: how many decisions have you already made without it?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 45-minute discovery call. We'll show you exactly what CEO Intel would surface in your business — using your own data, your own questions, your own industry. No commitment required. No generic pitch. Just intelligence.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg mb-4">
                Book a Discovery Call
                <ArrowRight size={20} />
              </a>
            </Link>
            <p className="text-sm text-gray-400 italic">
              No commitment required · No generic pitch · Just your data, your questions, your answers
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
