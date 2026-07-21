import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Factory, Package, Store, Briefcase } from 'lucide-react';

export default function Solutions() {
  const industries = [
    {
      title: 'Manufacturing',
      icon: Factory,
      description: 'Production optimization & supply chain intelligence',
      useCases: [
        'Production intelligence and quality tracking',
        'Supply chain optimization',
        'Inventory management insights',
        'Demand forecasting',
        'Supplier performance monitoring'
      ],
      link: '/solutions/manufacturing'
    },
    {
      title: 'FMCG & Consumer Brands',
      icon: Package,
      description: 'Demand forecasting & distribution intelligence',
      useCases: [
        'Revenue analytics by product/SKU',
        'Channel performance tracking',
        'Customer segmentation insights',
        'Distribution optimization',
        'Brand health monitoring'
      ],
      link: '/solutions/fmcg'
    },
    {
      title: 'Retail & QSR',
      icon: Store,
      description: 'Customer behavior & inventory intelligence',
      useCases: [
        'Customer insights and behavior patterns',
        'Inventory optimization by location',
        'Store/outlet performance analysis',
        'Menu/product optimization',
        'Demand forecasting and planning'
      ],
      link: '/solutions/retail'
    },
    {
      title: 'B2B Services',
      icon: Briefcase,
      description: 'Client intelligence & service optimization',
      useCases: [
        'Client portfolio intelligence',
        'Service delivery optimization',
        'Team performance tracking',
        'Project profitability analysis',
        'Client retention and upsell insights'
      ],
      link: '/solutions/b2b-services'
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
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              One Intelligence Platform. Every B2B Industry. Our systems adapt to your sector while delivering tailored insights.
            </p>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div key={index} className="bg-blue-800/40 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/30 transition-colors">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                        <p className="text-cyan-400 font-semibold text-sm">{industry.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3 text-sm">Key Use Cases:</h4>
                      <ul className="space-y-2">
                        {industry.useCases.map((useCase, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={industry.link}>
                      <a className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1">
                        See Solutions <ArrowRight size={16} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Approach</h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed mb-6">
                The intelligence principles are universal, but we customize the insights and questions to your specific industry and business model. Whether you're a ₹50 Cr manufacturing company or a ₹150 Cr retail chain, we adapt to your sector's unique challenges.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h4 className="font-semibold text-white mb-2">Industry Expertise</h4>
                  <p className="text-gray-300 text-sm">
                    Deep understanding of your sector's specific challenges, metrics, and success factors.
                  </p>
                </div>

                <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h4 className="font-semibold text-white mb-2">Customized Models</h4>
                  <p className="text-gray-300 text-sm">
                    AI models trained on your industry data and terminology for maximum relevance.
                  </p>
                </div>

                <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h4 className="font-semibold text-white mb-2">Proven Results</h4>
                  <p className="text-gray-300 text-sm">
                    Track record of delivering measurable impact across your industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Find Your Industry Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Explore how our intelligence systems can transform your specific industry and business model.
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
