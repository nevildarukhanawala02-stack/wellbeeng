import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-cyan-400/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors" onClick={handleNavClick}>
              Wellbeeng <span className="text-cyan-400">Technologies</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Products Dropdown - NEW */}
            <div className="group relative">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-80 bg-blue-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {/* AI Automation */}
                <Link href="/ai-automation">
                  <a className="block px-4 py-4 text-gray-300 hover:text-white first:rounded-t-lg hover:bg-blue-700 transition-colors border-l-4 border-orange-500" onClick={handleNavClick}>
                    <div className="font-semibold text-white">AI Automation</div>
                    <div className="text-sm text-gray-400">Solve any business pain point with custom AI</div>
                  </a>
                </Link>
                {/* Smart Commerce */}
                <Link href="/smart-commerce">
                  <a className="block px-4 py-4 text-gray-300 hover:text-white hover:bg-blue-700 transition-colors border-l-4 border-cyan-400" onClick={handleNavClick}>
                    <div className="font-semibold text-white">Smart Commerce</div>
                    <div className="text-sm text-gray-400">Build smarter. Sell more intelligently.</div>
                  </a>
                </Link>
                {/* CEO Intel */}
                <Link href="/intelligence-systems">
                  <a className="block px-4 py-4 text-gray-300 hover:text-white hover:bg-blue-700 transition-colors border-l-4 border-slate-600" onClick={handleNavClick}>
                    <div className="font-semibold text-white">CEO Intel</div>
                    <div className="text-sm text-gray-400">Revenue, Operations & Market Intelligence</div>
                  </a>
                </Link>
                {/* CEO Sherpa */}
                <Link href="/ceo-sherpa">
                  <a className="block px-4 py-4 text-gray-300 hover:text-white last:rounded-b-lg hover:bg-blue-700 transition-colors border-l-4 border-emerald-500" onClick={handleNavClick}>
                    <div className="font-semibold text-white">CEO Sherpa</div>
                    <div className="text-sm text-gray-400">A ranked daily brief from your own data</div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="group relative">
              <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-blue-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/solutions/manufacturing">
                  <a className="block px-4 py-3 text-gray-300 hover:text-cyan-400 first:rounded-t-lg hover:bg-blue-700 transition-colors" onClick={handleNavClick}>
                    Manufacturing
                  </a>
                </Link>
                <Link href="/solutions/fmcg">
                  <a className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-blue-700 transition-colors" onClick={handleNavClick}>
                    FMCG & Consumer
                  </a>
                </Link>
                <Link href="/solutions/retail">
                  <a className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-blue-700 transition-colors" onClick={handleNavClick}>
                    Retail & QSR
                  </a>
                </Link>
                <Link href="/solutions/b2b-services">
                  <a className="block px-4 py-3 text-gray-300 hover:text-cyan-400 last:rounded-b-lg hover:bg-blue-700 transition-colors" onClick={handleNavClick}>
                    B2B Services
                  </a>
                </Link>
              </div>
            </div>

            {/* Case Studies - NEW */}
            <Link href="/case-studies">
              <a className="text-gray-300 hover:text-white transition-colors" onClick={handleNavClick}>Case Studies</a>
            </Link>

            <Link href="/how-it-works">
              <a className="text-gray-300 hover:text-white transition-colors" onClick={handleNavClick}>How It Works</a>
            </Link>

            <Link href="/about">
              <a className="text-gray-300 hover:text-white transition-colors" onClick={handleNavClick}>About</a>
            </Link>

            <a href="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>
              View Demo
            </a>
          </nav>

          {/* CTA Button */}
          <Link href="/consultation">
            <a className="hidden md:inline-block bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors" onClick={handleNavClick}>
              Book Consultation
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-400/20 pt-4 space-y-4">
            {/* Products Section - NEW */}
            <div>
              <div className="px-4 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                Products
              </div>
              <Link href="/ai-automation">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  AI Automation
                </a>
              </Link>
              <Link href="/smart-commerce">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  Smart Commerce
                </a>
              </Link>
              <Link href="/intelligence-systems">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  CEO Intel
                </a>
              </Link>
              <Link href="/ceo-sherpa">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  CEO Sherpa
                </a>
              </Link>
            </div>

            {/* Industries Section */}
            <div>
              <div className="px-4 py-2 text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                Industries
              </div>
              <Link href="/solutions/manufacturing">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  Manufacturing
                </a>
              </Link>
              <Link href="/solutions/fmcg">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  FMCG & Consumer
                </a>
              </Link>
              <Link href="/solutions/retail">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  Retail & QSR
                </a>
              </Link>
              <Link href="/solutions/b2b-services">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors ml-2" onClick={handleNavClick}>
                  B2B Services
                </a>
              </Link>
            </div>

            {/* Other Links */}
            <div className="border-t border-cyan-400/20 pt-4">
              <Link href="/case-studies">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors" onClick={handleNavClick}>
                  Case Studies
                </a>
              </Link>
              <Link href="/how-it-works">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors" onClick={handleNavClick}>
                  How It Works
                </a>
              </Link>
              <Link href="/about">
                <a className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors" onClick={handleNavClick}>
                  About
                </a>
              </Link>
              <a href="/demo" className="block px-4 py-2 text-gray-300 hover:text-cyan-400 rounded hover:bg-blue-800 transition-colors" onClick={handleNavClick}>
                View Demo
              </a>
            </div>

            {/* CTA Button */}
            <Link href="/consultation">
              <a className="block px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors text-center mt-4" onClick={handleNavClick}>
                Book Consultation
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
