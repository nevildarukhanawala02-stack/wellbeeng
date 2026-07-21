import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, BarChart3, Lock } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function SmartCommerce() {
  useEffect(() => {
    usePageSEO('/smart-commerce');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shopify Gives You a Store. <span className="text-cyan-400">We Give You a Business.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Custom-built eCommerce with AI-generated catalogues, real-time intelligence dashboards, and zero platform dependency. Launch-ready in under two weeks.
            </p>
            <p className="text-lg text-cyan-400 font-semibold mb-8">
              Built for Indian Retail & Jewellery | Full Platform Ownership | Live in 2 Weeks
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors">
                Build My Smart Commerce Site
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Three Pillars of Smart Commerce</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={32} className="text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Launch With a Complete Catalogue — No Copywriter</h3>
                </div>
                <p className="text-gray-300">
                  Product titles, descriptions and SEO content auto-generated from your product images and SKU data using AI vision. Brand tone maintained throughout. No content team needed at launch. Hundreds of products ready in hours.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 size={32} className="text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">One Screen. Your Entire Business.</h3>
                </div>
                <p className="text-gray-300">
                  Sales, inventory, traffic, add-to-carts and conversions in one unified view — not 12 separate Shopify reports. Your CEO sees what is selling, what is not, and what is running low in 10 seconds.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={32} className="text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Your Platform. Your Rules.</h3>
                </div>
                <p className="text-gray-300">
                  Custom backend. No Shopify monthly fees, no app subscriptions, no transaction percentages. Any module — coupons, loyalty programmes, WhatsApp order updates — added directly, without asking permission or paying per feature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JEWEL GALLERY CASE STUDY */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-blue-800/30 rounded-lg p-8 border-l-4 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-2">How We Built a Complete eCommerce Business in 7 Days</h3>
              <p className="text-sm text-gray-400 mb-6">Jewel Gallery Case Study</p>
              
              <div className="space-y-4 text-gray-300 mb-6">
                <div>
                  <p className="font-semibold text-cyan-400 mb-2">Starting Point:</p>
                  <p>A folder of product photographs and a spreadsheet of SKU codes. That is all they had.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-cyan-400 mb-2">AI Catalogue Engine:</p>
                  <p>Claude Vision analysed every product image, identified the jewellery piece (type, material, style, setting, finish) and auto-generated brand-toned titles and descriptions matching Jewel Gallery's brand language exactly. No copywriter. No content team.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-cyan-400 mb-2">Full eCommerce Backend:</p>
                  <p>Product catalogue, product detail pages, cart, checkout, order management, order fulfilment, inventory tracking, and customer accounts. Fully custom. No Shopify.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-cyan-400 mb-2">Intelligence Dashboard:</p>
                  <p>Real-time unified view: sales, inventory levels, website traffic, add-to-cart rates and conversion data. One screen, not 12 separate reports. The founder could see the entire business at a glance.</p>
                </div>
              </div>
              
              <Link href="/case-studies/jewel-gallery-ecommerce">
                <a className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2">
                  Read the full case study
                  <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Smart Commerce vs Shopify</h2>
            
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="border-b border-cyan-400/20">
                    <th className="text-left py-4 px-4 font-bold text-white">Feature</th>
                    <th className="text-left py-4 px-4 font-bold text-white">Shopify</th>
                    <th className="text-left py-4 px-4 font-bold text-cyan-400">Smart Commerce</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Platform cost</td>
                    <td className="py-4 px-4">Rs 2,000-25,000/month + transaction fees</td>
                    <td className="py-4 px-4 text-cyan-400">One-time build. No monthly platform fee.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Product content</td>
                    <td className="py-4 px-4">You write it — or pay a copywriter</td>
                    <td className="py-4 px-4 text-cyan-400">AI-generated from images + SKUs at launch</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Dashboard</td>
                    <td className="py-4 px-4">12+ separate reports to navigate</td>
                    <td className="py-4 px-4 text-cyan-400">One unified intelligence dashboard</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Custom modules</td>
                    <td className="py-4 px-4">Find, buy and maintain a Shopify app</td>
                    <td className="py-4 px-4 text-cyan-400">Built to spec. You own it.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-4 px-4">Data ownership</td>
                    <td className="py-4 px-4">Shopify owns your platform</td>
                    <td className="py-4 px-4 text-cyan-400">You own everything. On your infrastructure.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Scalability</td>
                    <td className="py-4 px-4">Plan tiers limit features and volume</td>
                    <td className="py-4 px-4 text-cyan-400">No ceiling. Scale without re-platforming.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Own Your eCommerce?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Tell us about your product catalogue. We will show you exactly how Smart Commerce works for your business.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors">
                Book Free Smart Commerce Consultation
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
