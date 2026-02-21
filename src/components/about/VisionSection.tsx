"use client";

import { Eye } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Eye className="w-4 h-4" />
              Our Vision
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Pioneering the Future of <span className="text-primary">Healthcare Revenue</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We envision a healthcare ecosystem where providers can focus entirely on
              patient care, free from the burden of complex billing and administrative
              challenges. Through cutting-edge AI technology and human expertise, we aim
              to create a world where every healthcare dollar is captured, every claim is
              processed accurately, and every provider achieves optimal financial health.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-4">
              {[
                "Eliminate billing inefficiencies across healthcare",
                "Empower providers with AI-driven financial insights",
                "Set the gold standard for RCM excellence",
                "Drive innovation in healthcare technology",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
