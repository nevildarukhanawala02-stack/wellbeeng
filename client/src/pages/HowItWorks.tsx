import { Link } from 'wouter';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, MessageSquare, Search, Zap, Cog, Rocket, Download } from 'lucide-react';
import { LeadMagnetModal } from '@/components/LeadMagnetModal';

export default function HowItWorks() {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Discovery Consultation',
      timeline: 'Week 0 (30 minutes)',
      icon: MessageSquare,
      description: 'Understand your intelligence needs',
      details: [
        'Discuss your business challenges and strategic questions',
        'Map your current data sources (CRM, ERP, spreadsheets, etc.)',
        'Define key KPIs and alert requirements',
        'Confirm data integration approach and timeline'
      ],
      investment: '30 minutes with founders'
    },
    {
      number: 2,
      title: 'Data Assessment & Integration Plan',
      timeline: 'Week 1',
      icon: Search,
      description: 'Plan your data integration',
      details: [
        'Audit your data sources and system compatibility',
        'Define which KPIs will feed the CEO Intel Platform',
        'Map alert triggers and notification requirements',
        'Present integration plan and customization roadmap'
      ],
      investment: '1-2 hours with key stakeholders'
    },
    {
      number: 3,
      title: 'Data Integration & Connection',
      timeline: 'Week 2-3',
      icon: Zap,
      description: 'Connect your data to CEO Intel Platform',
      details: [
        'Establish secure connections to your data sources',
        'Configure data pipelines to feed the platform',
        'No disruption to your current operations',
        'Validate data accuracy and completeness'
      ],
      investment: 'Minimal - we handle all technical work'
    },
    {
      number: 4,
      title: 'Platform Customization',
      timeline: 'Week 3-4',
      icon: Cog,
      description: 'Customize CEO Intel for your business',
      details: [
        'Configure KPI dashboards for your metrics',
        'Set up automated alerts and thresholds',
        'Customize reports for different user roles',
        'Test queries and refine based on your feedback'
      ],
      investment: 'Feedback sessions (2-3 hours total)'
    },
    {
      number: 5,
      title: 'Launch & Enablement',
      timeline: 'Week 4-5',
      icon: Rocket,
      description: 'Go-live with your team',
      details: [
        'Launch CEO Intel Platform with your leadership team',
        'Training on querying and using the platform',
        'Begin receiving automated intelligence briefs',
        'Ongoing optimization based on usage patterns'
      ],
      investment: 'Initial training (2 hours), then daily usage (5-10 minutes)'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Connect Your Data. Customize Your Intelligence. Go Live in 30-45 Days.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Our CEO Intel Platform is already built and proven. We simply connect your data sources and customize it for your KPIs, alerts, and business needs.
            </p>
          </div>
        </section>

        {/* LEAD MAGNET SECTION */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-800/30 border border-cyan-400/30 rounded-lg p-12 text-center">
              <div className="inline-block bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Free Resource
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Download: CEO Intel Alerts Guide
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                A practical guide to the early-warning alerts built into CEO Intel. Learn what they detect, when they fire, and how to act on them before a problem becomes a crisis.
              </p>
              <button
                onClick={() => setIsLeadMagnetOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <Download size={20} />
                Download Free Guide
              </button>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required. Instant access via email.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline connector */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-24 w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent" />
                    )}

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      {/* Left side - Step info */}
                      <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-cyan-400 font-semibold mb-4">{step.timeline}</p>
                            <p className="text-gray-300 mb-4">{step.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Details */}
                      <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                        <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon size={24} className="text-cyan-400" />
                            <h4 className="font-semibold text-white">What Happens:</h4>
                          </div>
                          <ul className="space-y-2 mb-6">
                            {step.details.map((detail, i) => (
                              <li key={i} className="text-gray-300 flex items-start gap-2">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-4 border-t border-cyan-400/20">
                            <p className="text-sm text-gray-400">
                              <span className="font-semibold text-white">Your Time Investment:</span>
                              <br className="mt-1" />
                              {step.investment}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* POST-LAUNCH SUPPORT */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Post-Launch Support</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-xl font-semibold text-white mb-4">Ongoing Partnership</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Weekly intelligence briefs with key insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Monthly optimization and strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Quarterly system reviews and enhancements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>On-demand query support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Continuous learning and improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Direct access to founders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <h3 className="text-xl font-semibold text-white mb-4">We're Your Strategic Partner</h3>
                <p className="text-gray-200 leading-relaxed">
                  We're not just a vendor delivering a product. We're invested in your success. Your success is our success. We continuously learn from your usage patterns, refine the system, and help you extract maximum value from your intelligence systems.
                </p>
                <p className="text-gray-300 mt-4">
                  Think of us as your extended team, always looking for ways to help you make better, faster decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Common Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'How long does implementation really take?',
                  a: 'CEO Intel Platform goes live in 30-45 days from kickoff. This includes discovery, data integration, customization, testing, and launch. We move this fast because the platform framework is already built and proven—we\'re not building from scratch. We\'re simply connecting your data and customizing for your KPIs and alerts. Compare this to traditional BI implementations that take 6-12 months.'
                },
                {
                  q: 'What if we don\'t have sophisticated data systems?',
                  a: 'No problem. CEO Intel Platform works with whatever data sources you have—advanced CRM systems, ERP platforms, or even Excel spreadsheets. During discovery, we assess your data landscape and determine the best integration approach. The platform is flexible and can work with your current state while preparing you for future growth.'
                },
                {
                  q: 'Is our data secure?',
                  a: 'Absolutely. Data security is non-negotiable. CEO Intel Platform is deployed on your local intranet within your own infrastructure—it operates within your framework, not ours. The platform only accesses data based on specific queries or data required for your dashboards. Critically, we never store any actual data on our platform. We implement enterprise-grade security: encrypted data transmission and storage, role-based access controls, NDAs and data handling agreements, and compliance with Indian data protection regulations. Your data stays yours, on your servers. We never share it, sell it, or use it for other clients.'
                },
                {
                  q: 'Can we start with just one system and expand later?',
                  a: 'Yes! That\'s exactly how we recommend approaching it. Most clients start with CEO Intel Revenue Intelligence (fastest ROI), prove the value, and then expand to Operational Excellence and Market Intelligence modules. You\'re never locked into more than what makes sense for your business right now. The platform is modular and scales with your needs.'
                },
                {
                  q: 'Do we need technical expertise on our team?',
                  a: 'No. CEO Intel Platform is designed for business users, not technical teams. Your CEO, Sales Head, and Operations Manager can all use it without any technical training. You ask questions in plain English, and the platform answers. We provide initial onboarding and ongoing support, and the interface is intuitive and user-friendly.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to see how intelligence systems can transform your business? Book a free consultation with our team.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Your Free Consultation
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>
        {/* LEAD MAGNET MODAL */}
        <LeadMagnetModal
          isOpen={isLeadMagnetOpen}
          onClose={() => setIsLeadMagnetOpen(false)}
          leadMagnetTitle="CEO Intel Alerts Guide"
          leadMagnetDescription="A practical guide to the early-warning alerts built into CEO Intel — what they detect, when they fire, and how to act on them before a problem becomes a crisis."
        />
      </main>

      <Footer />
    </div>
  );
}
