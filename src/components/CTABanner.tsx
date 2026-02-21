"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Transform Your Revenue Cycle?",
  subtitle = "Join 150,000+ providers who trust TBL Solutions for their medical billing needs.",
  buttonText = "Request a Demo",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="gradient-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <Link
          href={buttonHref}
          className="btn-slide inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-lg text-lg"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
