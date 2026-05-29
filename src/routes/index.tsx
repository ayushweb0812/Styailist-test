import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Struggles } from "@/components/site/Struggles";
import { Problem } from "@/components/site/Problem";
import { WhyUs } from "@/components/site/WhyUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { TryIt } from "@/components/site/TryIt";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero />
      <Struggles />
      <Problem />
      <WhyUs />
      <HowItWorks />
      <TryIt />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
