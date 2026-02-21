import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import OfficeLocations from "@/components/contact/OfficeLocations";

export const metadata: Metadata = {
  title: "Contact Us | TBL Solutions",
  description:
    "Get in touch with TBL Solutions. Request a demo, ask questions, or learn how we can optimize your revenue cycle.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Get in touch with our team to learn how TBL Solutions can transform your revenue cycle."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
        <Contact />
        <OfficeLocations />
        <CTABanner
          title="Ready to Get Started?"
          subtitle="Schedule a free consultation with our RCM experts today."
          buttonText="Schedule Consultation"
        />
      </main>
      <Footer />
    </>
  );
}
