import { useState } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, AlertCircle, X } from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  industry?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Industry validation
    if (!formData.industry) {
      newErrors.industry = 'Please select your industry';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success popup
      setShowSuccess(true);

      // Reset form
      setFormData({ name: '', email: '', company: '', industry: '', message: '' });
      setErrors({});
      setTouched({});

      // Auto-hide success popup after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    const newErrors: FormErrors = { ...errors };

    if (name === 'name') {
      if (!formData.name.trim()) {
        newErrors.name = 'Full name is required';
      } else if (formData.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      } else {
        delete newErrors.name;
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }

    if (name === 'industry') {
      if (!formData.industry) {
        newErrors.industry = 'Please select your industry';
      } else {
        delete newErrors.industry;
      }
    }

    if (name === 'message') {
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      } else {
        delete newErrors.message;
      }
    }

    setErrors(newErrors);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Have questions? Want to learn more about our intelligence systems? We're here to help.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:hello@wellbeeng.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        hello@wellbeeng.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">Available for consultation calls</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Location</h3>
                      <p className="text-gray-300">India</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-blue-800/30 rounded-lg p-6 border border-cyan-400/20">
                  <h3 className="font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-gray-300">
                    We respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-blue-800/30 rounded-lg p-8 border border-cyan-400/20">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan-400/30 focus:border-cyan-400'
                      }`}
                      placeholder="Your name"
                    />
                    {touched.name && errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan-400/30 focus:border-cyan-400'
                      }`}
                      placeholder="your@email.com"
                    />
                    {touched.email && errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-cyan-400/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-white mb-2">
                      Industry <span className="text-orange-500">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none transition-colors appearance-none cursor-pointer ${
                        touched.industry && errors.industry
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan-400/30 focus:border-cyan-400'
                      }`}
                    >
                      <option value="" className="bg-slate-950 text-gray-400">Select your industry</option>
                      <option value="manufacturing" className="bg-slate-950 text-white">Manufacturing</option>
                      <option value="fmcg" className="bg-slate-950 text-white">FMCG & Consumer Brands</option>
                      <option value="retail" className="bg-slate-950 text-white">Retail & QSR</option>
                      <option value="b2b" className="bg-slate-950 text-white">B2B Services</option>
                      <option value="others" className="bg-slate-950 text-white">Others</option>
                    </select>
                    {touched.industry && errors.industry && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.industry}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full bg-slate-950 border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                        touched.message && errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-cyan-400/30 focus:border-cyan-400'
                      }`}
                      placeholder="Tell us about your business challenges..."
                    />
                    {touched.message && errors.message && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prefer a Direct Conversation?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Book a free 30-minute consultation with our team. No pressure, no obligation—just a conversation about your business.
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

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-cyan-400/30 rounded-lg p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <CheckCircle size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>

              <div className="bg-blue-800/20 border border-cyan-400/20 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-cyan-400">Confirmation sent to:</span> {formData.email}
                </p>
              </div>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
