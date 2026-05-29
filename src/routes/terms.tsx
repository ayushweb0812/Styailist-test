import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { SectionLoader } from "@/components/ui/section-loader";

const Footer = React.lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col relative z-0">
      {/* Ambient theme background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-pink/15 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-neon-purple/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <Nav />
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pt-36 pb-24">
        <div className="bg-glass-strong ring-glass shadow-card rounded-[2.5rem] p-8 md:p-14 relative">
          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-neon-pink/20 blur-[60px]" />

          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-2 relative z-10">
            Terms and <span className="text-gradient-primary">Conditions</span>
          </h1>
          <p className="text-sm font-medium tracking-widest text-foreground/50 uppercase mb-10 border-b border-foreground/10 pb-6">Last updated: May 2026</p>

          <div className="space-y-10 text-foreground/75 leading-relaxed relative z-10 text-base md:text-lg">
            <p className="text-sm text-foreground/70 mb-8 italic">
              Welcome to Styailist. These Terms & Conditions govern your access to and use of our website by using our Website, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using the site.
            </p>

            <section className="group">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">1. Use of the Website</h2>
              <div className="space-y-4">
                <p>You may use the ClosetCrew website for lawful purposes only. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable local, national, or international law or regulation</li>
                  <li>Interfere with or disrupt the website's functionality</li>
                  <li>Attempt to gain unauthorized access to the site or our servers</li>
                  <li>Transmit any harmful code, virus, malware, or related software</li>
                  <li>Use content from the site for commercial purposes without written consent</li>
                </ul>
              </div>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">2. Intellectual Property</h2>
              <p>All content, trademarks, logos, service marks, graphics, and design elements on this site are the property of ClosetCrew or its licensors. Unauthorized use, reproduction, or distribution of any content is strictly prohibited unless explicitly permitted in writing.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">3. Privacy</h2>
              <p>Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your data. By using the Website, you consent to the practices described in the Privacy Policy.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">4. Disclaimer</h2>
              <div className="space-y-4">
                <p>The content on the ClosetCrew website is provided for general information purposes only. We do our best to ensure accuracy, but we make no guarantees about the completeness, reliability, or suitability of the content for any specific purpose.</p>
                <p>We reserve the right to make changes or updates to our services or site content at any time, without prior notice.</p>
              </div>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">5. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Styailist will not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of or inability to use this Website, even if we have been advised of the possibility of such damages.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">6. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Styailist, its team members, and affiliates from any claims, liabilities, damages, or expenses (including legal fees) arising out of your violation of these Terms or your use of the Website.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">7. Modifications to Terms</h2>
              <p>We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the Website following the posting of changes constitutes acceptance of those changes.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">8. Termination</h2>
              <p>We may suspend or terminate your access to the Website at any time, without notice or liability, if we believe you have violated these Terms or applicable law.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-pink">9. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India.<br />Jurisdiction: All claims arising out of or relating to these Terms or the use of the Services shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.</p>
            </section>

            <section className="group pt-4">
              <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 text-neon-purple">10. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms & Conditions, please contact us at:</p>
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
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
}
