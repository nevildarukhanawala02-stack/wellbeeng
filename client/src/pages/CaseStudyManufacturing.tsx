import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function CaseStudyManufacturing() {
  useEffect(() => {
    usePageSEO('/case-studies/manufacturing-machine-optimization');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Manufacturing Machine Optimization', href: '/case-studies/manufacturing-machine-optimization' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">Manufacturing</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">AI Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              20 Machines. One Dashboard. Complete Visibility.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A mid-size Indian manufacturer had 20 Laser Plasma Cutters running independently. No central visibility. No way to track RFQ to delivery across the floor. We changed that.
            </p>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">The Challenge</h2>
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                Each Laser Plasma Cutter operated independently — no central visibility across the shop floor. RFQ (Request for Quotation) to delivery tracking was entirely manual and fragmented. The client had no real-time data on machine utilisation, job status or production bottlenecks. Decisions were being made on incomplete information.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILT */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Built</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: 'AI Connectivity Layer',
                  desc: 'Integrated all 20 Laser Plasma Cutters into a single live data feed.'
                },
                {
                  title: 'End-to-End Process Automation',
                  desc: 'From RFQ receipt through job allocation, production tracking, quality check to delivery.'
                },
                {
                  title: 'Real-Time Operations Dashboard',
                  desc: 'Machine utilisation, job status, throughput and efficiency per machine. All visible on one screen.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-xl font-bold text-white mb-2">{idx + 1}. {item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE IMPACT */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">The Impact</h2>
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Immediate single source of truth across all 20 machines. Production bottlenecks visible and addressable in real time. Machine utilisation optimised.
              </p>
              <p className="text-cyan-400 font-semibold text-lg">
                Significant efficiency and revenue increase from day one of go-live.
              </p>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-4xl font-bold text-white text-center mb-6 italic">
                "For the first time, I could see my entire factory on one screen."
              </blockquote>
              <p className="text-gray-400 text-center">— Manufacturing Client</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Have a manufacturing pain point?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Talk to us. We'll show you how AI can transform your operations.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Free Consultation
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
