"use client";

import { Users, Shield, Lightbulb, HandshakeIcon, Star } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "People First",
    description: "We put our clients, their patients, and our team members at the center of everything we do.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency, honesty, and ethical standards in every interaction.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push the boundaries of healthcare technology with AI-powered solutions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HandshakeIcon,
    title: "Teamwork",
    description: "Collaboration drives our success — we work as one team with our clients and each other.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for the highest quality in every claim, every interaction, and every solution.",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Values That <span className="text-primary">Drive Us</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our core values guide every decision and define who we are as an organization.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-6 text-center border border-gray-100"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${v.color} flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
