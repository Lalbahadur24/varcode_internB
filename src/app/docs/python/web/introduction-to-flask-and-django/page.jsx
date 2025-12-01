import React from "react";

export default function IntroFlaskDjango() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Introduction to Flask & Django
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Flask and Django are the two most widely used Python web frameworks.
        Both help you build web applications, APIs, dashboards, and backend
        services — but they follow different philosophies. This page explains
        their concepts, differences, and use cases with examples.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* What is a Web Framework? */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            What is a Python Web Framework?
          </h2>
          <p className="mt-2">
            A web framework helps developers build web applications faster by
            providing tools like routing, templates, database handling, and
            security features. Instead of writing everything from scratch, you
            use a framework to structure your application.
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Handle HTTP requests & responses</li>
            <li>Manage URLs & routing</li>
            <li>Connect with databases</li>
            <li>Render HTML templates</li>
            <li>Provide security layers (CSRF, authentication)</li>
          </ul>
        </section>

        {/* Flask Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask (Micro Framework)
          </h2>

          <p className="mt-2">
            Flask is minimal and lightweight. You start with a small core and
            add extensions only when needed. Perfect for beginners, APIs, and
            small to medium-sized applications.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Lightweight and very flexible</li>
            <li>No predefined project structure</li>
            <li>Choose your own database, ORM, authentication library, etc.</li>
            <li>Great for REST APIs and microservices</li>
          </ul>
        </section>

        {/* Flask Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Flask Example
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]"></div>

                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`pip install flask

from flask import Flask
app = Flask(__name__)

@app.get('/')
def home():
    return 'Hello Flask'

if __name__ == '__main__':
    app.run(debug=True)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask Use Cases */}
        <section>
          <p className="font-semibold text-[#4a0080]">Flask is best for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>REST APIs</li>
            <li>Microservices</li>
            <li>IoT dashboards</li>
            <li>Small to medium web applications</li>
            <li>Prototyping ideas quickly</li>
          </ul>
        </section>

        {/* Django Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Django (Full-Stack Framework)
          </h2>

          <p className="mt-2">
            Django is a high-level framework following the “batteries included”
            philosophy. It includes everything you need to build a complete
            application: ORM, admin panel, authentication, forms, and more.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Built-in admin panel</li>
            <li>Powerful ORM with migrations</li>
            <li>Authentication, permissions, security</li>
            <li>Convention over configuration</li>
            <li>Excellent for large, scalable enterprise apps</li>
          </ul>
        </section>

        {/* Django Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Django Example
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 shadow-sm rounded-md overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]"></div>

                <pre className="p-6 text-sm font-mono leading-7 text-slate-800 w-full">
                  {`pip install django
django-admin startproject mysite
cd mysite
python manage.py runserver`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Django Use Cases */}
        <section>
          <p className="font-semibold text-[#4a0080]">Django is best for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Large enterprise-level applications</li>
            <li>E-commerce websites</li>
            <li>Social networks (e.g., Instagram uses Django)</li>
            <li>Large admin dashboards</li>
            <li>Secure authentication systems</li>
          </ul>
        </section>

        {/* Comparison Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Comparison</h2>
          <p className="mt-2">Key differences between Flask and Django:</p>
        </section>

        <table className="w-full border-collapse text-left mt-4">
          <thead>
            <tr className="bg-purple-50">
              <th className="border px-4 py-2 font-semibold">Feature</th>
              <th className="border px-4 py-2 font-semibold">Flask</th>
              <th className="border px-4 py-2 font-semibold">Django</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Learning Curve</td>
              <td className="border px-4 py-2">Easy</td>
              <td className="border px-4 py-2">Moderate</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Setup Time</td>
              <td className="border px-4 py-2">Fast</td>
              <td className="border px-4 py-2">Medium</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Built-in Admin</td>
              <td className="border px-4 py-2">No</td>
              <td className="border px-4 py-2">Yes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">ORM</td>
              <td className="border px-4 py-2">Optional</td>
              <td className="border px-4 py-2">Built-in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Best For</td>
              <td className="border px-4 py-2">APIs, Small Apps</td>
              <td className="border px-4 py-2">Large Apps</td>
            </tr>
          </tbody>
        </table>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Flask is perfect when you want flexibility and minimal setup. Django
            is ideal for large, structured applications with built-in features.
            Both are powerful — choose based on your project requirements.
          </p>
        </section>
      </div>
    </div>
  );
}
