import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import ResourceCard from "@/components/ResourceCard";

export const metadata: Metadata = {
  title: "Blog | TBL Solutions",
  description: "Healthcare industry insights, best practices, and expert guidance from TBL Solutions.",
};

const posts = [
  { title: "How AI is Revolutionizing Medical Billing in 2024", description: "Discover how artificial intelligence is transforming the healthcare revenue cycle with automated coding and predictive analytics.", date: "Dec 15, 2024", color: "from-blue-500 to-cyan-500" },
  { title: "Reducing Claim Denials: A Complete Guide", description: "Learn proven strategies to minimize claim denials and maximize your practice's revenue.", date: "Dec 10, 2024", color: "from-emerald-500 to-teal-500" },
  { title: "The Future of Telehealth Billing", description: "Understanding the nuances of remote care billing as telehealth continues to grow.", date: "Dec 5, 2024", color: "from-purple-500 to-pink-500" },
  { title: "HIPAA Compliance: Best Practices for 2025", description: "Stay ahead of regulatory changes with our updated guide to HIPAA compliance.", date: "Nov 28, 2024", color: "from-orange-500 to-red-500" },
  { title: "Maximizing Revenue with Proper Medical Coding", description: "Accurate medical coding is the foundation of successful revenue cycle management.", date: "Nov 20, 2024", color: "from-indigo-500 to-blue-500" },
  { title: "Practice Management Software: What to Look For", description: "Key features to prioritize when choosing the right PMS for your practice.", date: "Nov 15, 2024", color: "from-rose-500 to-pink-500" },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Blog"
          subtitle="Healthcare industry insights and expert guidance."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <ResourceCard key={i} {...post} category="Blog" />
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
