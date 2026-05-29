import { createFileRoute } from "@tanstack/react-router";
import React, { Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SectionLoader } from "@/components/ui/section-loader";

const Struggles = React.lazy(() => import("@/components/site/Struggles").then((m) => ({ default: m.Struggles })));
const Problem = React.lazy(() => import("@/components/site/Problem").then((m) => ({ default: m.Problem })));
const WhyUs = React.lazy(() => import("@/components/site/WhyUs").then((m) => ({ default: m.WhyUs })));
const HowItWorks = React.lazy(() => import("@/components/site/HowItWorks").then((m) => ({ default: m.HowItWorks })));
const TryIt = React.lazy(() => import("@/components/site/TryIt").then((m) => ({ default: m.TryIt })));
const Pricing = React.lazy(() => import("@/components/site/Pricing").then((m) => ({ default: m.Pricing })));
const CTA = React.lazy(() => import("@/components/site/CTA").then((m) => ({ default: m.CTA })));
const Footer = React.lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Nav />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Struggles />
        <Problem />
        <WhyUs />
        <HowItWorks />
        <TryIt />
        <Pricing />
        <CTA />
        <Footer />
      </Suspense>
    </main>
  );
}
