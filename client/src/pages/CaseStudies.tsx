import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function CaseStudies() {
  useEffect(() => {
    usePageSEO('/case-studies');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real Problems. <span className="text-cyan-400">Real AI. Real Results.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Every engagement starts with a specific business challenge. Here is how we solved them.
            </p>
            <p className="text-lg text-cyan-400 font-semibold">
              From Manufacturing to Jewellery to B2B Services | Proven Results Across Industries
            </p>
          </div>
        </section>

        {/* CASE STUDIES GRID */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Manufacturing Case Study */}
              <Link href="/case-studies/manufacturing-machine-optimization">
                <a className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">Manufacturing</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">AI Automation</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    20 Machines. One Dashboard. Complete Visibility.
                  </h3>
                  <p className="text-gray-300 mb-6">
                    20 Laser Plasma Cutters connected. One dashboard. Revenue and efficiency increased from day one.
                  </p>
                  <div className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Case Study
                    <ArrowRight size={16} />
                  </div>
                </a>
              </Link>

              {/* Jewel Gallery Case Study */}
              <Link href="/case-studies/jewel-gallery-ecommerce">
                <a className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg cursor-pointer group">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">Jewellery</span>
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">Smart Commerce</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    Photos In. eCommerce Business Out. In 7 Days.
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Product images and SKUs in. Full eCommerce business live in 7 days.
                  </p>
                  <div className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Case Study
                    <ArrowRight size={16} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Tell us your biggest business challenge. We'll show you how AI can solve it.
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
