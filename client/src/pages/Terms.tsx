import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
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
              <h2 className="text-3xl font-bold text-white mb-6">Agreement to Terms</h2>
              <p className="text-gray-300 mb-8">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (you) and Wellbeeng Technologies (we, us, or our), concerning your access to and use of the wellbeeng.com website as well as any other media form, media channel, mobile website, or mobile application relating, linked, or otherwise connected thereto (collectively, the Site).
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-8">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the Content) and the trademarks, service marks, and logos contained therein (the Marks) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">User Representations</h2>
              <p className="text-gray-300 mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
                <li>All registration information you submit is true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">User Prohibitions</h2>
              <p className="text-gray-300 mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Disclaimer of Warranties</h2>
              <p className="text-gray-300 mb-8">
                The Site is provided on an as-is and as-available basis. You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Limitation of Liability</h2>
              <p className="text-gray-300 mb-8">
                In no event shall Wellbeeng Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of or in connection with the use or inability to use the materials on the Site, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Modifications and Interruptions</h2>
              <p className="text-gray-300 mb-8">
                We reserve the right to modify or discontinue, temporarily or permanently, the Site (or any part thereof) with or without notice. You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuance of the Site.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-300">
                Wellbeeng Technologies<br />
                Email: legal@wellbeeng.com<br />
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
