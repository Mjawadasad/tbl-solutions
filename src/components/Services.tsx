"use client";

import {
  DollarSign,
  Receipt,
  TrendingUp,
  Monitor,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    stat: "90%",
    statText: "improved claim accuracy",
    description:
      "End-to-end RCM solutions that scale with your practice. Our AI-driven approach ensures clean claims, faster payments, and maximized revenue.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Receipt,
    title: "Medical Billing Services",
    stat: "88%",
    statText: "first submission payment rate",
    description:
      "Comprehensive billing services with a 20% revenue increase guarantee. Our certified billers handle everything from coding to collections.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "A/R Recovery Analysis",
    stat: "30%",
    statText: "reduction in A/R",
    description:
      "Strategic accounts receivable recovery that identifies improvement opportunities and develops efficient collection solutions.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Monitor,
    title: "Practice Management Software",
    stat: "75%",
    statText: "improved overall efficiency",
    description:
      "Cloud-based, comprehensive PMS with Power BI dashboards, patient registration, insurance verification, and claim management.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "TBL Force (Staffing)",
    stat: "50%+",
    statText: "reduction in overhead costs",
    description:
      "Flexible healthcare staffing solutions that reduce overhead while maintaining quality. From billing specialists to certified coders.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From revenue cycle management to AI-powered billing, we provide
            end-to-end solutions designed for modern healthcare providers.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-hover group relative bg-white rounded-2xl border border-gray-100 p-8 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}
              >
                <service.icon
                  className={`w-7 h-7 bg-gradient-to-r ${service.color} bg-clip-text`}
                  style={{ color: "inherit" }}
                />
              </div>

              {/* Stat badge */}
              <div className="inline-flex items-center gap-2 bg-accent-light text-accent-dark text-sm font-bold rounded-full px-3 py-1 mb-4">
                <span className="text-lg">{service.stat}</span>
                <span className="text-xs font-medium">{service.statText}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
