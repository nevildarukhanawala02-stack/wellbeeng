import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Breadcrumb items={[
        { label: 'About', href: '/about' }
      ]} />

      <main>
        {/* HERO SECTION */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              20 years of building businesses.<br />
              <span className="text-orange-500">One problem I kept seeing.</span>
            </h1>
            <p className="text-xl text-gray-300">
              Wellbeeng wasn't built because I ran a ₹100 crore company. It was built because across 20 years and 50+ client engagements — I kept seeing the same problem in every boardroom. And nobody had solved it.
            </p>
          </div>
        </section>

        {/* RAJESH SECTION */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT - PHOTO */}
              <div>
                <div className="rounded-lg overflow-hidden h-96 mb-6">
                  <img src="/images/rajesh_sharma_professional_467339ed_661d89b4.webp" alt="Rajesh Kaushal" className="w-full h-full object-cover" />
                </div>
                
                {/* STATS CARDS */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-800/30 border border-orange-500/30 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-orange-500">30+</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Years Experience</p>
                  </div>
                  <div className="bg-blue-800/30 border border-cyan-400/30 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-cyan-400">100+</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">B2B Companies</p>
                  </div>
                  <div className="bg-blue-800/30 border border-slate-400/30 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-slate-400">20+</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Years Custom Dev</p>
                  </div>
                  <div className="bg-blue-800/30 border border-orange-500/30 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-orange-500">3</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">Sectors: MFG, Retail, Services</p>
                  </div>
                </div>
              </div>

              {/* RIGHT - BIO & DETAILS */}
              <div>
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">FOUNDER & CEO</p>
                <h2 className="text-4xl font-bold text-white mb-2">Rajesh Kaushal</h2>
                <p className="text-lg font-semibold text-orange-500 mb-6">Technology Partner & Enterprise Systems Architect</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">The Engineer Who Makes It Work</h3>
                    <p className="text-gray-300 leading-relaxed">
                      30+ years building enterprise digital solutions and leading technology teams across diverse industries.
                    </p>
                  </div>

                  <div className="bg-blue-800/20 border-l-4 border-cyan-400 p-4 rounded">
                    <p className="text-gray-300 leading-relaxed">
                      Rajesh brings three decades of hands-on enterprise technology experience to CEO Intel. He has spent his career designing and delivering custom digital solutions for B2B companies across manufacturing, retail, and services — the exact sectors where CEO Intel operates.
                    </p>
                  </div>

                  <div className="bg-blue-800/20 border-l-4 border-orange-500 p-4 rounded">
                    <p className="text-gray-300 leading-relaxed">
                      His deep expertise in CRM, ERP, and enterprise system integration means he understands the real-world complexity of connecting disparate business data. When CEO Intel integrates with a client's existing systems, it is Rajesh's architecture that ensures the connection is clean, reliable, and built to last.
                    </p>
                  </div>

                  <div className="bg-blue-800/20 border-l-4 border-slate-400 p-4 rounded">
                    <p className="text-gray-300 leading-relaxed">
                      This is not theoretical knowledge. Rajesh has led successful digital transformation projects for over 100 B2B companies — navigating legacy systems, inconsistent data structures, and the operational realities that make enterprise integration genuinely hard. That experience is what makes CEO Intel's implementation process different from every other AI platform that assumes clean data and cooperative systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RAJESH CREDENTIALS SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 text-center">Career & Credentials</p>
            <div className="space-y-6">
              {/* Enterprise Solutions Architect */}
              <div className="bg-blue-800/30 border-l-4 border-orange-500 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Enterprise Solutions Architect</h3>
                  <span className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded">30+ years</span>
                </div>
                <p className="text-gray-300">End-to-end custom development for B2B companies across manufacturing, retail, and services. Delivered 20+ years of complex, production-grade digital systems.</p>
              </div>

              {/* CRM & ERP Specialist */}
              <div className="bg-blue-800/30 border-l-4 border-cyan-400 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">CRM & ERP Specialist</h3>
                  <span className="bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded">Enterprise Integration</span>
                </div>
                <p className="text-gray-300">Deep expertise in CRM, ERP, and enterprise system integration. Connects disparate data environments and extracts actionable intelligence from complex operational data.</p>
              </div>

              {/* Digital Transformation Lead */}
              <div className="bg-blue-800/30 border-l-4 border-slate-400 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Digital Transformation Lead</h3>
                  <span className="bg-slate-400/20 text-slate-300 text-xs font-semibold px-3 py-1 rounded">100+ B2B Companies</span>
                </div>
                <p className="text-gray-300">Led successful digital transformation projects across India's manufacturing, retail, and services sectors. Proven track record navigating legacy systems and inconsistent data structures.</p>
              </div>

              {/* Technology Partner */}
              <div className="bg-blue-800/30 border-l-4 border-orange-500 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">Technology Partner</h3>
                  <span className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded">StartupAI Advantage</span>
                </div>
                <p className="text-gray-300">Leads all technical architecture and enterprise integration for CEO Intel. Ensures every client implementation connects cleanly with existing CRM, ERP, accounting, and operations systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RAJESH CLIENTS SECTION */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 text-center">Notable Clients</p>
            
            <div className="space-y-8">
              {/* RAILWAY */}
              <div>
                <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-3">Railway</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">Konkan Railway Corporation Ltd.</span>
                </div>
              </div>

              {/* SHIP BUILDERS */}
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-3">Ship Builders</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">Managing Docks</span>
                </div>
              </div>

              {/* CORPORATE */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">Corporate</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">Finolex Group</span>
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">Capco Water Solutions</span>
                </div>
              </div>

              {/* MS THINK TANK */}
              <div>
                <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-3">MS Think Tank</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">MEDC</span>
                </div>
              </div>

              {/* APEX BODY */}
              <div>
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-3">Apex Body</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">IOPEPC</span>
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">APEX Council</span>
                </div>
              </div>

              {/* FOOTER NOTE */}
              <p className="text-cyan-400 text-sm mt-8">...and 100+ B2B companies across India</p>
            </div>
          </div>
        </section>

        {/* NEVIL SECTION */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT - PHOTO */}
              <div>
                <div className="rounded-lg overflow-hidden h-96 mb-6">
                  <img src="/images/nevil-founder-professional_aff52c05_497e6ba0.webp" alt="Nevil Darukhanawala" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* RIGHT - BIO & DETAILS */}
              <div>
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-2">CO-FOUNDER & AI STRATEGY</p>
                <h2 className="text-4xl font-bold text-white mb-4">Nevil Darukhanawala</h2>
                <p className="text-gray-400 mb-8">AI Strategy · Intelligence Framework Creator</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">The Expertise</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Nevil designed and built the intelligence framework that powers Wellbeeng's AI systems. With 20+ years of business strategy expertise and deep understanding of the Indian business context, he translates complex business challenges into AI-driven solutions that actually work.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED IN SECTION */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 text-center">Recognition & Media</p>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured In</h2>
            
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              In 2024, recognized on World Entrepreneurs Day as one of India's visionary founders — featured in YourStory, The Daily Guardian, Times Now, and ET Now (Celebrating Iconic Brands & Leaders of the Year 2024).
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://www.etnownews.com/markets/celebrating-iconic-brands/leaders-of-the-year-2024-article-116431565" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg px-6 py-3 text-cyan-400 font-semibold transition-colors">
                ET Now →
              </a>
              <a href="https://www.timesnownews.com/business-economy/meet-12-noteworthy-indian-personalities-of-2024-article-115339220" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg px-6 py-3 text-cyan-400 font-semibold transition-colors">
                Times Now →
              </a>
              <a href="https://yourstory.com/2024/08/innovative-founders-aim-change-status-quo" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg px-6 py-3 text-cyan-400 font-semibold transition-colors">
                YourStory →
              </a>
              <a href="https://indiantelevision.com/mam/sooper-dooper-kids-believes-in-quality-over-quantity-nevil-darukhanawala/" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg px-6 py-3 text-cyan-400 font-semibold transition-colors">
                Indian Television →
              </a>
              <a href="https://thedailyguardian.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800/30 border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg px-6 py-3 text-cyan-400 font-semibold transition-colors">
                The Daily Guardian →
              </a>
            </div>
          </div>
        </section>

        {/* NEVIL TIMELINE SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">The Journey</h2>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-cyan-400" style={{top: 0}}></div>
              
              {/* 1998 */}
              <div className="flex gap-8 items-start">
                <div className="flex-1 text-right pr-8">
                  <p className="text-orange-500 font-bold text-lg">1998</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-white mb-2">WebWork India Pvt Ltd</h3>
                  <p className="text-gray-300">Web development company founded at the dawn of India's internet era. VC-funded by Edelweiss Capital. Built and scaled digital presence for startups across India.</p>
                </div>
              </div>

              {/* 2000s */}
              <div className="flex gap-8 items-start">
                <div className="flex-1 text-right pr-8">
                  <p className="text-cyan-400 font-bold text-lg">2000s</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-white mb-2">India Port Dot Pvt Ltd</h3>
                  <p className="text-gray-300">One of India's first platforms for online container tracking and shipping schedules. Brought digital intelligence to the logistics sector before anyone called it that.</p>
                </div>
              </div>

              {/* 2010s */}
              <div className="flex gap-8 items-start">
                <div className="flex-1 text-right pr-8">
                  <p className="text-orange-500 font-bold text-lg">2010s</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-white mb-2">Spot One / SEO Expert India</h3>
                  <p className="text-gray-300">20-person digital agency. 100+ clients. Large corporates, national consumer brands, global businesses. Over a decade of data-driven digital marketing — and a front-row seat to how Indian businesses make decisions without connected intelligence.</p>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex gap-8 items-start">
                <div className="flex-1 text-right pr-8">
                  <p className="text-cyan-400 font-bold text-lg">2024</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-white mb-2">Sooper Dooper Kids</h3>
                  <p className="text-gray-300">Children's clothing brand. One Purchased = One Donated. International funding from Sheikha Arwa Al Qassimi. National media coverage. Proof that purpose and profit share the same P&L.</p>
                </div>
              </div>

              {/* 2024-25 */}
              <div className="flex gap-8 items-start">
                <div className="flex-1 text-right pr-8">
                  <p className="text-orange-500 font-bold text-lg">2024-25</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-white mb-2">StartupAI Advantage / CEO Intel</h3>
                  <p className="text-gray-300">18 months of building AI systems. 100+ conversations with Indian CEOs. One problem that kept surfacing. One system built by someone who spent 26 years close enough to see it — and finally had the tools to solve it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEVIL BRANDS SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-8 text-center">20+ YEARS · 100+ ENGAGEMENTS</p>
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Brands We've Worked With</h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              From India's largest consumer brands to international businesses — a track record built across industries, geographies, and decades.
            </p>

            <div className="space-y-12">
              {/* INDIA BRANDS */}
              <div>
                <h3 className="text-lg font-bold text-orange-500 mb-6">INDIA</h3>
                <div className="flex flex-wrap gap-3">
                  {['PharmEasy', 'Pretty Secrets', 'Johnson & Johnson', 'Wadhwa Builders', 'Parinee Builders', 'Nirmal Lifestyle', 'HDFC Red', 'K11 Fitness', 'Talwalkars', 'Steinmetz Diamonds', 'Sooper Dooper Kids'].map((brand) => (
                    <div key={brand} className="bg-blue-800/30 border border-cyan-400/20 rounded-lg px-4 py-2 text-gray-300 text-sm">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              {/* INTERNATIONAL BRANDS */}
              <div>
                <h3 className="text-lg font-bold text-cyan-400 mb-6">INTERNATIONAL</h3>
                <div className="flex flex-wrap gap-3">
                  {['Royal Sun Alliance (UAE)', 'New York Diamond Traders (USA)', 'JustMensRings (USA)', 'London Theatre Direct (UK)'].map((brand) => (
                    <div key={brand} className="bg-blue-800/30 border border-cyan-400/20 rounded-lg px-4 py-2 text-gray-300 text-sm">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              {/* AND MANY MORE */}
              <div className="text-center">
                <p className="text-gray-400 italic">…and many more across manufacturing, FMCG, retail, and B2B services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-4 bg-slate-950">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              We're building the intelligence system<br />
              <span className="text-orange-500">Indian businesses have always needed.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you're ready to make smarter, faster decisions — with complete visibility into your business — let's talk.
            </p>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg mb-4">
                Book a Discovery Call
                <ArrowRight size={20} />
              </a>
            </Link>
            <p className="text-sm text-gray-400 italic">
              No commitment required · No generic pitch · Just your data, your questions, your answers
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
