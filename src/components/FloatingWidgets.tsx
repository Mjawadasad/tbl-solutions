"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, X } from "lucide-react";

export default function FloatingWidgets() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {open && (
        <div className="flex flex-col gap-3 animate-fade-up">
          <a
            href="tel:800-640-6409"
            className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all"
            title="Call us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:info@tblsolutions.com"
            className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition-all"
            title="Email us"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 ${
          open ? "bg-gray-700 rotate-0" : "bg-primary animate-pulse-glow"
        }`}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
