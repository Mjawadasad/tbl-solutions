"use client";

import {
  ShieldCheck,
  Award,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "BBB A+ Rated" },
  { icon: Award, label: "NILA Certified" },
  { icon: BadgeCheck, label: "ISO Certified" },
  { icon: CheckCircle2, label: "ONC Authorized" },
];

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-16 lg:py-24">
          {/* Left content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Trusted by 150,000+ providers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI-Powered{" "}
              <span className="text-accent">Medical Billing</span>, PMS & EHR
              <span className="block mt-2 text-white/90">
                Built for Modern Healthcare
              </span>
            </h1>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Leverage AI-driven medical billing with seamlessly integrated PMS
              and EHR designed for today&apos;s healthcare workflows. Optimize
              revenue, streamline operations, and deliver better patient
              outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-slide inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2"
                >
                  <badge.icon className="w-5 h-5 text-accent" />
                  <span className="text-xs text-white/80 font-medium">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — dashboard mockup */}
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">
                      Revenue Dashboard
                    </h3>
                    <span className="text-accent text-sm font-medium">
                      Live
                    </span>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-white/60 text-xs mb-1">
                        Clean Claims Rate
                      </p>
                      <p className="text-3xl font-bold text-accent">98.5%</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-white/60 text-xs mb-1">
                        Revenue Growth
                      </p>
                      <p className="text-3xl font-bold text-white">+20%</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-white/60 text-xs mb-1">
                        Days in A/R
                      </p>
                      <p className="text-3xl font-bold text-white">28</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-white/60 text-xs mb-1">
                        First Pass Rate
                      </p>
                      <p className="text-3xl font-bold text-accent">95%</p>
                    </div>
                  </div>

                  {/* Bar chart mockup */}
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background:
                              h > 80
                                ? "linear-gradient(to top, #7EB63E, #059669)"
                                : "rgba(255,255,255,0.2)",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-white rounded-xl px-4 py-2 shadow-lg animate-pulse-glow">
                <p className="text-xs font-medium">AI-Powered</p>
                <p className="text-lg font-bold">99.2%</p>
                <p className="text-xs opacity-80">Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
