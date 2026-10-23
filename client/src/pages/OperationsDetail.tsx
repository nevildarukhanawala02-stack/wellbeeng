import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight, Cog, TrendingDown, Zap, AlertTriangle, Wrench, Gauge, BarChart3, Users } from 'lucide-react';

export default function OperationsDetail() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'CEO Intel', href: '/intelligence-systems' },
        { label: 'Operational Excellence', href: '/intelligence-systems/operations' }
      ]} />

      <main>
        {/* HERO SECTION WITH OPERATIONS ILLUSTRATION */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Operations Illustration Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/wellbeeng-operations-intelligence.webp"
              alt="Operational Excellence"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Operational <span className="text-cyan-400">Excellence</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Where are you bleeding money and how do you scale efficiently? Get clear answers to optimize operations.
                </p>
                <p className="text-lg text-cyan-400 font-semibold mb-8">
                  Achieve 10-20% Cost Reduction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12">The Operations Challenge</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hidden Cost Leaks</h3>
                <p className="text-gray-300">
                  Inefficiencies are scattered across your operations. You know costs are high, but you cannot pinpoint where the money is going.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Cog size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Process Bottlenecks</h3>
                <p className="text-gray-300">
                  Manual processes, poor coordination, and inefficient workflows slow you down. Scaling is painful and expensive.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Slow Decision Making</h3>
                <p className="text-gray-300">
                  Without real-time operational data, decisions are slow and reactive. You are always fighting fires instead of preventing them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12">How Operational Excellence Works</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Integrates Operational Data</h3>
                  <p className="text-gray-300">
                    We connect to your ERP, supply chain systems, production data, and financial systems. All operational metrics flow into one unified view.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Identifies Cost Drivers</h3>
                  <p className="text-gray-300">
                    AI analyzes your operations to find cost leaks, inefficient processes, bottlenecks, and opportunities for improvement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Provides Actionable Insights</h3>
                  <p className="text-gray-300">
                    Ask questions like: Where are our biggest cost drivers? How can we improve production efficiency? What is slowing down our delivery? Get specific recommendations.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enables Continuous Optimization</h3>
                  <p className="text-gray-300">
                    Real-time monitoring and alerts help you catch issues early, optimize processes continuously, and scale efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTS TO & KEY ANSWERS */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Connects To */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Connects To</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Production systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Supply chain & inventory</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Quality control</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>HR & workforce management</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Procurement & vendors</span>
                  </li>
                </ul>
              </div>

              {/* Key Answers */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key Answers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Money leak identification</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Process bottleneck detection</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Scaling opportunity mapping</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Supplier performance analysis</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Margin improvement areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Capabilities</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* Capability 1 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Cost Leak Detection</h3>
                <p className="text-sm text-gray-300">
                  Identify hidden inefficiencies and cost drivers across your operations. Pinpoint where money is being wasted.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Wrench size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Process Optimization</h3>
                <p className="text-sm text-gray-300">
                  Detect bottlenecks and inefficient workflows. Get recommendations for process improvements and automation.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Gauge size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Scalability Planning</h3>
                <p className="text-sm text-gray-300">
                  Map scaling opportunities and identify how to grow without proportional cost increases. Plan for expansion.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Supplier Analysis</h3>
                <p className="text-sm text-gray-300">
                  Evaluate supplier performance and identify negotiation opportunities. Optimize procurement costs and quality.
                </p>
              </div>

              {/* Capability 5 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Workforce Efficiency</h3>
                <p className="text-sm text-gray-300">
                  Analyze workforce productivity and resource allocation. Identify training needs and optimization opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION TIMELINE & BENEFITS */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">Benefits</div>
                <p className="text-lg text-white font-semibold">EBITDA improvement • Scalability readiness • Higher valuation</p>
              </div>
              <div className="text-center border-l border-r border-cyan-400/20">
                <div className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">Implementation</div>
                <p className="text-lg text-white font-semibold">30-45 days</p>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-orange-400 mb-2 uppercase tracking-wide">Cost Reduction</div>
                <p className="text-lg text-white font-semibold">10-20% Cost Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPECTED OUTCOMES */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Outcomes</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">10-20%</div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Reduction</h3>
                <p className="text-gray-300 text-sm">
                  By eliminating inefficiencies, optimizing processes, and reducing waste across operations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">25-35%</div>
                <h3 className="text-xl font-bold text-white mb-3">Efficiency Improvement</h3>
                <p className="text-gray-300 text-sm">
                  Through process optimization, better resource allocation, and reduced bottlenecks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">2-3x</div>
                <h3 className="text-xl font-bold text-white mb-3">Scalability</h3>
                <p className="text-gray-300 text-sm">
                  Ability to scale operations without proportional cost increases through optimized processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Book a free consultation to explore how Operational Excellence can reduce costs and improve efficiency.
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
