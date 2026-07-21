import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { usePageSEO } from '@/lib/seo';

export default function AIAutomationCatalogue() {
  useEffect(() => {
    usePageSEO('/ai-automation/catalogue-automation');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'Products', href: '/' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'Catalogue Automation', href: '/ai-automation/catalogue-automation' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Product Image Is All You Need. <span className="text-cyan-400">We Do the Rest.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI reads your product photographs, understands what it sees, and writes brand-accurate titles, descriptions and SEO metadata — for every single product. In hours, not weeks.
            </p>
            <p className="text-lg text-orange-400 font-semibold mb-8">
              Built for Indian Retail & Jewellery | Hundreds of Products in Hours | No Copywriter Needed
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Automate My Catalogue
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* COST-OF-INACTION */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Problem Every Retail & Jewellery Business Faces</h2>
              <p className="text-lg text-gray-300">
                You have hundreds of products. Each needs a unique, brand-toned description. A copywriter would take weeks and cost Rs 2-5 lakhs. Your team writing descriptions manually? That's Rs 5-10 lakhs in salary cost, and the descriptions are inconsistent. AI solves this in hours.
              </p>
            </div>
          </div>
        </section>

        {/* PROOF BLOCK */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Real Example: Jewel Gallery</h3>
              <p className="text-gray-300 mb-4">
                Jewel Gallery gave us a folder of product photographs and a spreadsheet of SKU codes. Our AI analysed every image, identified the jewellery piece (type, material, style, setting, finish) and generated brand-toned product descriptions matching their exact brand language.
              </p>
              <p className="text-gray-300 font-semibold text-cyan-400 mb-4">
                Hundreds of products. No copywriter. Hours, not weeks.
              </p>
              <Link href="/case-studies/jewel-gallery-ecommerce">
                <a className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2">
                  Read the full case study
                  <ArrowRight size={16} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT WE GENERATE */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Generate From Your Product Images</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Product Titles & Descriptions',
                  desc: 'Brand-toned, SEO-optimized titles and descriptions for every product. Consistent voice across your entire catalogue.'
                },
                {
                  title: 'SEO Metadata',
                  desc: 'Meta titles, meta descriptions, and keywords generated automatically. Every product ranked for search.'
                },
                {
                  title: 'Attribute Extraction',
                  desc: 'AI reads images and extracts: material, color, size, style, finish, weight. Automatically populates your product attributes.'
                },
                {
                  title: 'Multi-Language Content',
                  desc: 'Same descriptions in Hindi, English, or any regional language. Reach more customers.'
                },
                {
                  title: 'Category Page Copy',
                  desc: 'AI generates category descriptions that tie products together and improve conversion.'
                },
                {
                  title: 'Bulk Processing',
                  desc: 'Upload 100 images. Get 100 complete product listings in hours. No manual work.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPECTED OUTCOMES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Outcomes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  metric: '100-500 products',
                  label: 'Described in 24-48 hours'
                },
                {
                  metric: '100%',
                  label: 'Consistent brand tone across catalogue'
                },
                {
                  metric: 'Rs 2-5 lakhs',
                  label: 'Saved vs hiring a copywriter'
                },
                {
                  metric: '1-2 weeks',
                  label: 'Time from upload to live catalogue'
                }
              ].map((outcome, idx) => (
                <div key={idx} className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{outcome.metric}</div>
                  <p className="text-gray-300 font-semibold">{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE BUILD IT */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Built for Your Brand. Not Generic Templates.</h2>

            <div className="space-y-6">
              {[
                {
                  step: 'Step 1',
                  title: 'Brand Training',
                  desc: 'You provide 5-10 sample product descriptions in your brand voice. AI learns your exact tone, vocabulary, and style.'
                },
                {
                  step: 'Step 2',
                  title: 'Image Upload & Analysis',
                  desc: 'Upload your product images and SKU data. AI analyzes every image — identifying product type, material, color, style, finish.'
                },
                {
                  step: 'Step 3',
                  title: 'Content Generation',
                  desc: 'AI generates titles, descriptions, SEO metadata, and attributes in your brand voice. All automatically.'
                },
                {
                  step: 'Step 4',
                  title: 'Review & Deploy',
                  desc: 'You review the generated content (usually 95%+ ready to go). Make edits if needed. Deploy to your eCommerce platform.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-800/20 rounded-lg p-6 border border-cyan-400/20">
                  <div className="text-orange-500 font-bold text-sm mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">How Many Products Are Waiting to Be Described?</h2>
            <p className="text-xl text-gray-300 mb-8">
              That number is your starting point. Book a 30-minute call — bring 5-10 sample product descriptions in your brand voice, we'll show you exactly how we'd generate the rest.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Automate My Catalogue
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
