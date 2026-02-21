import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import FloatingWidgets from "@/components/FloatingWidgets";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TBL Solutions | AI-Powered Medical Billing & Revenue Cycle Management",
  description:
    "AI-driven medical billing with seamlessly integrated PMS and EHR designed for modern healthcare workflows. Trusted by 150,000+ providers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-body">
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
