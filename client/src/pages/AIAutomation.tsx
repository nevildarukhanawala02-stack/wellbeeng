import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, MessageSquare, Image, Workflow } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function AIAutomation() {
  useEffect(() => {
    usePageSEO('/ai-automation');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              You Have a Problem. We Build the AI That Solves It.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              We don't sell you a tool. We identify your specific pain point, engineer the automation, and deliver measurable results. In weeks, not months.
            </p>
            <div className="flex flex-wrap gap-4 text-gray-300 mb-8">
              <span className="flex items-center gap-2">✓ Any Pain Point</span>
              <span className="flex items-center gap-2">✓ Any Industry</span>
              <span className="flex items-center gap-2">✓ Any Business Size</span>
              <span className="flex items-center gap-2">✓ No Technical Team Required</span>
            </div>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Tell Us Your Pain Point
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* PAIN POINT STORY BLOCK */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-white mb-6">A Real Problem. A Real Solution.</h3>
              
              <div className="space-y-4 text-gray-300 mb-6">
                <p>
                  A manufacturing client had 20 Laser Plasma Cutters. Each ran independently — no central visibility, no way to track RFQ to delivery across the shop floor.
                </p>
                <p>
                  We connected all 20 machines using AI into a single source of truth. Built an end-to-end automation from RFQ receipt through job allocation, production tracking and delivery.
                </p>
                <p className="font-semibold text-cyan-400">
                  Immediate visibility across the entire floor. Bottlenecks visible and fixable in real time. Revenue and efficiency increased from day one.
                </p>
              </div>
              
              <Link href="/case-studies/manufacturing-machine-optimization">
                <a className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2">
                  Read the full case study
                  <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* FOUR SERVICE CARDS */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Automate</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Process Automation */}
              <Link href="/ai-automation/process-automation">
                <a className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <Workflow size={32} className="text-orange-500 group-hover:text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">Stop Doing Manually What AI Can Do Automatically</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Eliminate manual, repetitive workflows — data entry, report generation, approvals, status updates
                  </p>
                  <div className="text-orange-400 font-semibold flex items-center gap-2">
                    Explore Process Automation
                    <ArrowRight size={16} />
                  </div>
                </a>
              </Link>

              {/* AI Agents & Chatbots */}
              <Link href="/ai-automation/ai-agents">
                <a className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare size={32} className="text-orange-500 group-hover:text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">Your Best Employee Never Sleeps</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Customer service, WhatsApp support, lead qualification — running 24/7 without a team
                  </p>
                  <div className="text-orange-400 font-semibold flex items-center gap-2">
                    Explore AI Agents
                    <ArrowRight size={16} />
                  </div>
                </a>
              </Link>

              {/* Catalogue & Content Automation */}
              <Link href="/ai-automation/catalogue-automation">
                <a className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <Image size={32} className="text-orange-500 group-hover:text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">A Product Image Is All You Need</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    AI-generated product titles, descriptions, SEO content from images and SKU data alone
                  </p>
                  <div className="text-orange-400 font-semibold flex items-center gap-2">
                    Explore Catalogue Automation
                    <ArrowRight size={16} />
                  </div>
                </a>
              </Link>

              {/* Custom Integrations */}
              <Link href="/ai-automation/custom-integrations">
                <a className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={32} className="text-orange-500 group-hover:text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">Your Business Tools Should Talk to Each Other</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Connect CRM, ERP, WhatsApp, email into unified intelligent workflows that work together
                  </p>
                  <div className="text-orange-400 font-semibold flex items-center gap-2">
                    Explore Custom Integrations
                    <ArrowRight size={16} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">How We Work</h2>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '1', title: 'Discovery Call (30 min)', desc: 'You describe the pain point. We identify automation potential and feasibility.' },
                { step: '2', title: 'Solution Design (Week 1)', desc: 'We map the workflow, define the AI components, present the build plan with timeline.' },
                { step: '3', title: 'Build & Test (Week 2-3)', desc: 'We build and test against real-world scenarios from your business.' },
                { step: '4', title: 'Go Live (Week 3-4)', desc: 'Launch, team training, monitoring and refinement.' }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                  {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400/30"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPECTED OUTCOMES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Outcomes</h2>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { metric: '10-30 hours', label: 'Manual work eliminated per week' },
                { metric: '80-95%', label: 'Reduction in manual errors' },
                { metric: '1-2 people', label: 'Freed per automation for higher-value work' },
                { metric: '2-4 weeks', label: 'Time to go live' }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                  <p className="text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Is Your Biggest Time-Wasting Process?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Tell us in plain English. We will tell you if it can be automated and how fast.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Free Automation Consultation
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
