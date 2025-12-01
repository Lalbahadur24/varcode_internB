import React from "react";

export default function TemplatesJinja2() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Templates (Jinja2)</h1>
      <p>
        Jinja2 is a powerful templating engine for dynamic HTML generation.
      </p>

      <h2>Variables</h2>
      <pre><code>{`<!-- template.html -->
<h1>Hello {{ name }}!</h1>
<p>Age: {{ user.age }}</p>`}</code></pre>
      <pre><code>{`# Flask view
from flask import render_template

@app.get('/hello/<name>')
def hello(name):
    return render_template('template.html', name=name)`}</code></pre>

      <h2>Control Flow</h2>
      <pre><code>{`{% if user.is_admin %}
  <p>Admin Panel</p>
{% else %}
  <p>User Dashboard</p>
{% endif %}

{% for item in items %}
  <li>{{ item.name }}</li>
{% endfor %}`}</code></pre>

      <h2>Template Inheritance</h2>
      <pre><code>{`<!-- base.html -->
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
{% block content %}<h1>Welcome</h1>{% endblock %}`}</code></pre>

      <h2>Filters</h2>
      <pre><code>{`{{ name|upper }}           {# ALICE #}
{{ items|length }}        {# 5 #}
{{ price|round(2) }}      {# 19.99 #}`}</code></pre>
    </div>
  );
}
