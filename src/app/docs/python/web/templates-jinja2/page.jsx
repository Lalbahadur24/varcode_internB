import React from "react";

export default function TemplatesJinja2() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Templates (Jinja2)
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Jinja2 is a powerful templating engine used by Flask (and many other
        frameworks) to generate dynamic HTML. It lets you embed variables,
        control flow, inheritance, and filters directly inside your templates —
        while keeping Python logic in views and HTML in template files.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Variables Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Variables</h2>
          <p className="mt-2">
            Use <code>{"{{ }}"}</code> to output variables in a Jinja2 template.
            You can access attributes and dictionary keys, just like in Python.
          </p>
        </section>

        {/* Variables Example */}
        <section className="bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Passing Variables from Flask to Jinja2
            </h3>
          </div>

          <div className="px-6 pb-4">
            {/* Template */}
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`<!-- template.html -->
<h1>Hello {{ name }}!</h1>
<p>Age: {{ user.age }}</p>`}
                </pre>
              </div>
            </div>

            {/* Flask View */}
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`# Flask view
from flask import render_template

@app.get('/hello/<name>')
def hello(name):
    user = {'age': 25}
    return render_template('template.html', name=name, user=user)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Variables Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">Key points:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>{"{{ name }}"}</code> prints the value of the{" "}
              <code>name</code> variable passed from the Flask view.
            </li>
            <li>
              <code>{"{{ user.age }}"}</code> accesses the <code>age</code>{" "}
              field on <code>user</code> (dict or object).
            </li>
            <li>
              <code>render_template</code> takes keyword arguments and exposes
              them inside the template context.
            </li>
          </ul>
        </section>

        {/* Control Flow Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Control Flow
          </h2>
          <p className="mt-2">
            Jinja2 supports control structures like <code>if</code> and{" "}
            <code>for</code> using <code>{"{% ... %}"}</code> syntax.
          </p>
        </section>

        {/* Control Flow Example */}
        <section className="bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: If / Else &amp; Loops
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`{% if user.is_admin %}
  <p>Admin Panel</p>
{% else %}
  <p>User Dashboard</p>
{% endif %}

{% for item in items %}
  <li>{{ item.name }}</li>
{% endfor %}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Control Flow Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">How this works:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>{"{% if ... %}"}</code> / <code>{"{% else %}"}</code> /{" "}
              <code>{"{% endif %}"}</code> behave like Python <code>if</code>{" "}
              statements.
            </li>
            <li>
              <code>{"{% for item in items %}"}</code> loops through a list and
              renders HTML for each element.
            </li>
            <li>
              <code>{"{{ item.name }}"}</code> outputs each item’s{" "}
              <code>name</code> attribute.
            </li>
          </ul>
        </section>

        {/* Template Inheritance Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Template Inheritance
          </h2>
          <p className="mt-2">
            Template inheritance lets you define a base layout and reuse it
            across multiple pages. This avoids repetition and keeps your HTML
            DRY (Don’t Repeat Yourself).
          </p>
        </section>

        {/* Template Inheritance Example */}
        <section className="bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: base.html + page.html
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`<!-- base.html -->
<!DOCTYPE html>
<html>
<head><title>{% block title %}{% endblock %}</title></head>
<body>
  {% block content %}{% endblock %}
</body>
</html>

<!-- page.html -->
{% extends 'base.html' %}
{% block title %}Home{% endblock %}
{% block content %}<h1>Welcome</h1>{% endblock %}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Inheritance Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            Key ideas in inheritance:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>{"{% extends 'base.html' %}"}</code> tells Jinja2 to use{" "}
              <code>base.html</code> as the parent template.
            </li>
            <li>
              <code>{"{% block title %}"}</code> and{" "}
              <code>{"{% block content %}"}</code> mark regions that child
              templates can override.
            </li>
            <li>Ideal for layouts with a shared header, navbar, and footer.</li>
          </ul>
        </section>

        {/* Filters Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Filters</h2>
          <p className="mt-2">
            Filters transform values in templates. Apply them using the{" "}
            <code>|</code> (pipe) operator.
          </p>
        </section>

        {/* Filters Example */}
        <section className="bg-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Common Filters
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`{{ name|upper }}           {# ALICE #}
{{ items|length }}        {# 5 #}
{{ price|round(2) }}      {# 19.99 #}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            Examples of filter usage:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>{"{{ name|upper }}"}</code> → converts the string to
              uppercase.
            </li>
            <li>
              <code>{"{{ items|length }}"}</code> → returns the count of items.
            </li>
            <li>
              <code>{"{{ price|round(2) }}"}</code> → rounds a number to 2
              decimal places.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Keep heavy business logic in Python, not in templates.</li>
            <li>Use template inheritance for consistent layout.</li>
            <li>
              Define custom filters in Python if built-in ones are not enough.
            </li>
            <li>
              Avoid deeply nested control flow in templates to keep them
              readable.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
