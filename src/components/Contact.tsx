"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "800-640-6409",
    link: "tel:800-640-6409",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@tblsolutions.com",
    link: "mailto:info@tblsolutions.com",
  },
  {
    icon: MapPin,
    title: "California Office",
    value: "18001 Sky Park Circle, Irvine, CA 92614",
    link: "#",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 12 hours",
    link: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-primary">Transform</span> Your
              Practice?
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Request a demo and discover how TBL Solutions can optimize your
              revenue, streamline operations, and reduce administrative burden.
            </p>

            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <c.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {c.title}
                    </h4>
                    {c.link ? (
                      <a
                        href={c.link}
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-gray-500">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Request a Demo
            </h3>
            <p className="text-gray-500 mb-8">
              A member of our team will get in touch within 12 hours.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Practice Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="Your Practice"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Monthly Collections
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="$50,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Total A/R
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900"
                    placeholder="$100,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-gray-900"
                  placeholder="Tell us about your practice and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
              >
                <Send className="w-5 h-5" />
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
