import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Home, Zap, Users } from 'lucide-react';

export default function NotFound() {
  const suggestedPages = [
    {
      icon: Home,
      title: 'Explore Our Products',
      description: 'Discover AI Automation, Smart Commerce, and CEO Intel',
      href: '/'
    },
    {
      icon: Zap,
      title: 'See How It Works',
      description: 'Learn about our implementation process and timeline',
      href: '/how-it-works'
    },
    {
      icon: Users,
      title: 'Book a Consultation',
      description: 'Talk to our team about your business needs',
      href: '/consultation'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-20">
        {/* 404 Hero */}
        <div className="container mx-auto px-4 max-w-4xl text-center mb-20">
          <h1 className="text-8xl md:text-9xl font-bold text-cyan-400 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist. But we've got plenty of other great content to explore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/">
              <a className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
                Go to Home
                <ArrowRight size={20} />
              </a>
            </Link>
            <Link href="/consultation">
              <a className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition-colors">
                Book Consultation
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>

        {/* Suggested Pages */}
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Where to go next?</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {suggestedPages.map((page, idx) => {
              const Icon = page.icon;
              return (
                <Link key={idx} href={page.href}>
                  <a className="group bg-blue-800/30 border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 hover:bg-blue-800/50 transition-all">
                    <div className="flex items-center justify-center mb-4">
                      <Icon size={32} className="text-cyan-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{page.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{page.description}</p>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-orange-500 transition-colors">
                      <span className="text-sm font-semibold">Explore</span>
                      <ArrowRight size={16} />
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="bg-blue-800/20 border border-cyan-400/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Popular Pages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'AI Automation', href: '/ai-automation' },
                { label: 'Smart Commerce', href: '/smart-commerce' },
                { label: 'CEO Intel', href: '/intelligence-systems' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Manufacturing', href: '/solutions/manufacturing' },
                { label: 'FMCG', href: '/solutions/fmcg' },
                { label: 'Retail', href: '/solutions/retail' },
                { label: 'About Us', href: '/about' }
              ].map((link, idx) => (
                <Link key={idx} href={link.href}>
                  <a className="text-cyan-400 hover:text-orange-500 transition-colors font-semibold text-sm">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
