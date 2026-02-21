import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import ResourceCard from "@/components/ResourceCard";

export const metadata: Metadata = {
  title: "Case Studies | TBL Solutions",
  description: "Real-world success stories from healthcare providers who partnered with TBL Solutions.",
};

const caseStudies = [
  { title: "Multi-Specialty Group Increases Revenue by 25%", description: "How a 20-provider multi-specialty practice achieved significant revenue growth with TBL Solutions's RCM solutions.", date: "Dec 2024", color: "from-blue-500 to-cyan-500" },
  { title: "Hospital System Reduces A/R by 40%", description: "A regional hospital network's journey to financial optimization through AI-powered billing.", date: "Nov 2024", color: "from-emerald-500 to-teal-500" },
  { title: "Dermatology Practice Cuts Denials by 60%", description: "How specialty-specific billing expertise transformed a dermatology group's revenue cycle.", date: "Oct 2024", color: "from-purple-500 to-pink-500" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Case Studies"
          subtitle="Real success stories from our healthcare partners."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((cs, i) => (
                <ResourceCard key={i} {...cs} category="Case Study" />
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
