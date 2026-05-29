import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col relative z-0">
      {/* Ambient theme background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-pink/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <Nav />
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pt-36 pb-24">
        <div className="bg-glass-strong ring-glass shadow-card rounded-[2.5rem] p-8 md:p-14 relative">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-neon-purple/20 blur-[60px]" />

          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-2 relative z-10">
            Privacy <span className="text-gradient-primary">Policy</span>
          </h1>
          <p className="text-sm font-medium tracking-widest text-foreground/50 uppercase mb-10 border-b border-foreground/10 pb-6">Last updated: May 2026</p>

          <div className="space-y-10 text-foreground/75 leading-relaxed relative z-10 text-base md:text-lg">
            <p className="text-sm text-foreground/70 mb-8 italic">
              At Styailist, These Terms shall be governed by and construed in accordance with the laws of India.
              <br />
              • Jurisdiction: All claims arising out of or relating to these Terms or the use of the Services shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.
            </p>

            <section className="group">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">Personal Information</h2>
              <h3 className="text-lg font-semibold text-ink mb-2">Collection & Use of Your Personal Information</h3>
              <div className="space-y-4">
                <p>As part of our services, we collect information from users who visit our website, reach out for business inquiries, or apply for career opportunities at Styailist. We gather this data to ensure smooth communication, deliver services, and enhance your experience with us.</p>
                <p>We may collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Project-related information</li>
                  <li>Resume or career-related information (if applying for a position)</li>
                </ul>
                <p>We use this information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide and manage the services you've requested</li>
                  <li>Communicate with you about your inquiry or project</li>
                  <li>Send newsletters or updates (only if you opt in)</li>
                  <li>Improve the quality and functionality of our website and services</li>
                </ul>
                <p>We do not sell or rent your personal information. However, we may share it with trusted service providers who help us with operations such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Customer communication</li>
                  <li>Statistical analysis</li>
                  <li>Email campaign distribution</li>
                  <li>Website improvement</li>
                </ul>
                <p>We may also track which pages are accessed most often to understand what interests our users. This helps us present relevant services and content to you. We will only disclose your personal information when required by law or if we believe it's necessary to protect our rights or comply with legal obligations.</p>
              </div>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">Cookies</h2>
              <h3 className="text-lg font-semibold text-ink mb-2">Cookies Policy</h3>
              <p>Cookies are small text files stored on your device when you visit our website. They help us understand user behavior, improve website functionality, and personalize your experience.<br />You can choose to disable cookies through your browser settings. However, doing so may limit access to some features of our website. For the best experience, we recommend keeping cookies enabled.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">Resources</h2>
              <h3 className="text-lg font-semibold text-ink mb-2">Newsletters & Blogs</h3>
              <div className="space-y-4">
                <p>We may offer email newsletters to keep you updated on our latest services, insights, and announcements. To subscribe, you'll need to share your email and confirm your subscription.</p>
                <p>We collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email address</li>
                  <li>IP address</li>
                  <li>Time and date of subscription</li>
                </ul>
                <p>Your information is used exclusively for newsletter delivery. You can unsubscribe at any time by following the instructions in the email. Upon unsubscribing, your data is permanently removed from our mailing system.</p>
                <p>Our blog may include articles, discussions, and insights. Comments made on the blog are public and can be viewed or shared by other users. Please avoid sharing sensitive personal information in the comment sections.</p>
              </div>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">Analytics</h2>
              <h3 className="text-lg font-semibold text-ink mb-2">Website Analytics</h3>
              <p className="mb-4">Styailist uses analytics tools like Google Analytics to understand how users interact with our website. This includes metrics such as time spent on pages, navigation patterns, and browser/device types. No personally identifiable information is stored or shared through this process.</p>
              <p>You can learn more by reviewing the Google Analytics Privacy Policy.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">Consent</h2>
              <h3 className="text-lg font-semibold text-ink mb-2">Acceptance of Policy</h3>
              <p className="mb-4">By visiting and using our website or services, you consent to this Privacy Policy. If you do not agree with any part of it, please discontinue use of the website.</p>
              <p>We reserve the right to update or change this policy at any time. All updates will be reflected on this page. Continued use of our website after changes are posted signifies your acceptance of those changes.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">Contact Us</h2>
              <p className="mb-4">If you have questions, concerns, or requests related to this Privacy Policy, feel free to reach out:</p>
              <div className="bg-foreground/5 p-4 rounded-xl font-mono text-sm">
                <p>Styailist</p>
                <p>Email: contact@styailist.com</p>
                <p>Phone: +91 91813 23 2309</p>
                <p>Website: http://my.styailist.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
