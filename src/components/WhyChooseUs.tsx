"use client";

import {
  BadgeDollarSign,
  Zap,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective Solutions",
    description:
      "Pay-for-paid model to save thousands. Free software installation and denied claims appeals included in every package.",
    highlights: [
      "No hidden fees",
      "Free setup",
      "Denied claims appeals",
    ],
  },
  {
    icon: Zap,
    title: "Increase Revenue",
    description:
      "Reduce rejected and denied claims through an efficient medical billing cycle that maximizes every dollar you earn.",
    highlights: [
      "20% revenue growth",
      "Fewer denials",
      "Optimized coding",
    ],
  },
  {
    icon: Rocket,
    title: "Get Paid Faster",
    description:
      "Significantly reduce turnaround time with electronic billing services. Claims processed and paid in record time.",
    highlights: [
      "7-day turnaround",
      "Electronic submissions",
      "Real-time tracking",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent-light text-accent-dark text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Healthcare Providers{" "}
              <span className="text-primary">Choose TBL Solutions</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              With over a decade of experience serving 80,000+ practitioners,
              we&apos;ve built a reputation for excellence, innovation, and
              measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-slide inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-md"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right — cards */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {reason.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent-dark bg-accent-light rounded-full px-2.5 py-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
