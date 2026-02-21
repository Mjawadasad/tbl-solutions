import {
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
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  heroSubtitle: string;
  valueProps: {
    title: string;
    description: string;
  }[];
  whySection: {
    title: string;
    points: string[];
  };
  stats: { label: string; value: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    shortTitle: "RCM",
    icon: DollarSign,
    description: "End-to-end revenue cycle management that maximizes collections, reduces denials, and accelerates cash flow for healthcare providers of all sizes.",
    heroSubtitle: "Optimize every step of your revenue cycle with AI-powered automation and expert oversight.",
    valueProps: [
      { title: "Claim Accuracy", description: "AI-powered claim scrubbing ensures 98%+ first-pass acceptance rate, significantly reducing denials and rework." },
      { title: "Faster Reimbursement", description: "Streamlined workflows and electronic submissions cut your average days in A/R to under 30 days." },
      { title: "Denial Management", description: "Proactive denial prevention with root cause analysis and automated appeal processes." },
      { title: "Real-Time Analytics", description: "Comprehensive dashboards provide instant visibility into financial performance and KPIs." },
      { title: "Compliance Assurance", description: "Stay compliant with HIPAA, CMS, and payer-specific regulations with automated checks." },
      { title: "Dedicated Support", description: "Your assigned account manager and certified billing team are available 24/7." },
    ],
    whySection: {
      title: "Why TBL Solutions for RCM?",
      points: [
        "150,000+ providers trust our RCM solutions",
        "98% first-pass clean claims rate",
        "30% average reduction in accounts receivable",
        "24/7 dedicated account management",
        "AAPC-certified coding professionals",
        "AI-powered denial prevention",
      ],
    },
    stats: [
      { label: "Clean Claims Rate", value: "98%" },
      { label: "Revenue Increase", value: "20%" },
      { label: "A/R Reduction", value: "30%" },
      { label: "Turnaround Time", value: "7 Days" },
    ],
  },
  {
    slug: "medical-billing",
    title: "Medical Billing Services",
    shortTitle: "Medical Billing",
    icon: Receipt,
    description: "Comprehensive medical billing services that eliminate administrative burden and maximize practice revenue through expert claim management.",
    heroSubtitle: "Let our certified billing experts handle your claims while you focus on patient care.",
    valueProps: [
      { title: "End-to-End Billing", description: "From charge capture to payment posting, we manage every aspect of your billing cycle." },
      { title: "Coding Excellence", description: "AAPC-certified coders ensure accurate code assignment for maximum reimbursement." },
      { title: "Payer Follow-Up", description: "Aggressive follow-up on unpaid and underpaid claims to recover every dollar owed." },
      { title: "Patient Billing", description: "Professional patient statement management and payment plan coordination." },
      { title: "Credentialing", description: "Provider enrollment and credentialing services to maintain active payer contracts." },
      { title: "Reporting", description: "Detailed monthly reports with actionable insights into your practice's financial health." },
    ],
    whySection: {
      title: "Why Choose Our Medical Billing?",
      points: [
        "88% first submission payment rate",
        "Reduce overhead costs by 40%",
        "Zero setup fees and no long-term contracts",
        "HIPAA-compliant processes",
        "Experienced team across 50+ specialties",
        "Seamless EHR/PMS integration",
      ],
    },
    stats: [
      { label: "Payment Rate", value: "88%" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Specialties", value: "50+" },
      { label: "Provider Trust", value: "150K+" },
    ],
  },
  {
    slug: "laboratory-billing",
    title: "Laboratory Billing Services",
    shortTitle: "Lab Billing",
    icon: FlaskConical,
    description: "Specialized laboratory billing solutions that handle the unique complexities of lab claims, ensuring maximum reimbursement for diagnostic services.",
    heroSubtitle: "Navigate complex lab billing regulations with confidence and maximize your lab revenue.",
    valueProps: [
      { title: "Specialized Lab Coding", description: "Expert coding for molecular diagnostics, pathology, and clinical lab services." },
      { title: "Payer Compliance", description: "Stay current with LCD/NCD requirements and medical necessity documentation." },
      { title: "ABN Management", description: "Automated Advance Beneficiary Notice tracking and patient liability management." },
      { title: "Fee Schedule Optimization", description: "Regular analysis and updates to maximize reimbursement across all payers." },
      { title: "Reference Lab Billing", description: "Efficient management of reference lab specimen tracking and billing." },
      { title: "Regulatory Updates", description: "Stay ahead of PAMA, CLFS, and other regulatory changes affecting lab billing." },
    ],
    whySection: {
      title: "Why TBL Solutions for Lab Billing?",
      points: [
        "Specialized in complex lab billing scenarios",
        "Expert navigation of PAMA regulations",
        "95%+ claim acceptance rate for lab services",
        "Real-time eligibility verification",
        "Molecular and genetic testing expertise",
        "Compliance-first approach",
      ],
    },
    stats: [
      { label: "Acceptance Rate", value: "95%" },
      { label: "Revenue Recovery", value: "25%" },
      { label: "Processing Time", value: "48hrs" },
      { label: "Compliance Rate", value: "100%" },
    ],
  },
  {
    slug: "imaging-billing",
    title: "Imaging Billing Services",
    shortTitle: "Imaging Billing",
    icon: ScanLine,
    description: "Expert imaging and radiology billing services that capture full reimbursement for diagnostic imaging procedures.",
    heroSubtitle: "Maximize radiology revenue with specialized billing expertise for all imaging modalities.",
    valueProps: [
      { title: "Modality Expertise", description: "Specialized billing for MRI, CT, X-ray, Ultrasound, PET, and interventional radiology." },
      { title: "Technical & Professional", description: "Accurate split billing for TC and 26 modifier claims across facility types." },
      { title: "Prior Authorization", description: "Streamlined prior auth processes to prevent imaging claim denials." },
      { title: "Contrast Coding", description: "Proper coding for with/without contrast studies and multi-sequence exams." },
      { title: "ACR Compliance", description: "Ensure compliance with American College of Radiology billing guidelines." },
      { title: "RIS Integration", description: "Seamless integration with Radiology Information Systems for efficient workflows." },
    ],
    whySection: {
      title: "Why Choose Our Imaging Billing?",
      points: [
        "Expert radiology billing team",
        "All imaging modalities covered",
        "Prior authorization management",
        "97% clean claims rate for imaging",
        "Real-time claim tracking",
        "Dedicated radiology billing specialists",
      ],
    },
    stats: [
      { label: "Clean Claims", value: "97%" },
      { label: "Revenue Growth", value: "22%" },
      { label: "Denial Rate", value: "<3%" },
      { label: "Auth Success", value: "99%" },
    ],
  },
  {
    slug: "physician-billing",
    title: "Physician Billing Services",
    shortTitle: "Physician Billing",
    icon: Stethoscope,
    description: "Tailored physician billing solutions that address the unique needs of individual practitioners and physician groups.",
    heroSubtitle: "Focus on patient care while we optimize your billing and maximize collections.",
    valueProps: [
      { title: "Multi-Specialty Support", description: "Expert billing across 50+ medical specialties with specialty-specific coding." },
      { title: "E/M Coding", description: "Accurate evaluation and management coding aligned with 2024 CMS guidelines." },
      { title: "Modifier Management", description: "Proper modifier assignment to prevent claim denials and maximize reimbursement." },
      { title: "Patient Collections", description: "Compassionate and effective patient billing with flexible payment options." },
      { title: "Telehealth Billing", description: "Expertise in virtual visit coding and payer-specific telehealth requirements." },
      { title: "Quality Reporting", description: "MIPS/MACRA quality reporting and performance optimization." },
    ],
    whySection: {
      title: "Why TBL Solutions for Physician Billing?",
      points: [
        "50+ medical specialties served",
        "97% collection ratio",
        "MIPS/MACRA compliance support",
        "Telehealth billing expertise",
        "No setup fees or long-term contracts",
        "Dedicated account manager per practice",
      ],
    },
    stats: [
      { label: "Collection Ratio", value: "97%" },
      { label: "Specialties", value: "50+" },
      { label: "Client Retention", value: "98%" },
      { label: "Avg Revenue Lift", value: "18%" },
    ],
  },
  {
    slug: "ar-recovery",
    title: "A/R Recovery Analysis",
    shortTitle: "AR Recovery",
    icon: TrendingUp,
    description: "Aggressive accounts receivable recovery services that reclaim lost revenue from aging claims and underpayments.",
    heroSubtitle: "Recover revenue you thought was lost with our systematic A/R recovery approach.",
    valueProps: [
      { title: "Aging Analysis", description: "Comprehensive analysis of your A/R aging buckets to prioritize high-value recovery opportunities." },
      { title: "Underpayment Detection", description: "Automated contract analysis to identify and appeal underpaid claims." },
      { title: "Denial Appeals", description: "Expert appeal writing with high overturn rates for denied and rejected claims." },
      { title: "Payer Negotiations", description: "Direct engagement with payers to resolve complex claim disputes." },
      { title: "Write-off Reduction", description: "Systematic review of write-offs to recover previously abandoned revenue." },
      { title: "Preventive Analysis", description: "Root cause analysis to prevent future A/R issues and improve cash flow." },
    ],
    whySection: {
      title: "Why Choose Our A/R Recovery?",
      points: [
        "30% average reduction in total A/R",
        "Recovery of claims 120+ days old",
        "90%+ appeal success rate",
        "No recovery, no fee model available",
        "Detailed recovery reporting",
        "Proactive denial prevention",
      ],
    },
    stats: [
      { label: "A/R Reduction", value: "30%" },
      { label: "Appeal Success", value: "90%" },
      { label: "Avg Recovery", value: "$2.5M" },
      { label: "ROI", value: "10x" },
    ],
  },
  {
    slug: "hospital-billing",
    title: "Hospital Billing Services",
    shortTitle: "Hospital Billing",
    icon: Building2,
    description: "Enterprise-grade hospital billing and revenue cycle management for acute care facilities, health systems, and hospital networks.",
    heroSubtitle: "Scale your hospital's revenue operations with enterprise RCM solutions.",
    valueProps: [
      { title: "Inpatient Billing", description: "DRG optimization and complex inpatient claim management for maximum reimbursement." },
      { title: "Outpatient Billing", description: "APC-based billing with proper modifier and revenue code assignment." },
      { title: "CDI Programs", description: "Clinical Documentation Improvement to support accurate coding and higher reimbursement." },
      { title: "Charge Capture", description: "Comprehensive charge capture auditing to prevent revenue leakage." },
      { title: "Compliance Auditing", description: "Regular internal audits to ensure OIG compliance and reduce risk." },
      { title: "System Integration", description: "Seamless integration with Epic, Cerner, MEDITECH, and other hospital EHRs." },
    ],
    whySection: {
      title: "Why TBL Solutions for Hospital Billing?",
      points: [
        "Enterprise-scale RCM solutions",
        "DRG and APC optimization expertise",
        "Clinical Documentation Improvement",
        "Integration with major hospital EHRs",
        "Compliance-focused approach",
        "Dedicated hospital billing team",
      ],
    },
    stats: [
      { label: "Revenue Capture", value: "99%" },
      { label: "CDI Impact", value: "+15%" },
      { label: "Compliance Rate", value: "100%" },
      { label: "EHR Partners", value: "20+" },
    ],
  },
  {
    slug: "staffing",
    title: "Healthcare Staffing & Workforce",
    shortTitle: "Staffing",
    icon: Users,
    description: "On-demand healthcare staffing solutions providing certified billing professionals, coders, and administrative staff.",
    heroSubtitle: "Access top healthcare talent with our flexible staffing solutions.",
    valueProps: [
      { title: "Certified Coders", description: "AAPC and AHIMA certified medical coders ready to support your operations." },
      { title: "Billing Specialists", description: "Experienced billing professionals across all major specialties and payer types." },
      { title: "Flexible Models", description: "Choose from full-time, part-time, or project-based staffing arrangements." },
      { title: "Quick Deployment", description: "Pre-vetted candidates ready to start within days, not weeks." },
      { title: "Quality Assurance", description: "Ongoing performance monitoring and quality checks for all placed staff." },
      { title: "Cost Savings", description: "Reduce overhead by 50%+ compared to in-house hiring and training costs." },
    ],
    whySection: {
      title: "Why Choose TBL Force?",
      points: [
        "50%+ reduction in staffing overhead",
        "1,500+ AAPC certified professionals",
        "Rapid deployment in 48 hours",
        "Flexible engagement models",
        "Quality guaranteed",
        "Specialized healthcare talent only",
      ],
    },
    stats: [
      { label: "Cost Reduction", value: "50%" },
      { label: "Certified Staff", value: "1,500+" },
      { label: "Deployment Time", value: "48hrs" },
      { label: "Retention Rate", value: "95%" },
    ],
  },
  {
    slug: "bi-reporting",
    title: "BI Reporting Services",
    shortTitle: "BI Reporting",
    icon: BarChart3,
    description: "Advanced business intelligence and reporting solutions that transform your healthcare data into actionable insights.",
    heroSubtitle: "Make data-driven decisions with powerful analytics and custom reporting.",
    valueProps: [
      { title: "Custom Dashboards", description: "Tailored dashboards for executive, operational, and clinical stakeholders." },
      { title: "Financial Analytics", description: "Deep revenue analysis including payer mix, procedure profitability, and trend forecasting." },
      { title: "Operational Metrics", description: "Track productivity, efficiency, and performance across departments and providers." },
      { title: "Predictive Analytics", description: "AI-powered predictions for revenue forecasting and denial likelihood." },
      { title: "Benchmarking", description: "Compare your performance against industry standards and peer organizations." },
      { title: "Automated Reports", description: "Scheduled delivery of key reports to stakeholders on your timeline." },
    ],
    whySection: {
      title: "Why Choose Our BI Services?",
      points: [
        "Custom healthcare analytics platform",
        "Real-time data visualization",
        "AI-powered predictive insights",
        "Industry benchmarking",
        "Automated report delivery",
        "HIPAA-compliant data handling",
      ],
    },
    stats: [
      { label: "Data Sources", value: "100+" },
      { label: "Report Types", value: "50+" },
      { label: "Insight Accuracy", value: "97%" },
      { label: "Client Satisfaction", value: "99%" },
    ],
  },
  {
    slug: "rpa",
    title: "Robotic Process Automation",
    shortTitle: "RPA",
    icon: Bot,
    description: "Intelligent automation solutions that eliminate repetitive tasks and accelerate healthcare revenue cycle operations.",
    heroSubtitle: "Automate routine tasks and free your team to focus on high-value activities.",
    valueProps: [
      { title: "Claim Status Checks", description: "Automated real-time claim status verification across all major payers." },
      { title: "Eligibility Verification", description: "Instant automated insurance eligibility and benefits verification." },
      { title: "Payment Posting", description: "Automated ERA/EOB processing and payment posting with exception handling." },
      { title: "Prior Authorization", description: "Automated prior auth submission and status tracking workflows." },
      { title: "Data Entry", description: "Intelligent data extraction and entry from multiple document formats." },
      { title: "Process Mining", description: "Identify automation opportunities across your revenue cycle workflows." },
    ],
    whySection: {
      title: "Why Choose Our RPA Solutions?",
      points: [
        "80% reduction in manual tasks",
        "24/7 automated processing",
        "99.9% accuracy rate",
        "Quick ROI within 90 days",
        "Scalable bot infrastructure",
        "Healthcare-specific automation",
      ],
    },
    stats: [
      { label: "Task Reduction", value: "80%" },
      { label: "Accuracy", value: "99.9%" },
      { label: "ROI Timeline", value: "90 Days" },
      { label: "Uptime", value: "24/7" },
    ],
  },
  {
    slug: "data-integration",
    title: "Healthcare Data Integration",
    shortTitle: "Data Integration",
    icon: Database,
    description: "Seamless healthcare data integration services connecting your EHR, PMS, clearinghouse, and billing systems into a unified ecosystem.",
    heroSubtitle: "Break down data silos and create a connected healthcare technology ecosystem.",
    valueProps: [
      { title: "EHR Integration", description: "Bi-directional integration with Epic, Cerner, Allscripts, eClinicalWorks, and more." },
      { title: "HL7/FHIR", description: "Standards-based data exchange using HL7 v2, HL7 FHIR, and X12 EDI protocols." },
      { title: "Clearinghouse Connect", description: "Direct connections to major clearinghouses for efficient claim submission." },
      { title: "Data Migration", description: "Safe and accurate migration of historical data between systems." },
      { title: "API Development", description: "Custom API development for specialized integration requirements." },
      { title: "Data Quality", description: "Automated data validation and quality monitoring across all integrations." },
    ],
    whySection: {
      title: "Why Choose Our Data Integration?",
      points: [
        "50+ EHR/PMS integrations supported",
        "HL7 FHIR and X12 expertise",
        "Zero-downtime migrations",
        "Custom API development",
        "Real-time data synchronization",
        "HIPAA-compliant data handling",
      ],
    },
    stats: [
      { label: "Integrations", value: "50+" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Data Accuracy", value: "100%" },
      { label: "Protocols", value: "HL7/FHIR" },
    ],
  },
  {
    slug: "qms",
    title: "QMS & Lean Six Sigma",
    shortTitle: "QMS",
    icon: Award,
    description: "Quality Management Systems and Lean Six Sigma methodologies to drive continuous improvement in healthcare operations.",
    heroSubtitle: "Achieve operational excellence with proven quality management frameworks.",
    valueProps: [
      { title: "Process Optimization", description: "Lean Six Sigma DMAIC methodology to identify and eliminate waste in revenue cycle processes." },
      { title: "Quality Auditing", description: "Regular quality audits to maintain coding accuracy and compliance standards." },
      { title: "SOP Development", description: "Create and maintain standard operating procedures for consistent performance." },
      { title: "Training Programs", description: "Continuous education and certification programs for billing and coding teams." },
      { title: "KPI Framework", description: "Establish and track key performance indicators aligned with organizational goals." },
      { title: "Continuous Improvement", description: "Kaizen-based culture of ongoing incremental improvements across all processes." },
    ],
    whySection: {
      title: "Why Choose Our QMS Services?",
      points: [
        "Six Sigma certified professionals",
        "Proven DMAIC methodology",
        "Measurable quality improvements",
        "Custom KPI frameworks",
        "Ongoing training programs",
        "ISO-aligned processes",
      ],
    },
    stats: [
      { label: "Quality Score", value: "99.5%" },
      { label: "Process Efficiency", value: "+35%" },
      { label: "Error Reduction", value: "90%" },
      { label: "Certifications", value: "ISO" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
