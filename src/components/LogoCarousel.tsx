"use client";

import { Shield, Award, CheckCircle, Star, BadgeCheck, Globe } from "lucide-react";

const partners = [
  { name: "BBB A+ Rated", icon: Shield },
  { name: "NILA Certified", icon: Award },
  { name: "ISO 27001", icon: CheckCircle },
  { name: "ONC Authorized", icon: BadgeCheck },
  { name: "HIPAA Compliant", icon: Shield },
  { name: "AAPC Partner", icon: Star },
  { name: "SOC 2 Certified", icon: CheckCircle },
  { name: "HL7 FHIR", icon: Globe },
  { name: "CMS Approved", icon: Award },
  { name: "MGMA Member", icon: BadgeCheck },
];

export default function LogoCarousel() {
  return (
    <section className="bg-white py-6 border-y border-gray-100 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...partners, ...partners].map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div
                key={i}
                className="inline-flex items-center gap-2 mx-8 text-gray-400 hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
