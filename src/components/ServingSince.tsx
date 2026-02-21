"use client";

import { Calendar, Users, Award, TrendingUp, ArrowRight } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "Serving Since", value: "2012" },
  { icon: Users, label: "Providers Served", value: "150,000+" },
  { icon: Award, label: "AAPC Certified Staff", value: "1,500+" },
  { icon: TrendingUp, label: "YOY Growth", value: "18.3%" },
];

export default function ServingSince() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-light to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Right - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-dark text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Trusted Since 2012
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Transforming Healthcare Revenue Cycle Management{" "}
              <span className="text-primary">Since 2012</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              For over a decade, TBL Solutions has been at the forefront of medical billing
              and revenue cycle management. Our AI-powered solutions and dedicated team of
              AAPC-certified professionals have helped thousands of healthcare providers
              optimize their financial performance.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "End-to-end revenue cycle management solutions",
                "AI-driven billing accuracy and compliance",
                "Dedicated account managers for personalized support",
                "Transparent reporting and real-time analytics",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn-slide inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
