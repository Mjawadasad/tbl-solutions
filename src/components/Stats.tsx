"use client";

import {
  TrendingDown,
  Clock,
  TrendingUp,
  Percent,
  FileCheck,
  Layers,
} from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "30%",
    label: "Reduction in A/R",
    description: "Faster collections",
  },
  {
    icon: Clock,
    value: "7",
    label: "Days Turnaround",
    description: "Quick processing",
    suffix: "Days",
  },
  {
    icon: TrendingUp,
    value: "20%",
    label: "Revenue Increase",
    description: "Growth guaranteed",
  },
  {
    icon: Percent,
    value: "97%",
    label: "Collection Ratio",
    description: "Industry leading",
  },
  {
    icon: FileCheck,
    value: "98%",
    label: "First Pass Clean Claims",
    description: "Accuracy matters",
  },
  {
    icon: Layers,
    value: "50+",
    label: "Specialties Served",
    description: "All-encompassing",
  },
];

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 gradient-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoNnptMC0zMHY2aC02VjRoNnptMCAzMHY2aC02di02aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our performance metrics demonstrate consistent excellence across all
            service areas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-blue-200/60 mt-1">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
