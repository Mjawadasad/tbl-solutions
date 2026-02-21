import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | TBL Solutions",
  description: "Hear from healthcare providers who have transformed their practice with TBL Solutions.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Client Testimonials"
          subtitle="Hear from healthcare providers who trust TBL Solutions."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
