"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    name: "California Office (HQ)",
    address: "18001 Sky Park Circle, Irvine, CA 92614",
    phone: "800-640-6409",
    email: "info@tblsolutions.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
  },
  {
    name: "New Mexico Office",
    address: "4801 Lang Ave NE, Suite 110, Albuquerque, NM 87109",
    phone: "800-640-6409",
    email: "info@tblsolutions.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM MST",
  },
];

export default function OfficeLocations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Offices</span>
          </h2>
          <p className="text-gray-500">Visit us at one of our locations</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
