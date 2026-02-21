import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Specialties from "@/components/Specialties";

export const metadata: Metadata = {
  title: "Medical Specialties | TBL Solutions",
  description:
    "TBL Solutions provides specialized medical billing and coding services for 50+ healthcare specialties.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Medical Specialties"
          subtitle="Expert billing and coding services tailored for every medical specialty."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Specialties" },
          ]}
        />

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Coverage Across <span className="text-primary">All Specialties</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of AAPC-certified coders and billing specialists has deep expertise
              across 50+ medical specialties. We understand the unique coding requirements,
              payer rules, and compliance standards for each specialty, ensuring maximum
              reimbursement and minimal denials.
            </p>
          </div>
        </section>

        <Specialties />
        <CTABanner
          title="Need Billing for Your Specialty?"
          subtitle="Our experts are ready to handle your specialty-specific billing needs."
        />
      </main>
      <Footer />
    </>
  );
}
