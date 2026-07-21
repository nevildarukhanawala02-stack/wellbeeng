import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function CaseStudyJewelGallery() {
  useEffect(() => {
    usePageSEO('/case-studies/jewel-gallery-ecommerce');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Jewel Gallery eCommerce', href: '/case-studies/jewel-gallery-ecommerce' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">eCommerce</span>
              <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">Smart Commerce</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Photos In. eCommerce Business Out.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Jewel Gallery had one asset: product photographs and SKU codes. No descriptions. No website. No developer. No content team. One week later, they had a complete eCommerce business.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Note: Jewel Gallery name published with permission. Website URL not published at client request.
            </p>
          </div>
        </section>

        {/* THE STARTING POINT */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">The Starting Point</h2>
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                A folder of product photographs and a spreadsheet of SKU names. That is all Jewel Gallery came to us with. No product descriptions. No copywriter. No web developer. No content strategy.
              </p>
            </div>
          </div>
        </section>

        {/* THE AI CATALOGUE ENGINE */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">The AI Catalogue Engine</h2>
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                Claude Vision analysed every product image and identified the jewellery piece — type, material, style, setting, and finish. It then auto-generated brand-toned product titles and descriptions matching Jewel Gallery's brand language exactly. No human copywriter was involved. Hundreds of products, brand-consistent content, in hours.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILT */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Built</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: 'The Full eCommerce Backend',
                  desc: 'Product catalogue, product detail pages, cart, checkout, order management, order fulfilment, inventory tracking, and customer accounts. Fully custom. Platform-agnostic architecture.'
                },
                {
                  title: 'The Intelligence Dashboard',
                  desc: 'A real-time unified view of the entire business — sales, inventory levels, website traffic, add-to-cart rates and conversion data. One screen, not 12 separate reports. The founder could see the entire business at a glance.'
                },
                {
                  title: 'The Extensible Architecture',
                  desc: 'Because the platform is fully custom, any new module is built directly — no third-party Shopify apps, no monthly subscription fees, no waiting for a plugin update. A coupon engine, a loyalty programme, WhatsApp order notifications — all added when needed, on demand.'
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

        {/* THE INNOVATION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">The Innovation</h2>
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                This was first-time AI engineering automation. Claude Vision reading product images, cross-referencing a brand framework, and generating production-ready product content autonomously — without a human copywriter in the loop.
              </p>
            </div>
          </div>
        </section>

        {/* THE TIMELINE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8">The Timeline</h2>
            <div className="max-w-3xl mx-auto bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                From kickoff to a fully operational eCommerce website in weeks. Design, brand language application, AI catalogue build, full backend development, and dashboard — delivered fast.
              </p>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-4xl font-bold text-white text-center mb-6 italic">
                "We handed over photos. They handed back a complete eCommerce business."
              </blockquote>
              <p className="text-gray-400 text-center">— Jewel Gallery Founder</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to build your Smart Commerce site?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Tell us about your product catalogue. We'll show you how to build a complete eCommerce business.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors">
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
