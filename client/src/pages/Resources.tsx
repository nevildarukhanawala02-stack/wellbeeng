import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, FileText, BookOpen, Download } from 'lucide-react';

export default function Resources() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Learn how to transform your business intelligence and make smarter decisions faster.
            </p>
          </div>
        </section>

        {/* RESOURCES SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Case Studies */}
              <div className="bg-blue-800/40 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Case Studies</h3>
                <p className="text-gray-300 mb-6">
                  See how Indian B2B companies across manufacturing, FMCG, retail, and services have transformed their decision-making with our intelligence systems.
                </p>
                <p className="text-gray-400 text-sm mb-4">Coming soon: Real-world examples of revenue growth, cost reduction, and operational improvements.</p>
                <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 opacity-50 cursor-not-allowed">
                  View Case Studies <ArrowRight size={16} />
                </button>
              </div>

              {/* Insights & Articles */}
              <div className="bg-blue-800/40 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Insights & Articles</h3>
                <p className="text-gray-300 mb-6">
                  Explore our latest thinking on business intelligence, AI-driven decision-making, and industry trends.
                </p>
                <p className="text-gray-400 text-sm mb-4">Coming soon: Expert articles, industry analysis, and strategic insights.</p>
                <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 opacity-50 cursor-not-allowed">
                  Read Insights <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Downloads */}
            <div className="bg-blue-800/40 rounded-lg p-8 border border-cyan-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Download size={24} className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Downloadable Resources</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-950 rounded-lg p-4 border border-cyan-400/10">
                  <h4 className="font-semibold text-white mb-2">Intelligence Systems Overview</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    A comprehensive guide to our three intelligence systems: Revenue, Operational Excellence, and Market & Competitive.
                  </p>
                  <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 opacity-50 cursor-not-allowed">
                    Download PDF <ArrowRight size={16} />
                  </button>
                </div>

                <div className="bg-slate-950 rounded-lg p-4 border border-cyan-400/10">
                  <h4 className="font-semibold text-white mb-2">Implementation Guide</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Learn what to expect during the 30-45 day implementation process and how to prepare your organization.
                  </p>
                  <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 opacity-50 cursor-not-allowed">
                    Download PDF <ArrowRight size={16} />
                  </button>
                </div>

                <div className="bg-slate-950 rounded-lg p-4 border border-cyan-400/10">
                  <h4 className="font-semibold text-white mb-2">ROI Calculator</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Estimate the potential ROI of implementing our intelligence systems for your business.
                  </p>
                  <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 opacity-50 cursor-not-allowed">
                    Access Calculator <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEBINAR SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Webinars & Events</h2>
            
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 text-center">
              <p className="text-gray-300 mb-6">
                Join us for upcoming webinars and events where we share insights on business intelligence, AI-driven decision-making, and industry trends.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Coming soon: Live webinars, Q&A sessions, and industry roundtables.
              </p>
              <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 opacity-50 cursor-not-allowed">
                View Upcoming Events <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Book a consultation to discuss your specific needs and explore how our intelligence systems can help.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Your Free Consultation
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
