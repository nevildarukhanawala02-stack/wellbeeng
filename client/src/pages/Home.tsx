import { Link } from 'wouter';
import { useAuth } from '@/_core/hooks/useAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION WITH BRAIN ILLUSTRATION */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Hero Brain Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/OuZQWqQ4Z7I6eYTEZy7i6l-img-1_1771761305000_na1fn_d2VsbGJlZW5nLWhlcm8tYnJhaW4tdjI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L091WlFXcVE0WjdJNmVZVEVaeTdpNmwtaW1nLTFfMTc3MTc2MTMwNTAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MV2hsY204dFluSmhhVzR0ZGpJLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pUJGNo133GznUfz8AFl-4QX6klWphfx2koIoZ6LQRtDGTiv~tkL2QY5COnG6DSMLcX6SBCdT4zz~p4NslexJfh7OBf7aQ9yYBXekOqcGkR8c4Bkii9v39hxgLWHnHm32IxZZNQ~qnPoJOkn~AiZ4klLxLVu7JID-i5fq-0Vaj1~8zu9PW58RwjMcHuzA9R6nV-6wGk3EZ4VtcfSo7sgTPMhRCedE7tMNDk4dV6vdzbJautixFw8ZJAQAo-jInCEI8HSVlcFkmePlGifz07offtC5PT-udmyGKa4O4K~a3Wa~d0wJOtl9Q8EXal9STzgEh1swBxmBzDAzMVlV~lbR8g__"
              alt="AI Brain Illustration"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  AI Systems that Transform How Your Business <span className="text-cyan-400">Thinks, Decides, and Operates</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We build AI automation, intelligent eCommerce, and business intelligence systems for Indian companies ready to grow.
                </p>

                {/* Trust Signals */}
                <div className="space-y-3 mb-8">
                  <span className="text-cyan-400 font-semibold">Built for Indian Businesses Rs 50-500 Cr | Results in 30-90 Days | Works With Your Existing Systems</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/consultation">
                    <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                      Get Started Today
                      <ArrowRight size={20} />
                    </a>
                  </Link>
                  <Link href="/how-it-works">
                    <a className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                      See How It Works
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THREE PRODUCTS SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Three Ways We Transform Your Business</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Start anywhere. Every product delivers results independently — and works even better together.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Automation */}
              <Link href="/ai-automation">
                <a className="group cursor-pointer">
                  <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-orange-500 hover:border-orange-400 transition-all hover:shadow-lg">
                    <div className="inline-block bg-orange-500/20 text-orange-500 px-3 py-1 rounded text-sm font-semibold mb-4">Most Popular — Fast ROI</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">You Have a Problem. We Build the AI That Solves It.</h3>
                    <p className="text-gray-300 mb-6">
                      Whether you need one person's work automated or an entire process eliminated — we identify the pain point, engineer the automation, and deliver results. In weeks.
                    </p>
                    <div className="text-sm text-gray-400 mb-6 p-3 bg-orange-500/10 rounded">
                      <strong>Proof:</strong> 20 Laser Plasma Cutters connected. One source of truth. RFQ to delivery fully automated.
                    </div>
                    <div className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore AI Automation <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </Link>

              {/* Smart Commerce */}
              <Link href="/smart-commerce">
                <a className="group cursor-pointer">
                  <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-cyan-400 hover:border-cyan-300 transition-all hover:shadow-lg">
                    <div className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded text-sm font-semibold mb-4">Full eCommerce Build</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Shopify Gives You a Store. We Give You a Business.</h3>
                    <p className="text-gray-300 mb-6">
                      Custom-built eCommerce with AI-generated catalogues, intelligence dashboards, and zero platform lock-in. Launch-ready in under two weeks.
                    </p>
                    <div className="text-sm text-gray-400 mb-6 p-3 bg-cyan-400/10 rounded">
                      <strong>Proof:</strong> Jewel Gallery — product images + SKU names only. Full eCommerce site live in 7 days.
                    </div>
                    <div className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Smart Commerce <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </Link>

              {/* CEO Intel */}
              <Link href="/intelligence-systems">
                <a className="group cursor-pointer">
                  <div className="bg-blue-800/30 rounded-lg p-8 border-l-4 border-slate-600 hover:border-slate-500 transition-all hover:shadow-lg">
                    <div className="inline-block bg-slate-600/20 text-slate-400 px-3 py-1 rounded text-sm font-semibold mb-4">Strategic Intelligence</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-slate-300 transition-colors">The Intelligence System Your Business Has Always Needed.</h3>
                    <p className="text-gray-300 mb-6">
                      Revenue. Operations. Market. Three AI systems that turn your data into decisions in plain English — so you can act immediately.
                    </p>
                    <div className="text-sm text-gray-400 mb-6 p-3 bg-slate-600/10 rounded">
                      <strong>Proof:</strong> 15-25% Revenue Growth | 30-40% Churn Reduction | 3-5x Sales Productivity
                    </div>
                    <div className="text-slate-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore CEO Intel <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* WELLBEENG DIFFERENCE SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Why Wellbeeng?</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              We're not a software vendor. We're your partner in transformation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">One Partner</h3>
                <p className="text-gray-300 mb-4">
                  You don't juggle consultants, vendors, and contractors. We own your transformation end-to-end. From strategy to execution to ongoing optimization.
                </p>
                <p className="text-cyan-400 font-semibold text-sm">One team. One vision. One accountability.</p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">Built for Indian Businesses</h3>
                <p className="text-gray-300 mb-4">
                  We understand Indian business context—from Rs 50 Cr to Rs 500 Cr companies. We speak your language, understand your challenges, and build solutions that fit your reality.
                </p>
                <p className="text-cyan-400 font-semibold text-sm">No one-size-fits-all playbooks.</p>
              </div>

              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-4">Results in 30-90 Days</h3>
                <p className="text-gray-300 mb-4">
                  No long, drawn-out implementations. From discovery to go-live in weeks. You see value fast, not months from now.
                </p>
                <p className="text-cyan-400 font-semibold text-sm">Fast execution. Real ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES STRIP */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Real Results. Real Companies.</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              From manufacturing to jewellery to B2B services — here's how we've transformed businesses like yours.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              {/* Manufacturing Case Study */}
              <Link href="/case-studies/manufacturing-machine-optimization">
                <a className="group cursor-pointer">
                  <div className="bg-blue-800/30 rounded-lg p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">Manufacturing</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold">AI Automation</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      20 Machines. One Dashboard. Complete Visibility.
                    </h3>
                    <p className="text-gray-300 mb-4">
                      20 Laser Plasma Cutters connected. One dashboard. Revenue and efficiency increased from day one.
                    </p>
                    <div className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </Link>

              {/* Jewel Gallery Case Study */}
              <Link href="/case-studies/jewel-gallery-ecommerce">
                <a className="group cursor-pointer">
                  <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">eCommerce</span>
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold">Smart Commerce</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      Product Data In. Full eCommerce Business Out.
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Product images and SKUs transform into a complete, launch-ready eCommerce platform—fast.
                    </p>
                    <div className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={16} />
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/case-studies">
                <a className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View All Case Studies <ArrowRight size={18} />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* THE PROBLEM SECTION WITH CIRCUIT PATTERN */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Circuit Pattern Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/y8X7PS2QUL0Zi4X3FOtnjP-img-1_1771760146000_na1fn_d2VsbGJlZW5nLWNpcmN1aXQtcGF0dGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L3k4WDdQUzJRVUwwWmk0WDNGT3RualAtaW1nLTFfMTc3MTc2MDE0NjAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MV05wY21OMWFYUXRjR0YwZEdWeWJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Uxaqd-5IEFTBJSMgNNCSWaq~jFHVkWeLN39IxlQvUoPr4WJmgQc~CPMPQM9NqlmoLUPS~e56C81ayGYuhDIAv-DUXLTsr-yNmIq7aW6EPWJNWjI~s4tQa9-KKjLSukUQOw5dkEx98NOqyU3~c5EhQbMHhxo9kESGqm4Rs3s3FY-UbcjDbICk4pM570soKvANaagLQeUvxRss3v9-0NV8LpoNy6pqtomG5phoCilQCJ-d2e7uSLxYMPXXQ3NMK~HVdmVHiGs2zHOu6F~S24Ai7gDuWoMUwG4-ioBwl4XVS2zkiLTwS3tKz9GPw8TUc-HjReYt7RafMobhm4PpkbBgJQ__"
              alt="Circuit Pattern"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/80"></div>
          </div>

          {/* Problem Content */}
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">The Opportunity Hidden in Your Data</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Most Indian businesses are sitting on goldmines of data but can't access the insights fast enough to act on them.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Scattered Across Systems</h3>
                <p className="text-gray-300">
                  Your data lives in CRM, ERP, spreadsheets, and reports—everywhere and nowhere. Critical patterns stay hidden in silos.
                </p>
              </div>

              <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-white mb-3">Decisions Take Too Long</h3>
                <p className="text-gray-300">
                  By the time you get the report, analyze it, and decide, the opportunity has passed. Your competitors are moving faster.
                </p>
              </div>

              <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Opportunities Slip Away</h3>
                <p className="text-gray-300">
                  Customer churn, operational inefficiencies, market shifts—you discover them too late. You're looking backward through reports.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-400/20 to-orange-500/20 border border-cyan-400/30 rounded-lg p-8 text-center backdrop-blur-sm">
              <p className="text-2xl text-white italic mb-2">
                "We have all this data, but we're still flying blind."
              </p>
              <p className="text-cyan-400 font-semibold">— Every CEO we talk to</p>
            </div>
          </div>
        </section>

        {/* SOLUTION COMPARISON SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">There's a Better Way</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              You ask a question and get an answer—with recommendations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-900/30 rounded-lg p-8 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Traditional Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <p className="font-semibold text-white">Need data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <p className="font-semibold text-white">Ask analyst</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <p className="font-semibold text-white">Wait days/weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <p className="font-semibold text-white">Get report</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <p className="font-semibold text-white">Interpret data</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/30 rounded">
                  <p className="text-orange-400 font-semibold text-sm">RESULT: Days to Weeks</p>
                  <p className="text-gray-400 text-sm">Slow, reactive, bottleneck</p>
                </div>
              </div>

              <div className="bg-blue-900/30 rounded-lg p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Wellbeeng Intelligence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-400/20 text-cyan-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <p className="font-semibold text-white">Ask question in English</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-400/20 text-cyan-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <p className="font-semibold text-white">AI analyzes all sources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-400/20 text-cyan-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <p className="font-semibold text-white">Get answer + action</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-cyan-400/10 border border-cyan-400/30 rounded">
                  <p className="text-cyan-400 font-semibold text-sm">RESULT: Seconds</p>
                  <p className="text-gray-400 text-sm">Fast, proactive, always on</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">AI-Powered Intelligence Systems</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              That work with your existing data, delivering insights in plain English—so you can act immediately.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-800/20 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                <div className="text-5xl font-bold text-cyan-400 mb-4">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Connect Your Systems</h3>
                <p className="text-gray-300">
                  We integrate with your existing CRM, ERP, and data sources. No disruption, no replacement—just connection.
                </p>
              </div>

              <div className="bg-blue-800/20 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                <div className="text-5xl font-bold text-cyan-400 mb-4">2</div>
                <h3 className="text-xl font-bold text-white mb-3">AI Analyzes Continuously</h3>
                <p className="text-gray-300">
                  Our intelligence systems monitor your data 24/7, spotting patterns, trends, and opportunities as they emerge.
                </p>
              </div>

              <div className="bg-blue-800/20 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                <div className="text-5xl font-bold text-cyan-400 mb-4">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Get Actionable Insights</h3>
                <p className="text-gray-300">
                  Receive clear, plain-English recommendations you can act on immediately—no data science degree required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTELLIGENCE SYSTEMS SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Three Intelligence Systems</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Revenue Intelligence */}
              <Link href="/intelligence-systems/revenue">
                <a className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="aspect-square overflow-hidden bg-slate-900 relative">
                      <img
                        src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/QdNM7CcwKdsrUtitkXPdkz-img-1_1771760197000_na1fn_d2VsbGJlZW5nLXJldmVudWUtaW50ZWxsaWdlbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L1FkTk03Q2N3S2RzclV0aXRrWFBka3otaW1nLTFfMTc3MTc2MDE5NzAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MWEpsZG1WdWRXVXRhVzUwWld4c2FXZGxibU5sLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RE3AvMOMGYRZUEfhnI7LBzltBfiTlwRBNyvxbtuPBIzXiv0MGkV2hyP5iMU1i6AGFsG-s6~6bOkEtT6ndHLEYa8MGJd1cuEqF1dAhjA~KvocvMvlF6~4TETlKRJ6zKJBNxs1~Seq36C5KjzWbC~rF7EPDlVWJyrRHB0~kXaUPHtlfCuw9vddUHwbfHKL9WMUgYuSdHHl~dGdlJNH6H62jcLX4vfyaGPvzS4bYdpE3Gurkd2bc~VQ3R43LAaazizJy~aPG6arBlhzK07VqMr6eZSOf9a9CRM8dLW4MiHpvfkaChvQskg23dtXmU3dod4Tb6f1LirO-WxBvTbuGW59sw__"
                        alt="Revenue Intelligence"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Revenue Growth</h3>
                      <p className="text-gray-400 text-sm">
                        Where is your revenue really coming from and where should you focus?
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              {/* Operational Excellence */}
              <Link href="/intelligence-systems/operations">
                <a className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="aspect-square overflow-hidden bg-slate-900 relative">
                      <img
                        src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/QdNM7CcwKdsrUtitkXPdkz-img-2_1771760201000_na1fn_d2VsbGJlZW5nLW9wZXJhdGlvbnMtaW50ZWxsaWdlbmNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L1FkTk03Q2N3S2RzclV0aXRrWFBka3otaW1nLTJfMTc3MTc2MDIwMTAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MVzl3WlhKaGRHbHZibk10YVc1MFpXeHNhV2RsYm1ObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eNoZZgS9RlXtrFk-2yVBSKyhINUM-O-WT91nOt2udYXwLKeq5kGJQLF8BHRsRLjzDvVViydgxnBl-4kKUWdh1v2zuK72ycKuRxlg9oi4dfVn3tSlU~OShDsfRRo1MBkmFqataNshB~PPh1IBYYu44~-5Ek6-mT-0Z3AhLYkE4r1dpeSG~jAvtAfVgCgV9bTQCk1sPf5dFo4mk4cOSF23mCT2SFgH1FopJP0xLkahjxQM9fYMcJ4ZzO0OZs8sfVTyq~AlIcnyT~OAzmHu-jyVDLrrLXWEC30yf0Tmvn7wy-5uVdnM~5mEszNFkivYoHerIG1qYLgf8qgk6GpyYtY8Sw__"
                        alt="Operational Excellence"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Operational Excellence</h3>
                      <p className="text-gray-400 text-sm">
                        Where are you bleeding money and how do you scale efficiently?
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>

              {/* Market & Competitive */}
              <Link href="/intelligence-systems/market">
                <a className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/20 rounded-lg overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="aspect-square overflow-hidden bg-slate-900 relative">
                      <img
                        src="https://private-us-east-1.manuscdn.com/sessionFile/f3NHbzkH13pD9rRXYaG9yX/sandbox/QdNM7CcwKdsrUtitkXPdkz-img-3_1771760204000_na1fn_d2VsbGJlZW5nLW1hcmtldC1pbnRlbGxpZ2VuY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZjNOSGJ6a0gxM3BEOXJSWFlhRzl5WC9zYW5kYm94L1FkTk03Q2N3S2RzclV0aXRrWFBka3otaW1nLTNfMTc3MTc2MDIwNDAwMF9uYTFmbl9kMlZzYkdKbFpXNW5MVzFoY210bGRDMXBiblJsYkd4cFoyVnVZMlUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uPwuBCzJ8bsSzHbINAIUhJTFOvXvjDYnVOwaf9Fsv0VxAkEYHHGw~wKiqaNeFp9IrbX7zScmqRCZK~sZty9JJBLzO23Gmx6zdzKE-nYfr-ZjXLbbkJJjq2e3JtKID287Q4r5gid2zas7UHEwaBhTWx5vLKmwjVWQh7JFbMpTupWHyB9DDc7YbvpHez20RsWo7BxoX9L7h-LWsR4xKkzQQ8ERFEtu3lC3bLq~UEiV~I8ixPevk077lwAwOianpXTolGprnN6DnK-A0MG-TeIl34M3m4p1tfr2HEGqfRjFM7cWaYDO3q0L1my2mo4rY6ip6w7fzEpxxUeNRnW-01XvxA__"
                        alt="Market & Competitive Intelligence"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Market & Competitive</h3>
                      <p className="text-gray-400 text-sm">
                        How do you stay ahead of competition and find new opportunities?
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join Indian businesses already making smarter, faster decisions with AI-powered intelligence systems.
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
