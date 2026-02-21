"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "AI Products": [
    { label: "Medical Billing Software", href: "/ai-products/medical-billing-software" },
    { label: "AI Scribe", href: "/ai-products/ai-scribe" },
    { label: "AI Medical Coding", href: "/ai-products/ai-medical-coding" },
  ],
  Services: [
    { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
    { label: "Medical Billing", href: "/services/medical-billing" },
    { label: "Laboratory Billing", href: "/services/laboratory-billing" },
    { label: "AR Recovery", href: "/services/ar-recovery" },
    { label: "Hospital Billing", href: "/services/hospital-billing" },
  ],
  Company: [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Webinars", href: "/webinars" },
  ],
  Resources: [
    { label: "Testimonials", href: "/testimonials" },
    { label: "White Papers", href: "/whitepapers" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to optimize your revenue cycle?
              </h3>
              <p className="text-white/80 mt-2">
                Join 150,000+ providers who trust TBL Solutions
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-slide inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-dark font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">TBL</span>
                <span className="text-xl font-bold text-accent ml-1">Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI-powered medical billing and revenue cycle management solutions
              trusted by 150,000+ healthcare providers since 2012.
            </p>

            <div className="space-y-3">
              <a
                href="tel:800-640-6409"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                800-640-6409
              </a>
              <a
                href="mailto:info@tblsolutions.com"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@tblsolutions.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                18001 Sky Park Circle, Irvine, CA 92614
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} TBL Solutions. All rights
              reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
