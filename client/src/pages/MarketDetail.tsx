import { Link } from 'wouter';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight, Radar, TrendingUp, AlertTriangle, Eye, Target, Zap, BarChart3, Compass } from 'lucide-react';

export default function MarketDetail() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'CEO Intel', href: '/intelligence-systems' },
        { label: 'Market & Competitive', href: '/intelligence-systems/market' }
      ]} />

      <main>
        {/* HERO SECTION WITH MARKET ILLUSTRATION */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Market Illustration Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/QdNM7CcwKdsrUtitkXPdkz-img-3_1771760204000_na1fn_d2VsbGJlZW5nLW1hcmtldC1pbnRlbGxpZ2VuY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L1FkTk03Q2N3S2RzclV0aXRrWFBka3otaW1nLTNfMTc3MTc2MDIwNDAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MVzFoY210bGRDMXBiblJsYkd4cFoyVnVZMlUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uPwuBCzJ8bsSzHbINAIUhJTFOvXvjDYnVOwaf9Fsv0VxAkEYHHGw~wKiqaNeFp9IrbX7zScmqRCZK~sZty9JJBLzO23Gmx6zdzKE-nYfr-ZjXLbbkJJjq2e3JtKID287Q4r5gid2zas7UHEwaBhTWx5vLKmwjVWQh7JFbMpTupWHyB9DDc7YbvpHez20RsWo7BxoX9L7h-LWsR4xKkzQQ8ERFEtu3lC3bLq~UEiV~I8ixPevk077lwAwOianpXTolGprnN6DnK-A0MG-TeIl34M3m4p1tfr2HEGqfRjFM7cWaYDO3q0L1my2mo4rY6ip6w7fzEpxxUeNRnW-01XvxA__"
              alt="Market & Competitive Intelligence"
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
                  Market & <span className="text-cyan-400">Competitive</span> Intelligence
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  How do you stay ahead of competition and find new opportunities? Get strategic insights to lead your market.
                </p>
                <p className="text-lg text-cyan-400 font-semibold mb-8">
                  Gain Strategic Competitive Advantage
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12">The Market Challenge</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Blind Spots</h3>
                <p className="text-gray-300">
                  You do not see competitive threats until they hit your market share. Market shifts catch you off-guard.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Radar size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Missed Opportunities</h3>
                <p className="text-gray-300">
                  New market segments, customer needs, and growth opportunities go unnoticed while competitors capitalize on them.
                </p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reactive Strategy</h3>
                <p className="text-gray-300">
                  Without market intelligence, your strategy is reactive. You respond to changes instead of anticipating them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12">How Market Intelligence Works</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Aggregates Market Data</h3>
                  <p className="text-gray-300">
                    We collect and analyze data from your industry, competitors, market trends, customer behavior, and external signals.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Analyzes Competitive Landscape</h3>
                  <p className="text-gray-300">
                    AI identifies competitor moves, market shifts, emerging threats, and new opportunities in your industry.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Provides Strategic Insights</h3>
                  <p className="text-gray-300">
                    Ask: What are competitors doing? Where is the market heading? What new segments are emerging? What threats should we watch? Get strategic answers.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enables Proactive Strategy</h3>
                  <p className="text-gray-300">
                    Early warnings on threats, clear visibility into opportunities, and data-driven strategic recommendations.
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
                    <span>Market data sources</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Competitor monitoring</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Customer sentiment platforms</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Industry trends & news</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Regulatory tracking</span>
                  </li>
                </ul>
              </div>

              {/* Key Answers */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key Answers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Competitor activity monitoring</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Market direction prediction</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Opportunity identification</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Threat early warning</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span>Strategic positioning insights</span>
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
                  <Eye size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Competitor Monitoring</h3>
                <p className="text-sm text-gray-300">
                  Track competitor moves, pricing changes, product launches, and market positioning in real-time.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Compass size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Market Direction Prediction</h3>
                <p className="text-sm text-gray-300">
                  Predict market trends and shifts before they happen. Stay ahead of industry changes and disruptions.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Opportunity Identification</h3>
                <p className="text-sm text-gray-300">
                  Discover new market segments, customer needs, and growth opportunities before competitors do.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Threat Early Warning</h3>
                <p className="text-sm text-gray-300">
                  Get early alerts on competitive threats, market disruptions, and regulatory changes affecting your business.
                </p>
              </div>

              {/* Capability 5 */}
              <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Strategic Positioning</h3>
                <p className="text-sm text-gray-300">
                  Understand your competitive position and develop data-driven strategies to gain market leadership.
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
                <p className="text-lg text-white font-semibold">First-mover opportunities • Risk mitigation • Market leadership</p>
              </div>
              <div className="text-center border-l border-r border-cyan-400/20">
                <div className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">Implementation</div>
                <p className="text-lg text-white font-semibold">30-45 days</p>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-orange-400 mb-2 uppercase tracking-wide">Strategic Advantage</div>
                <p className="text-lg text-white font-semibold">Strategic Edge</p>
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
                <div className="text-4xl font-bold text-orange-400 mb-2">6-12 mo</div>
                <h3 className="text-xl font-bold text-white mb-3">Early Warning</h3>
                <p className="text-gray-300 text-sm">
                  See competitive threats and market shifts 6-12 months before they impact your business.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">3-5</div>
                <h3 className="text-xl font-bold text-white mb-3">New Opportunities</h3>
                <p className="text-gray-300 text-sm">
                  Identify 3-5 new market opportunities or customer segments annually that competitors miss.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-400/10 to-blue-800/20 rounded-lg p-8 border border-cyan-400/40">
                <div className="text-4xl font-bold text-orange-400 mb-2">20-30%</div>
                <h3 className="text-xl font-bold text-white mb-3">Strategic Advantage</h3>
                <p className="text-gray-300 text-sm">
                  Gain measurable competitive advantage through proactive market positioning and strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Book a free consultation to explore how Market Intelligence can give you competitive advantage.
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
