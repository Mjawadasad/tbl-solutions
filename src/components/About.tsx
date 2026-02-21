"use client";

import {
  Calendar,
  Users,
  Stethoscope,
  Award,
  CheckCircle2,
} from "lucide-react";

const milestones = [
  { icon: Calendar, value: "Since 2012", label: "Serving Healthcare" },
  { icon: Users, value: "150,000+", label: "Providers Trusted" },
  { icon: Stethoscope, value: "50+", label: "Specialties" },
  { icon: Award, value: "1,500+", label: "AAPC Certified Staff" },
];

const features = [
  "Increased operational efficiency through task management",
  "Advanced reporting and analytics capabilities",
  "Cost-effective, pay-for-performance model",
  "Faster claim processing and reimbursement",
  "HIPAA compliant data security",
  "24/7 dedicated customer support",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side — visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Serving Healthcare Providers Since 2012
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {milestones.map((m) => (
                    <div
                      key={m.label}
                      className="text-center p-4 rounded-xl bg-gray-50"
                    >
                      <m.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">
                        {m.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="text-sm font-semibold">18.3% YOY Growth</p>
                <p className="text-xs opacity-80">Reported by providers</p>
              </div>
            </div>
          </div>

          {/* Right side — content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
              About TBL Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in{" "}
              <span className="text-primary">Healthcare Revenue</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              With over a decade of experience, TBL Solutions is a trusted partner
              for over 80,000 practitioners seeking advanced medical billing
              software and comprehensive revenue cycle management solutions.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-md"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
