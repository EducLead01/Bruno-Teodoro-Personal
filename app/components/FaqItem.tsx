"use client";

import { useState } from "react";

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-900/30 transition-colors"
      >
        <span className="text-white text-lg font-semibold pr-4">{question}</span>
        <svg
          className={`w-6 h-6 text-[#F4222F] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}
