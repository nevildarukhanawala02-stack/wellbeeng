import { Link } from 'wouter';

export default function Footer() {
  const handleNavClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Products Column - NEW */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-automation"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>AI Automation</a></Link></li>
              <li><Link href="/smart-commerce"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Smart Commerce</a></Link></li>
              <li><Link href="/intelligence-systems"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>CEO Intel</a></Link></li>
              <li><Link href="/ceo-sherpa"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>CEO Sherpa</a></Link></li>
              <li><Link href="/how-it-works"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>How It Works</a></Link></li>
            </ul>
          </div>

          {/* Company Column - UPDATED */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>About Us</a></Link></li>
              <li><Link href="/case-studies"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Case Studies</a></Link></li>
              <li><Link href="/resources"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Resources</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Contact</a></Link></li>
              <li><a href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>View Demo</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/consultation"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Book Consultation</a></Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2026 Wellbeeng Technologies. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Privacy Policy</a></Link>
              <Link href="/terms"><a className="text-gray-400 hover:text-cyan-400 transition-colors" onClick={handleNavClick}>Terms of Service</a></Link>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
