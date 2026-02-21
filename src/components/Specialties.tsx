"use client";

import {
  Scissors,
  Brain,
  Heart,
  Microscope,
  Sun,
  Pill,
  Baby,
  Eye,
  Bone,
  Ear,
  Stethoscope,
  Syringe,
  Activity,
  Cross,
  Thermometer,
  ShieldPlus,
} from "lucide-react";

const specialties = [
  { name: "Ambulatory Surgery", icon: Scissors },
  { name: "Neurosurgery", icon: Brain },
  { name: "Cardiology", icon: Heart },
  { name: "Pathology", icon: Microscope },
  { name: "Dermatology", icon: Sun },
  { name: "Oncology", icon: Pill },
  { name: "OB/GYN", icon: Baby },
  { name: "Ophthalmology", icon: Eye },
  { name: "Orthopedics", icon: Bone },
  { name: "ENT", icon: Ear },
  { name: "Internal Medicine", icon: Stethoscope },
  { name: "Pain Management", icon: Syringe },
  { name: "Pulmonology", icon: Activity },
  { name: "Emergency Medicine", icon: Cross },
  { name: "Rheumatology", icon: Thermometer },
  { name: "Urology", icon: ShieldPlus },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-light text-accent-dark text-sm font-semibold rounded-full mb-4">
            Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serving <span className="text-primary">50+ Medical</span>{" "}
            Specialties
          </h2>
          <p className="text-lg text-gray-500">
            From ambulatory surgery to urology, our certified team has deep
            expertise in billing and coding across all major healthcare
            specialties.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {specialties.map((s) => (
            <div
              key={s.name}
              className="card-hover group bg-white rounded-xl border border-gray-100 p-5 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-light group-hover:bg-primary flex items-center justify-center transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                {s.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500">
            Don&apos;t see your specialty?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact us
            </a>{" "}
            — we cover 50+ specialties.
          </p>
        </div>
      </div>
    </section>
  );
}
