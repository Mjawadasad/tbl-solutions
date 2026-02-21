"use client";

import { Users, Calendar, Award, TrendingUp, Building2, Globe } from "lucide-react";

const metrics = [
  { icon: Users, value: "150,000+", label: "Providers Served" },
  { icon: Calendar, value: "12+", label: "Years of Excellence" },
  { icon: Award, value: "1,500+", label: "AAPC Certified Staff" },
  { icon: TrendingUp, value: "18.3%", label: "Year-over-Year Growth" },
  { icon: Building2, value: "50+", label: "Specialties Covered" },
  { icon: Globe, value: "2", label: "Office Locations" },
];

export default function KPIMetrics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{m.value}</div>
                <div className="text-sm text-gray-500 mt-1">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
