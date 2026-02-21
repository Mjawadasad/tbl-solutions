"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Cardiologist, Heart Care Clinic",
    content:
      "TBL Solutions transformed our revenue cycle. We saw a 25% increase in collections within the first quarter. Their team is knowledgeable, responsive, and truly understands healthcare billing.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Practice Manager, MultiSpec Group",
    content:
      "The transition was seamless. Their AI-powered billing software reduced our denial rate by 40%. The customer support team is exceptional — always available when we need them.",
    rating: 5,
  },
  {
    name: "Dr. Aisha Patel",
    role: "Dermatologist, SkinFirst Medical",
    content:
      "Outstanding RCM experience. The team elevated our financial results while reducing administrative burden. I can focus on patients while they handle the business side perfectly.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthopedic Surgeon, OrthoPlus",
    content:
      "Switching to TBL Solutions was the best decision for our practice. Their AI-powered coding accuracy is incredible — our clean claims rate went from 85% to 98% in just two months.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Office Administrator, Valley Medical",
    content:
      "The level of transparency and real-time reporting TBL Solutions provides is unmatched. We always know exactly where our revenue stands. Their dedicated support team feels like an extension of our office.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  // Show 3 cards on desktop, carousel slides through them
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-500">
            Hear from healthcare providers who have transformed their practice
            with TBL Solutions
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((t, idx) => (
              <div
                key={`${current}-${idx}`}
                className="card-hover bg-white rounded-2xl border border-gray-100 p-8 relative animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
