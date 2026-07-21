import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function SmartCommerceHowItWorks() {
  useEffect(() => {
    usePageSEO('/smart-commerce/how-it-works');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Products', href: '/' },
        { label: 'Smart Commerce', href: '/smart-commerce' },
        { label: 'How It Works', href: '/smart-commerce/how-it-works' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              From Product Images to Live eCommerce in <span className="text-cyan-400">2 Weeks</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A proven 4-week process. No disruption. No large technical team required. Just a folder of product images and a desire to sell online.
            </p>
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              Built for Indian Retail & Jewellery | Proven Process | Full Ownership
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors">
                Start Your Smart Commerce Build
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* 5-STEP TIMELINE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">The Build Process</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  week: 'Week 1',
                  title: 'Discovery & Design',
                  desc: 'Brand framework, design system, site architecture, navigation and page structure finalised. All brand decisions made in this week.'
                },
                {
                  week: 'Week 1-2',
                  title: 'AI Catalogue Build',
                  desc: 'All product images and SKU data processed. AI generates titles, descriptions and SEO metadata for every product. Brand tone reviewed and approved.'
                },
                {
                  week: 'Week 2-3',
                  title: 'Backend Development',
                  desc: 'Order management, inventory, fulfilment, customer accounts built and tested against real order scenarios.'
                },
                {
                  week: 'Week 3',
                  title: 'Intelligence Dashboard',
                  desc: 'KPI dashboard connected to live store data. Real-time view operational and tested.'
                },
                {
                  week: 'Week 3-4',
                  title: 'QA, Training and Launch',
                  desc: 'Full testing, team training session, go-live.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-400 text-slate-950 font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-grow bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                    <div className="text-sm font-semibold text-cyan-400 mb-1">{item.week}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Smart Commerce Site?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Bring your product images and SKU data. We'll handle the rest. Book a 30-minute call to discuss your catalogue and business goals.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors">
                Start Your Smart Commerce Build
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
