import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { getAIProductBySlug, getAllAIProductSlugs } from "@/data/aiProducts";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAIProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getAIProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | TBL Solutions`,
    description: product.description,
  };
}

export default async function AIProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getAIProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={product.title}
          subtitle={product.tagline}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "AI Products" },
            { label: product.title },
          ]}
        />

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
                Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Powerful <span className="text-primary">Capabilities</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">{product.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((f, i) => (
                <div
                  key={i}
                  className="card-hover bg-white rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                  Why Choose <span className="text-primary">{product.title}</span>?
                </h2>
                <ul className="space-y-4">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-slide inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {product.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm"
                  >
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title={`Get Started with ${product.title}`}
          subtitle="Schedule a personalized demo and see the difference AI can make."
        />
      </main>
      <Footer />
    </>
  );
}
