import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import ResourceCard from "@/components/ResourceCard";

export const metadata: Metadata = {
  title: "Webinars | TBL Solutions",
  description: "Watch our expert-led webinars on medical billing, RCM, and healthcare technology.",
};

const webinars = [
  { title: "AI in Revenue Cycle Management: What's Next?", description: "Join our experts as they discuss the latest AI innovations transforming healthcare billing.", date: "Jan 15, 2025", color: "from-blue-500 to-cyan-500" },
  { title: "Maximizing Clean Claims Rate", description: "Learn strategies to achieve 98%+ first-pass clean claims and reduce denials.", date: "Jan 8, 2025", color: "from-emerald-500 to-teal-500" },
  { title: "2025 CPT Code Updates You Need to Know", description: "Stay current with the latest CPT code changes affecting your specialty.", date: "Dec 20, 2024", color: "from-purple-500 to-pink-500" },
];

export default function WebinarsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Webinars"
          subtitle="Expert-led sessions on healthcare billing and technology."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Webinars" }]}
        />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((w, i) => (
                <ResourceCard key={i} {...w} category="Webinar" />
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
