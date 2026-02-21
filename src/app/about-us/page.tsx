import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import KPIMetrics from "@/components/about/KPIMetrics";
import VisionSection from "@/components/about/VisionSection";
import MissionSection from "@/components/about/MissionSection";
import CoreValues from "@/components/about/CoreValues";

export const metadata: Metadata = {
  title: "About Us | TBL Solutions",
  description:
    "Learn about TBL Solutions — serving healthcare providers since 2012 with AI-powered medical billing and revenue cycle management solutions.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About TBL Solutions"
          subtitle="Transforming healthcare revenue cycle management with AI innovation and human expertise since 2012."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who We <span className="text-primary">Are</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              TBL Solutions is a leading provider of AI-powered medical billing and revenue
              cycle management solutions. Since 2012, we have been helping healthcare
              providers across the United States optimize their financial operations,
              reduce administrative burden, and focus on what matters most — patient care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a team of over 1,500 AAPC-certified professionals and cutting-edge
              AI technology, we serve 150,000+ providers across 50+ medical specialties.
              Our comprehensive suite of services spans the entire revenue cycle, from
              patient registration to final payment posting.
            </p>
          </div>
        </section>

        <KPIMetrics />
        <VisionSection />
        <MissionSection />
        <CoreValues />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
