import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    industry: '',
    focus: 'revenue',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation booked:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to confirm your consultation.');
    setFormData({
      name: '',
      email: '',
      company: '',
      revenue: '',
      industry: '',
      focus: 'revenue',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Book Your Free <span className="text-cyan-400">30-Minute Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Talk directly to our founders about your biggest business challenges. We'll explore which AI system — AI Automation, Smart Commerce, or CEO Intel — makes sense for you.
            </p>
            <p className="text-lg text-cyan-400 font-semibold">
              Free. No Obligation. Customized to Your Business.
            </p>
          </div>
        </section>

        {/* CONSULTATION SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {/* What You'll Get */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">What You'll Get</h2>
                
                <div className="space-y-4">
                  {[
                    'Assessment of your current data and intelligence gaps',
                    'Identification of your top 3-5 strategic questions we could answer',
                    'Overview of how our systems would work for your specific business',
                    'Clear timeline and expected outcomes',
                    'Transparent pricing discussion',
                    'Talk directly to the founders'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Signals */}
                <div className="mt-12 bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="font-semibold text-white mb-4">Why Choose Us</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>✓ Free 30-minute consultation</li>
                    <li>✓ No obligation to proceed</li>
                    <li>✓ Customized to your needs</li>
                    <li>✓ Talk to the founders, not a sales team</li>
                    <li>✓ We respond within 24 hours</li>
                  </ul>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="md:col-span-2">
                <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label htmlFor="revenue" className="block text-sm font-semibold text-white mb-2">
                          Revenue Range *
                        </label>
                        <select
                          id="revenue"
                          name="revenue"
                          value={formData.revenue}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select range</option>
                          <option value="50-100">Rs 50-100 Cr</option>
                          <option value="100-200">Rs 100-200 Cr</option>
                          <option value="200-500">Rs 200-500 Cr</option>
                          <option value="500+">Above Rs 500 Cr</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-white mb-2">
                          Industry
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select industry</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="fmcg">FMCG & Consumer</option>
                          <option value="retail">Retail & QSR</option>
                          <option value="b2b-services">B2B Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="focus" className="block text-sm font-semibold text-white mb-2">
                          I Am Interested In *
                        </label>
                        <select
                          id="focus"
                          name="focus"
                          value={formData.focus}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select option</option>
                          <option value="automation">AI Automation — I want to automate a specific process or pain point</option>
                          <option value="commerce">Smart Commerce — I want to build or rebuild my eCommerce website</option>
                          <option value="intelligence">CEO Intel — I want full business intelligence (Revenue / Operations / Market)</option>
                          <option value="explore">Not Sure — I want to explore what AI can do for my business</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                        Tell Us About Your Business Challenges
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        placeholder="What are your biggest business challenges? What decisions are you struggling to make faster?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                    >
                      Book Your Consultation
                      <ArrowRight size={20} />
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      We'll contact you within 24 hours to confirm your consultation time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Consultation FAQs</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'What should I prepare for the consultation?',
                  a: 'Just bring your business challenges and questions. We\'ll guide the conversation. If you have data about your current systems or processes, that\'s helpful but not required.'
                },
                {
                  q: 'How long is the consultation?',
                  a: 'The consultation is 30 minutes. We\'ll use this time to understand your business, identify your key challenges, and explore how our systems might help.'
                },
                {
                  q: 'Will there be a sales pitch?',
                  a: 'No hard sell. We\'ll explain how our systems work and discuss whether they\'re a good fit for your business. If they\'re not, we\'ll be honest about it.'
                },
                {
                  q: 'What happens after the consultation?',
                  a: 'If there\'s mutual interest, we\'ll send you a customized proposal with timeline and pricing. You\'ll have time to review and ask questions. No pressure to decide immediately.'
                },
                {
                  q: 'Is there any cost for the consultation?',
                  a: 'No, the consultation is completely free. There\'s no obligation to proceed with our services.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
