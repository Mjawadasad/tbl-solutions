import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import ResourceCard from "@/components/ResourceCard";

export const metadata: Metadata = {
  title: "White Papers | TBL Solutions",
  description: "In-depth research and analysis on healthcare billing, RCM optimization, and AI in healthcare.",
};

const papers = [
  { title: "The ROI of AI-Powered Medical Billing", description: "A comprehensive analysis of return on investment when implementing AI in revenue cycle management.", date: "Nov 2024", color: "from-blue-500 to-cyan-500" },
  { title: "State of Healthcare RCM 2024", description: "Annual industry report covering trends, challenges, and opportunities in revenue cycle management.", date: "Oct 2024", color: "from-emerald-500 to-teal-500" },
  { title: "Reducing Denials with Predictive Analytics", description: "How predictive models can identify at-risk claims before submission.", date: "Sep 2024", color: "from-purple-500 to-pink-500" },
];

export default function WhitePapersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="White Papers"
          subtitle="In-depth research and expert analysis."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "White Papers" }]}
        />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {papers.map((p, i) => (
                <ResourceCard key={i} {...p} category="White Paper" />
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
