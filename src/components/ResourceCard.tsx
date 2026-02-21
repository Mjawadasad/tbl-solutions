"use client";

import { ArrowRight, Calendar, BookOpen, Video, FileText, FolderOpen } from "lucide-react";

const categoryIcons: Record<string, typeof BookOpen> = {
  Blog: BookOpen,
  Webinar: Video,
  "White Paper": FileText,
  "Case Study": FolderOpen,
  Guide: BookOpen,
};

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  date?: string;
  color: string;
}

export default function ResourceCard({
  title,
  description,
  category,
  date,
  color,
}: ResourceCardProps) {
  const Icon = categoryIcons[category] || BookOpen;

  return (
    <div className="card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${color}`} />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {date && (
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
          )}
          <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all ml-auto">
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
