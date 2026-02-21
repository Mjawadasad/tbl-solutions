"use client";

import { Target } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
            <div className="space-y-4">
              {[
                "Deliver measurable ROI to every client",
                "Maintain the highest standards of compliance",
                "Invest in our people and their growth",
                "Innovate continuously with AI and automation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-dark text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Empowering Healthcare Through <span className="text-primary">Technology & Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to empower healthcare providers with AI-driven revenue cycle
              management solutions that maximize financial performance while maintaining
              the highest standards of accuracy, compliance, and patient satisfaction. We
              are committed to being the most trusted partner in healthcare billing,
              delivering measurable results that transform practices and health systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
