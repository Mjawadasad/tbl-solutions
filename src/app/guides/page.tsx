import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import ResourceCard from "@/components/ResourceCard";

export const metadata: Metadata = {
  title: "Guides | TBL Solutions",
  description: "Comprehensive guides on medical billing, coding, and revenue cycle management.",
};

const guides = [
  { title: "Complete Guide to Medical Billing for New Practices", description: "Everything you need to know about setting up medical billing for a new healthcare practice.", date: "Dec 2024", color: "from-blue-500 to-cyan-500" },
  { title: "ICD-10 Coding Best Practices", description: "Master ICD-10 coding with our comprehensive guide to accurate diagnosis coding.", date: "Nov 2024", color: "from-emerald-500 to-teal-500" },
  { title: "Outsourcing vs In-House Billing: The Definitive Comparison", description: "Compare the costs, benefits, and trade-offs of outsourced vs in-house billing.", date: "Oct 2024", color: "from-purple-500 to-pink-500" },
];

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Guides"
          subtitle="Comprehensive resources to help you succeed."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
        />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((g, i) => (
                <ResourceCard key={i} {...g} category="Guide" />
              ))}
            </div>
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
