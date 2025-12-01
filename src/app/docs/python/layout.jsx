"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ----------------- SIDEBAR CONFIG MOVED HERE ----------------- */
const pythonDocsConfig = [
  {
    label: "Introduction to Python",
    href: "/docs/python/introduction",
    children: ["What is Python?", "History", "Features", "Installation"],
  },
  {
    label: "Python Basics",
    href: "/docs/python/basics",
    children: [
      "Data Types",
      "Operators",
      "User Input",
      "Typecasting",
      "Variables",
    ],
  },
  {
    label: "Control Flow",
    href: "/docs/python/control-flow",
    children: [
      "If-Else",
      "Nested If-Else",
      "Loops",
      "Break/Continue",
      "Match Case",
    ],
  },
  {
    label: "Data Structures",
    href: "/docs/python/data-structures",
    children: [
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries",
      "Comprehensions (list, dict, set)",
    ],
  },
  {
    label: "Functions",
    href: "/docs/python/functions",
    children: [
      "Defining Functions",
      "Arguments",
      "Lambda",
      "Recursion",
      "Scope",
    ],
  },
  {
    label: "Modules & Packages",
    href: "/docs/python/modules",
    children: [
      "Creating Modules",
      "Importing",
      "Built-in Modules",
      "pip",
      "Packages",
    ],
  },
  {
    label: "File Handling",
    href: "/docs/python/file-handling",
    children: [
      "Read",
      "Write",
      "Append",
      "Files & Directories",
      "with open()",
    ],
  },
  {
    label: "Exception Handling",
    href: "/docs/python/exception-handling",
    children: [
      "Try/Except",
      "Else/Finally",
      "Custom Exceptions",
      "Raising Errors",
    ],
  },
  {
    label: "Object-Oriented Programming",
    href: "/docs/python/oop",
    children: [
      "Classes",
      "Objects",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
    ],
  },
  {
    label: "Python Libraries",
    href: "/docs/python/libraries",
    children: [
      "NumPy basics",
      "Pandas basics",
      "Matplotlib basics",
      "Seaborn basics",
      "Working with APIs",
      "Virtual environments",
    ],
  },
  {
    label: "Advanced Python Concepts",
    href: "/docs/python/advanced",
    children: [
      "Decorators",
      "Generators",
      "Iterators",
      "Comprehensions (list, dict, set)",
      "Walrus operator",
      "Map, Filter, Reduce",
      "Context managers",
      "Multithreading",
      "Multiprocessing",
    ],
  },
  {
    label: "Database Connectivity",
    href: "/docs/python/database",
    children: [
      "What is a database?",
      "Installing MySQL/PostgreSQL",
      "Connecting Python with MySQL",
      "CRUD operations",
      "Using SQLite",
      "Using SQLAlchemy",
    ],
  },
  {
    label: "Python for Automation",
    href: "/docs/python/automation",
    children: [
      "Working with OS module",
      "Automating files & folders",
      "Email automation",
      "Automating browser with Selenium",
      "Automating Excel with openpyxl",
      "Scheduling tasks",
    ],
  },
  {
    label: "Python for Web Development",
    href: "/docs/python/web",
    children: [
      "Introduction to Flask/Django",
      "Building a simple API",
      "Routing",
      "Templates (Jinja2)",
      "Working with forms",
      "Sessions & cookies",
      "REST API using Python",
    ],
  },
  {
    label: "Python for Data Science",
    href: "/docs/python/data-science",
    children: [
      "NumPy for numerical operations",
      "Pandas for data analysis",
      "Matplotlib & Seaborn for data visualization",
      "Data cleaning",
      "Data preprocessing",
      "Basic machine learning using Scikit-Learn",
    ],
  },
];

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}
/* ------------------------------------------------------------- */

export default function Layout({ children }) {
  const pathname = usePathname() || "/docs/python";
  const [openKeys, setOpenKeys] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggle(key) {
    setOpenKeys((p) => ({ ...p, [key]: !p[key] }));
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f0f7fb] text-slate-900">
      {/* Global styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        /* Custom scrollbar */
        .sidebar-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-80 border-r bg-[#f6fbfd] h-screen sticky top-0 overflow-hidden">
        <div className="p-6 pb-0">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-extrabold" style={{ lineHeight: 1 }}>
                Python
              </h1>
              <p className="text-sm text-slate-500">Docs — Varcode</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-2 sidebar-scrollbar">
          <ul className="space-y-1 pr-2">
            {pythonDocsConfig.map((it) => {
              const active = pathname.startsWith(it.href);
              const opened = !!openKeys[it.href] || active;

              return (
                <li key={it.href}>
                  <button
                    onClick={() => toggle(it.href)}
                    className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-colors ${
                      active
                        ? "bg-[#f0f7fb] text-[#4b0fbf] font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{it.label}</span>
                    {it.children && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          opened ? "rotate-90" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>

                  {it.children && opened && (
                    <ul className="ml-4 mt-1 space-y-1 border-l pl-2">
                      {it.children.map((sub) => {
                        const subSlug = slugify(sub);
                        const subPath = `${it.href}/${subSlug}`;
                        const isSubActive = pathname === subPath;

                        return (
                          <li key={sub}>
                            <Link
                              href={subPath}
                              className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                                isSubActive
                                  ? "text-[#4b0fbf] font-medium bg-purple-50"
                                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                              }`}
                            >
                              {sub}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-6 pt-0 mt-4">
    
          <div className="mt-4">
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-2xl bg-[#4b0fbf] text-white text-sm font-medium"
            >
              Explore Python Docs
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="w-full md:hidden border-b p-4 flex items-center justify-between bg-[#f6fbfd] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">Python Docs</h2>
        </div>

        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="p-2 rounded bg-white"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/30 transition-opacity"
          onClick={() => setDrawerOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-6">
              <div>
                <h3 className="text-lg font-bold">Python Docs</h3>
                <p className="text-sm text-slate-500">Varcode</p>
              </div>
            </div>

            <nav className="overflow-y-auto h-[calc(100%-100px)]">
              <ul className="space-y-2">
                {pythonDocsConfig.map((it) => {
                  const active = pathname.startsWith(it.href);
                  const opened = !!openKeys[it.href] || active;

                  return (
                    <li key={it.href}>
                      <button
                        onClick={() => toggle(it.href)}
                        className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md ${
                          active
                            ? "bg-[#f0f7fb] text-[#4b0fbf] font-medium"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{it.label}</span>
                        {it.children && (
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              opened ? "rotate-90" : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </button>

                      {it.children && opened && (
                        <ul className="ml-4 mt-1 space-y-1 border-l pl-2">
                          {it.children.map((sub) => {
                            const subSlug = slugify(sub);
                            const subPath = `${it.href}/${subSlug}`;
                            const isSubActive = pathname === subPath;

                            return (
                              <li key={sub}>
                                <Link
                                  href={subPath}
                                  onClick={() => setDrawerOpen(false)}
                                  className={`block px-3 py-1.5 text-sm rounded-md ${
                                    isSubActive
                                      ? "text-[#4b0fbf] font-medium bg-purple-50"
                                      : "text-slate-600 hover:bg-slate-50"
                                  }`}
                                >
                                  {sub}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Main content area */}
      <main className="flex-1 p-4 md:p-6 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-sm">{children}</div>
      </main>
    </div>
  );
}
