import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function AIAutomationAgents() {
  useEffect(() => {
    usePageSEO('/ai-automation/ai-agents');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Products', href: '/' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Agents & Chatbots', href: '/ai-automation/ai-agents' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              24/7 AI Customer Service. <span className="text-cyan-400">Your Brand. Your Voice.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              WhatsApp agents, lead qualification bots, FAQ automation. Every customer query answered instantly. Your team handles only what matters.
            </p>
            <p className="text-lg text-orange-400 font-semibold mb-8">
              Built for Indian B2B Companies | Results in 2-4 Weeks | 24/7 Availability
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Build My AI Agent
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* COST-OF-INACTION ANCHOR */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Cost of Not Automating</h2>
              <p className="text-lg text-gray-300">
                The average Indian B2B company loses <strong>4-6 hours of team time every day</strong> answering the same customer queries. That is <strong>Rs 8-15 lakh a year</strong> in salary cost — handling questions a well-built AI agent answers in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* SIX CAPABILITIES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Six Things Our AI Agents Handle So Your Team Does Not Have To</h2>

            <div className="space-y-8">
              {[
                {
                  num: 1,
                  title: 'WhatsApp Customer Support',
                  what: 'AI agent in your WhatsApp Business account reads queries and responds with brand-toned answers instantly, 24/7.',
                  means: 'Responses in under 60 seconds. Support team stops spending 4 hours/day on WhatsApp.'
                },
                {
                  num: 2,
                  title: 'Lead Qualification Bot',
                  what: 'Asks the right questions when an enquiry arrives, scores the lead against your criteria, routes hot leads to sales with a summary.',
                  means: 'Sales team only speaks to qualified prospects. 30-50% improvement in sales productivity within 60 days.'
                },
                {
                  num: 3,
                  title: 'FAQ Automation',
                  what: 'AI knowledge base answers your 50-100 most common questions accurately, in your brand tone, in Hindi or English.',
                  means: '60-80% of queries never reach your team. Team handles only questions requiring human judgment.'
                },
                {
                  num: 4,
                  title: 'Order Status Tracking',
                  what: 'Connects to your order management system. Customer WhatsApps "where is my order?" — AI pulls live status and responds immediately.',
                  means: 'Eliminate the most time-consuming query category entirely.'
                },
                {
                  num: 5,
                  title: 'Appointment & Meeting Booking',
                  what: 'Checks calendar availability and books meetings without human involvement. Confirmations and reminders sent automatically.',
                  means: 'Prospects book when intent is highest — immediately after enquiry.'
                },
                {
                  num: 6,
                  title: 'Product Enquiry Handling',
                  what: 'Answers detailed product specification queries, suggests alternatives, escalates technical questions to the right person.',
                  means: 'Catalogue becomes searchable in conversation. Answers in seconds, not a callback.'
                }
              ].map((item) => (
                <div key={item.num} className="bg-blue-800/20 rounded-lg p-8 border border-cyan-400/20">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500/20 text-orange-500 font-bold text-lg">
                        {item.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <div className="space-y-2">
                        <p className="text-gray-300">
                          <span className="font-semibold text-cyan-400">What it does:</span> {item.what}
                        </p>
                        <p className="text-gray-300">
                          <span className="font-semibold text-cyan-400">What that means:</span> {item.means}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHATSAPP ADVANTAGE */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Every Indian Business Needs a WhatsApp AI Agent</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                '500 million WhatsApp users in India — more than any other country',
                '74% of Indian consumers prefer WhatsApp for business communication over email or phone',
                'Average customer expects a WhatsApp response within 30 minutes. Average business response time: 4+ hours.',
                'Businesses that respond within 5 minutes convert at 9x the rate of businesses that respond within an hour'
              ].map((stat, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COST COMPARISON */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">The Math Is Simple</h2>

            <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-lg text-gray-300 mb-6">
                A customer support role costs <strong>Rs 25,000-50,000/month</strong> in salary alone, before benefits, management time, training and attrition. A Wellbeeng AI agent handles the query volume of <strong>2-3 such roles</strong>, works <strong>24/7</strong>, never has a bad day, and is fully trained on your business from day one.
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                Most clients recover the full build cost within 3-6 months.
              </p>
            </div>
          </div>
        </section>

        {/* HOW WE BUILD IT */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Built for Your Business. Not a Generic Template.</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  week: 'Week 1',
                  title: 'Discovery',
                  desc: 'Map every query type. Volume, frequency, complexity. Identify the 20% consuming 80% of team time.'
                },
                {
                  week: 'Week 1-2',
                  title: 'Knowledge Build',
                  desc: 'Build AI knowledge base from your FAQs, catalogues, policies, WhatsApp history. Define escalation triggers.'
                },
                {
                  week: 'Week 2-3',
                  title: 'Build & Test',
                  desc: 'Build and test against 200+ real query scenarios. Refine until accuracy exceeds 95% on core query types.'
                },
                {
                  week: 'Week 3-4',
                  title: 'Go Live & Monitor',
                  desc: 'Deploy. Monitor first 1,000 conversations. Refine based on real interactions.'
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

        {/* COMMON QUESTIONS */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Questions We Hear Most</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What if AI gives a wrong answer?',
                  a: 'We build in confidence thresholds. Below threshold, agent escalates to a human rather than guessing. We aim for 95%+ accuracy on core query types before go-live.'
                },
                {
                  q: 'Will my customers use it?',
                  a: 'Customers adapt within days — especially on WhatsApp. Faster response than any human team is the strongest driver of adoption.'
                },
                {
                  q: 'Can it handle Hindi?',
                  a: 'Yes. We build multilingual agents supporting Hindi, English and any regional language.'
                },
                {
                  q: "What if it can't help?",
                  a: 'Escalates to your team with full conversation summary. Customer never has to repeat themselves.'
                },
                {
                  q: "Do I need a technical team?",
                  a: 'No. You manage it through a simple dashboard. We handle all maintenance.'
                },
                {
                  q: 'How long until ROI?',
                  a: 'Most clients see measurable reduction in team query-handling time within 2 weeks. Full ROI within 3-6 months.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                    <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    {item.q}
                  </h3>
                  <p className="text-gray-300 ml-8">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">What Are Your Team's Top 10 Most Repeated Queries?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Write them down. That list is the starting point. Book a 30-minute call — bring the list, we'll show you exactly how each gets automated and what it costs your team to keep handling them manually.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Build My AI Agent
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
