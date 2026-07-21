import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-300 mb-8">
                Wellbeeng Technologies (we, us, our) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                <li>Personal identification information (name, email address, phone number, company name, etc.)</li>
                <li>Business information (industry, company size, revenue range, etc.)</li>
                <li>Usage data (pages visited, time spent, etc.)</li>
                <li>Device information (IP address, browser type, operating system, etc.)</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                <li>Generate leads and conduct business development</li>
                <li>Email you regarding a consultation or inquiry</li>
                <li>Fulfill and manage your requests for our services</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Notify you of updates to our website or services</li>
                <li>Perform other business functions as necessary</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Disclosure of Your Information</h2>
              <p className="text-gray-300 mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                <li>By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law, enforce our Site policies, or protect the rights, property, and safety of others.</li>
                <li>Third-Party Service Providers: We may share your information with third parties that perform services for us, including payment processors, email service providers, and analytics providers.</li>
                <li>Business Transfers: If Wellbeeng is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Security of Your Information</h2>
              <p className="text-gray-300 mb-8">
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-300">
                Wellbeeng Technologies<br />
                Email: privacy@wellbeeng.com<br />
                Website: www.wellbeeng.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
