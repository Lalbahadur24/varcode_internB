import React from "react";

export default function FormsValidationPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Forms & Validation
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Web forms are a common way to collect user input. To keep them secure
        and reliable, you must handle CSRF protection and perform server-side
        validation. Flask-WTF and Django Forms provide structured ways to do
        this safely.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Concept Intro */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Forms & Validation Matter
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Prevent invalid or malicious data from entering your system.
            </li>
            <li>Show meaningful error messages to users.</li>
            <li>Defend against CSRF (Cross-Site Request Forgery) attacks.</li>
            <li>Centralize validation rules instead of scattering logic.</li>
          </ul>
        </section>

        {/* Flask-WTF Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask-WTF (Flask + WTForms)
          </h2>
          <p className="mt-2">
            Flask-WTF integrates WTForms with Flask, adding CSRF protection and
            helper methods for validating and rendering forms.
          </p>
        </section>

        {/* Install Flask-WTF */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Install</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`pip install flask-wtf`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask-WTF Code: app.py */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Flask Form with Validation
            </h3>
          </div>

          <div className="px-6 pb-4">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# app.py
from flask import Flask, render_template, redirect
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev-secret'  # use env var in production

class NameForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(max=50)])

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        return redirect('/ok')
    return render_template('form.html', form=form)`}
                </pre>
              </div>
            </div>

            {/* Template */}
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`<!-- templates/form.html -->
<form method="post">
  {{ form.hidden_tag() }}
  {{ form.name.label }} {{ form.name() }}
  <button type="submit">Submit</button>
  {% for f, errs in form.errors.items() %}
    {% for e in errs %}<p style="color:red">{{ e }}</p>{% endfor %}
  {% endfor %}
</form>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation of Flask-WTF */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            Key points in this example:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>SECRET_KEY</code> is required for CSRF protection — always
              store it as an environment variable in production.
            </li>
            <li>
              <code>NameForm</code> defines a field with validators:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  <code>DataRequired()</code> — field must not be empty.
                </li>
                <li>
                  <code>Length(max=50)</code> — prevents overly long input.
                </li>
              </ul>
            </li>
            <li>
              <code>validate_on_submit()</code> checks both method (
              <code>POST</code>) and validation rules.
            </li>
            <li>
              <code>form.hidden_tag()</code> renders a hidden CSRF token
              automatically.
            </li>
            <li>Errors are looped and displayed in red for better UX.</li>
          </ul>
        </section>

        {/* Django Forms Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Django Forms
          </h2>
          <p className="mt-2">
            Django has built-in form handling through <code>forms.Form</code>{" "}
            and <code>forms.ModelForm</code>. Forms automatically handle:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>HTML rendering of input fields.</li>
            <li>Server-side validation & error messages.</li>
            <li>CSRF protection (when using Django templates).</li>
            <li>Binding POST data to Python objects.</li>
          </ul>
        </section>

        {/* Django Forms Code Example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Django Form
            </h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# forms.py
from django import forms

class NameForm(forms.Form):
    name = forms.CharField(max_length=50)`}
                </pre>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`# views.py
from django.shortcuts import render, redirect
from .forms import NameForm

def index(request):
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            # use form.cleaned_data['name']
            return redirect('ok')
    else:
        form = NameForm()
    return render(request, 'index.html', {'form': form})`}
                </pre>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm font-mono leading-7 text-slate-800">
                  {`<!-- templates/index.html -->
<form method="post">
  {% csrf_token %}
  {{ form.as_p }}
  <button type="submit">Submit</button>
</form>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Django Forms Explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            What Django provides automatically:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>{`{% csrf_token %}`}</code> tag inserts a hidden CSRF token.
            </li>
            <li>
              <code>form.is_valid()</code> applies validation rules and
              populates <code>form.errors</code>.
            </li>
            <li>
              Cleaned and validated data is accessible via{" "}
              <code>form.cleaned_data</code>.
            </li>
            <li>
              <code>form.as_p()</code> quickly renders all fields wrapped in{" "}
              <code>&lt;p&gt;</code> tags.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices for Forms & Validation
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Always validate data on the server (never trust only client-side
              JS).
            </li>
            <li>Use CSRF protection on all forms that modify data.</li>
            <li>
              Limit field lengths (<code>max_length</code>,{" "}
              <code>Length(max=...)</code>) to avoid abuse.
            </li>
            <li>Show clear error messages near the inputs.</li>
            <li>
              Centralize validation logic in forms or schemas, not ad-hoc in
              views.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
