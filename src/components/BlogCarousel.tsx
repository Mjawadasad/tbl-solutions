"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "How AI is Revolutionizing Medical Billing in 2024",
    excerpt: "Discover how artificial intelligence is transforming the healthcare revenue cycle with automated coding, claim scrubbing, and predictive analytics.",
    category: "AI & Technology",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Reducing Claim Denials: A Complete Guide",
    excerpt: "Learn proven strategies to minimize claim denials and maximize your practice's revenue with our comprehensive denial management approach.",
    category: "Revenue Cycle",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "The Future of Telehealth Billing",
    excerpt: "As telehealth continues to grow, understanding the nuances of remote care billing becomes essential for healthcare providers.",
    category: "Telehealth",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "HIPAA Compliance: Best Practices for 2025",
    excerpt: "Stay ahead of regulatory changes with our updated guide to HIPAA compliance and data security best practices for healthcare organizations.",
    category: "Compliance",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Maximizing Revenue with Proper Medical Coding",
    excerpt: "Accurate medical coding is the foundation of successful revenue cycle management. Learn how to optimize your coding processes.",
    category: "Medical Coding",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Practice Management Software: What to Look For",
    excerpt: "Choosing the right PMS can make or break your practice's efficiency. Here are the key features you should prioritize.",
    category: "Software",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    color: "from-rose-500 to-pink-500",
  },
];

export default function BlogCarousel() {
  const [current, setCurrent] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, blogPosts.length - cardsToShow);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Latest Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Resources & <span className="text-primary">Blog</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Stay informed with the latest healthcare industry insights, best practices, and expert guidance.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * (100 / cardsToShow + 2)}%)` }}
          >
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="min-w-[calc(33.333%-16px)] max-sm:min-w-[calc(100%-0px)] max-lg:min-w-[calc(50%-12px)] bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Colored Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
