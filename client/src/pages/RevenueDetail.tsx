import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Users, Target, AlertCircle, BarChart3 } from 'lucide-react';

export default function RevenueDetail() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'CEO Intel', href: '/intelligence-systems' },
        { label: 'Revenue Intelligence', href: '/intelligence-systems/revenue' }
      ]} />

      <main>
        {/* HERO SECTION WITH REVENUE ILLUSTRATION */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Revenue Illustration Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/QdNM7CcwKdsrUtitkXPdkz-img-1_1771760197000_na1fn_d2VsbGJlZW5nLXJldmVudWUtaW50ZWxsaWdlbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L1FkTk03Q2N3S2RzclV0aXRrWFBka3otaW1nLTFfMTc3MTc2MDE5NzAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MWEpsZG1WdWRXVXRhVzUwWld4c2FXZGxibU5sLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RE3AvMOMGYRZUEfhnI7LBzltBfiTlwRBNyvxbtuPBIzXiv0MGkV2hyP5iMU1i6AGFsG-s6~6bOkEtT6ndHLEYa8MGJd1cuEqF1dAhjA~KvocvMvlF6~4TETlKRJ6zKJBNxs1~Seq36C5KjzWbC~rF7EPDlVWJyrRHB0~kXaUPHtlfCuw9vddUHwbfHKL9WMUgYuSdHHl~dGdlJNH6H62jcLX4vfyaGPvzS4bYdpE3Gurkd2bc~VQ3R43LAaazizJy~aPG6arBlhzK07VqMr6eZSOf9a9CRM8dLW4MiHpvfkaChvQskg23dtXmU3dod4Tb6f1LirO-WxBvTbuGW59sw__"
              alt="Revenue Intelligence"
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
                  Revenue <span className="text-cyan-400">Intelligence</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Where is your revenue really coming from and where should you focus? Get clear answers to drive growth.
                </p>
                <p className="text-lg text-cyan-400 font-semibold mb-8">
                  Unlock 15-25% Revenue Growth Potential
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12">The Revenue Challenge</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hidden Churn Risk</h3>
                <p className="text-gray-300">
                  You do not see customer churn coming until revenue drops. By then, it is too late to save the relationship.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Unfocused Sales Effort</h3>
                <p className="text-gray-300">
                  Your sales team spreads effort across all customers equally, missing high-value opportunities and wasting time on low-potential leads.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Slow Growth</h3>
                <p className="text-gray-300">
                  Without clear visibility into revenue drivers, you cannot strategically accelerate growth. You are guessing instead of optimizing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12">How Revenue Intelligence Works</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Connects Your Revenue Data</h3>
                  <p className="text-gray-300">
                    We integrate with your CRM, financial systems, and customer databases. All your revenue data flows into one intelligent system.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Analyzes Revenue Patterns</h3>
                  <p className="text-gray-300">
                    AI identifies which customers drive the most revenue, which are at risk of churning, which products are most profitable, and where growth opportunities exist.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Answers Your Questions</h3>
                  <p className="text-gray-300">
                    Ask in plain English: Which customers are most likely to churn? What is our highest-margin product? Where should we focus sales effort? Get answers instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Drives Action</h3>
                  <p className="text-gray-300">
                    Get proactive alerts when churn risk rises, recommendations on where to focus sales effort, and insights on product mix optimization.
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
                    <span>CRM & sales pipelines</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Customer databases</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Financial systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Sales reports & history</span>
                  </li>
                </ul>
              </div>

              {/* Key Answers */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key Answers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Customer churn risk prediction</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Sales focus optimization</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Product/SKU prioritization</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Revenue driver analysis</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Team performance insights</span>
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
                  <AlertCircle size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Churn Risk Prediction</h3>
                <p className="text-sm text-gray-300">
                  Identify customers likely to leave before revenue drops. Enable proactive retention campaigns.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Sales Focus Optimization</h3>
                <p className="text-sm text-gray-300">
                  Allocate sales team effort to high-value opportunities. Reduce time wasted on low-potential leads.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Product Prioritization</h3>
                <p className="text-sm text-gray-300">
                  Show which products drive most revenue. Identify underperforming SKUs and guide decisions.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Revenue Driver Analysis</h3>
                <p className="text-sm text-gray-300">
                  Identify patterns in successful deals. Enable strategic revenue acceleration and growth.
                </p>
              </div>

              {/* Capability 5 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Team Performance Insights</h3>
                <p className="text-sm text-gray-300">
                  Show individual and team productivity. Enable performance-based incentives and training.
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
                <p className="text-lg text-white font-semibold">Better allocation • Reduced churn • Faster decisions</p>
              </div>
              <div className="text-center border-l border-r border-cyan-400/20">
                <div className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">Implementation</div>
                <p className="text-lg text-white font-semibold">30-45 days</p>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-orange-400 mb-2 uppercase tracking-wide">Growth Potential</div>
                <p className="text-lg text-white font-semibold">15-25% Revenue Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPECTED OUTCOMES */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Outcomes</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">15-25%</div>
                <h3 className="text-xl font-bold text-white mb-3">Revenue Growth</h3>
                <p className="text-gray-300 text-sm">
                  Through better customer focus, reduced churn, and optimized sales effort allocation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">30-40%</div>
                <h3 className="text-xl font-bold text-white mb-3">Churn Reduction</h3>
                <p className="text-gray-300 text-sm">
                  By identifying at-risk customers early and taking proactive retention actions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">3-5x</div>
                <h3 className="text-xl font-bold text-white mb-3">Sales Productivity</h3>
                <p className="text-gray-300 text-sm">
                  Through focused effort on highest-value opportunities and better customer insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Revenue?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Book a free consultation to explore how Revenue Intelligence can drive growth for your business.
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
