"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  Brain,
  Mic,
  Code,
  DollarSign,
  Receipt,
  FlaskConical,
  ScanLine,
  Stethoscope,
  TrendingUp,
  Building2,
  Users,
  BarChart3,
  Bot,
  Database,
  Award,
  MessageSquare,
  BookOpen,
  Video,
  FileText,
  FolderOpen,
  BarChart,
  Info,
  Building,
  Briefcase,
  Heart,
} from "lucide-react";
import DemoModal from "./DemoModal";

const aiProducts = [
  { name: "Medical Billing Software", icon: Brain, href: "/ai-products/medical-billing-software" },
  { name: "AI Scribe", icon: Mic, href: "/ai-products/ai-scribe" },
  { name: "AI Medical Coding", icon: Code, href: "/ai-products/ai-medical-coding" },
];

const aiAudienceTabs = [
  { label: "Hospitals", icon: Building, items: ["Hospital RCM Suite", "Inpatient Billing", "Outpatient Management"] },
  { label: "RCM Vendors", icon: BarChart, items: ["White-Label Solutions", "API Integrations", "Analytics Dashboard"] },
  { label: "Physician Groups", icon: Stethoscope, items: ["Multi-Provider Billing", "Credentialing", "Practice Analytics"] },
  { label: "Clinics", icon: Heart, items: ["Clinic Billing", "EHR Integration", "Patient Portal"] },
  { label: "Billing Companies", icon: Briefcase, items: ["Outsourced RCM", "Coding Services", "AR Management"] },
];

const services = [
  {
    category: "Revenue Cycle Management",
    items: [
      { name: "Revenue Cycle Management", icon: DollarSign, href: "/services/revenue-cycle-management" },
      { name: "Medical Billing", icon: Receipt, href: "/services/medical-billing" },
      { name: "Laboratory Billing", icon: FlaskConical, href: "/services/laboratory-billing" },
      { name: "Imaging Billing", icon: ScanLine, href: "/services/imaging-billing" },
      { name: "Physician Billing", icon: Stethoscope, href: "/services/physician-billing" },
      { name: "AR Recovery", icon: TrendingUp, href: "/services/ar-recovery" },
      { name: "Hospital Billing", icon: Building2, href: "/services/hospital-billing" },
    ],
  },
  {
    category: "Value Added Services",
    items: [
      { name: "Staffing & Workforce", icon: Users, href: "/services/staffing" },
      { name: "BI Reporting Services", icon: BarChart3, href: "/services/bi-reporting" },
      { name: "Robotic Process Automation", icon: Bot, href: "/services/rpa" },
      { name: "Healthcare Data Integration", icon: Database, href: "/services/data-integration" },
      { name: "QMS & Lean Six Sigma", icon: Award, href: "/services/qms" },
    ],
  },
];

const resources = [
  { name: "Testimonials", icon: MessageSquare, href: "/testimonials" },
  { name: "Blog", icon: BookOpen, href: "/blog" },
  { name: "Webinars", icon: Video, href: "/webinars" },
  { name: "White Papers", icon: FileText, href: "/whitepapers" },
  { name: "Case Studies", icon: FolderOpen, href: "/case-studies" },
  { name: "Guides", icon: BarChart, href: "/guides" },
  { name: "About Us", icon: Info, href: "/about-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeAiTab, setActiveAiTab] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  const toggleMobileSection = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex items-center gap-6">
            <a
              href="tel:800-640-6409"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>800-640-6409</span>
            </a>
            <a
              href="mailto:info@tblsolutions.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@tblsolutions.com</span>
            </a>
          </div>
          <div className="text-xs opacity-80">
            Trusted by 150,000+ providers
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary">TBL</span>
                <span className="text-xl font-bold text-accent ml-1">Solutions</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* AI Products - Tabbed Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("ai")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors">
                  AI-Products <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "ai" && (
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[600px] overflow-hidden">
                    {/* Products Row */}
                    <div className="p-4 border-b border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                        Our Products
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {aiProducts.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light transition-colors"
                          >
                            <item.icon className="w-5 h-5 text-primary" />
                            <span className="text-gray-700 font-medium text-sm">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Audience Tabs */}
                    <div className="flex">
                      <div className="w-48 bg-gray-50 border-r border-gray-100 p-2">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3 pt-2">
                          Solutions For
                        </h4>
                        {aiAudienceTabs.map((tab, i) => {
                          const Icon = tab.icon;
                          return (
                            <button
                              key={tab.label}
                              onMouseEnter={() => setActiveAiTab(i)}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                                activeAiTab === i
                                  ? "bg-primary text-white"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              {tab.label}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex-1 p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                          {aiAudienceTabs[activeAiTab].label} Solutions
                        </h4>
                        <ul className="space-y-2">
                          {aiAudienceTabs[activeAiTab].items.map((item) => (
                            <li key={item}>
                              <Link
                                href="#"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary py-1.5 px-2 rounded-lg hover:bg-primary-light transition-colors"
                              >
                                <ChevronRight className="w-3.5 h-3.5 text-primary" />
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 p-6 min-w-[560px]">
                    <div className="grid grid-cols-2 gap-6">
                      {services.map((group) => (
                        <div key={group.category}>
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                            {group.category}
                          </h4>
                          {group.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-light transition-colors"
                            >
                              <item.icon className="w-4 h-4 text-primary" />
                              <span className="text-gray-700 text-sm">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/specialties"
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Specialties
              </Link>

              {/* Resources */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors">
                  Resources <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "resources" && (
                  <div className="absolute top-full right-0 bg-white rounded-xl shadow-xl border border-gray-100 p-4 min-w-[240px]">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary-light transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        <span className="text-gray-700 text-sm font-medium">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDemoOpen(true)}
                className="btn-slide hidden sm:inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Request Demo
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-700"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {/* AI Products Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection("ai")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                >
                  AI-Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "ai" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "ai" && (
                  <div className="pl-4 space-y-1 pb-2">
                    {aiProducts.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary-light"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection("services")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "services" && (
                  <div className="pl-4 space-y-3 pb-2">
                    {services.map((group) => (
                      <div key={group.category}>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider px-4 py-1">
                          {group.category}
                        </div>
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary-light"
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/specialties"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
              >
                Specialties
              </Link>

              {/* Resources Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection("resources")}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                >
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "resources" && (
                  <div className="pl-4 space-y-1 pb-2">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary-light"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setDemoOpen(true);
                }}
                className="btn-slide w-full px-4 py-3 bg-accent text-white text-center rounded-lg font-semibold mt-2"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </header>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
