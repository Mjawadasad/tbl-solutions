import { Brain, Mic, Code, type LucideIcon } from "lucide-react";

export interface AIProductData {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  stats: { label: string; value: string }[];
}

export const aiProducts: AIProductData[] = [
  {
    slug: "medical-billing-software",
    title: "Medical Billing Software",
    icon: Brain,
    tagline: "AI-Powered Billing Automation",
    description:
      "Our flagship medical billing software leverages artificial intelligence to automate claim submission, reduce denials, and accelerate reimbursement across all specialties and payers.",
    features: [
      { title: "AI Claim Scrubbing", description: "Automatically identifies and corrects claim errors before submission, achieving 98%+ first-pass acceptance." },
      { title: "Real-Time Eligibility", description: "Instant insurance verification and benefits checking at the point of service." },
      { title: "Smart Denial Management", description: "AI-powered root cause analysis with automated appeal generation and tracking." },
      { title: "Revenue Analytics Dashboard", description: "Comprehensive real-time dashboards with financial KPIs and trend analysis." },
      { title: "Multi-Payer Support", description: "Seamless claim submission to all commercial, Medicare, and Medicaid payers." },
      { title: "EHR Integration", description: "Bi-directional integration with 50+ EHR/PMS systems for seamless workflows." },
    ],
    benefits: [
      "98% first-pass clean claims rate",
      "40% reduction in claim denials",
      "20% increase in collections",
      "50% faster payment processing",
      "HIPAA-compliant cloud platform",
      "24/7 technical support",
    ],
    stats: [
      { label: "Clean Claims", value: "98%" },
      { label: "Denial Reduction", value: "40%" },
      { label: "Revenue Increase", value: "20%" },
      { label: "EHR Integrations", value: "50+" },
    ],
  },
  {
    slug: "ai-scribe",
    title: "AI Scribe",
    icon: Mic,
    tagline: "Intelligent Clinical Documentation",
    description:
      "AI Scribe transforms clinical conversations into accurate, compliant medical documentation in real-time, freeing providers from the burden of manual note-taking.",
    features: [
      { title: "Real-Time Transcription", description: "Advanced speech recognition captures provider-patient conversations with 99%+ accuracy." },
      { title: "Smart Formatting", description: "Automatically structures notes into SOAP format, HPI, ROS, and exam templates." },
      { title: "Code Suggestions", description: "AI-powered ICD-10 and CPT code suggestions based on documentation content." },
      { title: "Specialty Templates", description: "Pre-built and customizable templates for 50+ medical specialties." },
      { title: "EHR Auto-Populate", description: "Direct integration pushes completed notes into your EHR with one click." },
      { title: "Compliance Checks", description: "Automated documentation quality checks for medical necessity and coding accuracy." },
    ],
    benefits: [
      "2+ hours saved per provider per day",
      "99% transcription accuracy",
      "Reduce documentation time by 70%",
      "Improve coding accuracy and revenue",
      "Eliminate after-hours charting",
      "HIPAA and SOC 2 compliant",
    ],
    stats: [
      { label: "Time Saved", value: "2hrs/day" },
      { label: "Accuracy", value: "99%" },
      { label: "Doc Time Cut", value: "70%" },
      { label: "Specialties", value: "50+" },
    ],
  },
  {
    slug: "ai-medical-coding",
    title: "AI Medical Coding",
    icon: Code,
    tagline: "Autonomous Coding Intelligence",
    description:
      "Our AI Medical Coding engine automatically assigns accurate ICD-10, CPT, and HCPCS codes from clinical documentation, dramatically reducing coding time and improving accuracy.",
    features: [
      { title: "Auto-Code Assignment", description: "AI reads clinical notes and assigns appropriate diagnosis and procedure codes automatically." },
      { title: "NLP Engine", description: "Advanced natural language processing extracts clinical concepts from unstructured text." },
      { title: "Coding Compliance", description: "Built-in NCCI edits, LCD/NCD checks, and modifier validation." },
      { title: "Audit Trail", description: "Complete transparency with AI reasoning and confidence scores for every code." },
      { title: "Coder Workflow", description: "AI-assisted workflow for human coders with smart suggestions and validation." },
      { title: "Continuous Learning", description: "Models improve continuously with feedback from your coding team." },
    ],
    benefits: [
      "95% coding accuracy out of the box",
      "80% reduction in coding time",
      "Reduce coding backlog by 90%",
      "Built-in compliance validation",
      "Support for all code sets (ICD-10, CPT, HCPCS)",
      "Seamless human-in-the-loop workflow",
    ],
    stats: [
      { label: "Accuracy", value: "95%" },
      { label: "Time Savings", value: "80%" },
      { label: "Backlog Cut", value: "90%" },
      { label: "Code Sets", value: "All" },
    ],
  },
];

export function getAIProductBySlug(slug: string): AIProductData | undefined {
  return aiProducts.find((p) => p.slug === slug);
}

export function getAllAIProductSlugs(): string[] {
  return aiProducts.map((p) => p.slug);
}
