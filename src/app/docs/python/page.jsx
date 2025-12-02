import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Book, Box, Sparkles } from "lucide-react";

export default function PythonDocsPage() {
  const quickLinks = [
    { label: "What is Python", href: "/docs/python/introduction/what-is-python" },
    { label: "Data Types", href: "/docs/python/basics/data-types" },
    { label: "Lists", href: "/docs/python/data-structures/lists" },
    { label: "If-Else", href: "/docs/python/control-flow/if-else" },
    { label: "Lambda", href: "/docs/python/function/lambda" },
    { label: "Pip", href: "/docs/python/modules/pip" },
    { label: "Read", href: "/docs/python/file-handling/read" },
    { label: "tryexcept", href: "/docs/python/exception-handling/tryexcept" },
    { label: "Classes", href: "/docs/python/oop/classes" },
    { label: "Panda", href: "/docs/python/libraries/pandas-basics" },
    { label: "Generators", href: "/docs/python/advanced/generators" },
    { label: "Flask", href: "/docs/python/web/flask" },
    { label: "Data cleaning", href: "/docs/python/data-science/data-cleaning" },
  ];

  return (
    <div className="w-full min-h-[60vh] relative">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-slate-50 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-14">
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white/70 backdrop-blur px-3 py-1 text-[11px] font-medium text-purple-700 shadow-sm">
            <Sparkles className="h-3 w-3" />
            Python Notes · Fast Revision · Clean Explanations
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Your Complete Python Documentation
          </h1>

          <p className="mt-3 text-sm text-slate-600 max-w-xl leading-relaxed">
            A clean, minimal and exam-friendly documentation built for students,
            developers, and fast revision. Everything from basics to OOP with
            beautiful formatting and example-first explanations.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/docs/python/introduction/what-is-python"
              className="flex items-center gap-2 rounded-lg bg-[#4a0080] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-[#3a0066] transition"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/docs/python"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              Explore Topics
            </Link>
          </div>
        </div>

        {/* GLASS FEATURE CARDS */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur p-5 shadow hover:shadow-md transition">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-700">
              <Book className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-semibold">Structured Learning</h3>
            <p className="mt-1 text-xs text-slate-600 leading-5">
              Learn Python from basics → data types → functions → files → OOP.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur p-5 shadow hover:shadow-md transition">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-sky-100 text-sky-700">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-semibold">Clean Code Examples</h3>
            <p className="mt-1 text-xs text-slate-600 leading-5">
              Every topic includes simple, readable, and runnable code snippets.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/70 bg-white/60 backdrop-blur p-5 shadow hover:shadow-md transition">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Box className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-semibold">Exam-ready Notes</h3>
            <p className="mt-1 text-xs text-slate-600 leading-5">
              Short, crisp explanations for fast revision before exams.
            </p>
          </div>
        </div>

        {/* QUICK ACCESS */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold text-slate-900">
            Quick Navigation
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Jump into any topic quickly
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 hover:bg-slate-100 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
