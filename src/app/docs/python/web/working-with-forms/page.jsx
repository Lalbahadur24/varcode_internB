import React from "react";

export default function WorkingWithForms() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Working with Forms
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Web forms are the main way users send data to your application. To keep
        your app secure and reliable, you must handle form submissions with
        proper server-side validation, CSRF protection, and clean error
        handling. Flask supports both simple manual form handling and more
        structured validation with Flask-WTF.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Concept intro */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Forms Basics
          </h2>
          <p className="mt-2">
            A typical flow for handling a form submission is:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>User loads a page with an HTML form.</li>
            <li>
              User fills fields and submits a <code>POST</code> request.
            </li>
            <li>Server validates and processes the data.</li>
            <li>Server responds with a success page or error messages.</li>
          </ul>
        </section>

        {/* Flask raw forms */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask Forms (Manual Handling)
          </h2>
          <p className="mt-2">
            With plain Flask, you can read form fields directly from{" "}
            <code>request.form</code>. This is fine for simple cases, but you
            must write your own validation.
          </p>
        </section>

        {/* Flask manual example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Simple Contact Form (Flask)
            </h3>
          </div>

          <div className="px-6 pb-4">
            {/* app.py */}
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        # Process data
        return f'Thanks {name}!'
    return render_template('contact.html')`}
                </pre>
              </div>
            </div>

            {/* template */}
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`<!-- contact.html -->
<form method="post">
  <input name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Submit</button>
</form>`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Manual handling explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            What this simple example does:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>methods=['GET', 'POST']</code> means the same route serves
              both the form and its submission.
            </li>
            <li>
              On <code>GET</code>, it renders <code>contact.html</code>.
            </li>
            <li>
              On <code>POST</code>, it grabs data from <code>request.form</code>{" "}
              and returns a response.
            </li>
            <li>
              HTML uses <code>required</code> attributes for basic client-side
              validation, but this is not enough by itself.
            </li>
          </ul>
        </section>

        {/* Flask-WTF section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Flask-WTF (Forms & Validation)
          </h2>
          <p className="mt-2">
            For anything non-trivial, use <strong>Flask-WTF</strong>. It wraps
            WTForms and gives you:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Server-side validation with reusable form classes.</li>
            <li>Automatic CSRF protection.</li>
            <li>Field definitions and validators in one place.</li>
          </ul>
        </section>

        {/* Flask-WTF install */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Install Flask-WTF
            </h3>
          </div>
          <div className="px-6 pb-6">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`pip install flask-wtf`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask-WTF example */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">
              Example: Validated Form with Flask-WTF
            </h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 text-sm w-full leading-7 font-mono text-slate-800">
                  {`from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import DataRequired, Email

class ContactForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = EmailField('Email', validators=[DataRequired(), Email()])

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        # form.name.data, form.email.data
        return 'Valid!'
    return render_template('contact.html', form=form)`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Flask-WTF explanation */}
        <section>
          <p className="font-semibold text-[#4a0080]">
            What Flask-WTF is doing for you:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <code>ContactForm</code> defines fields and validation rules in
              one place.
            </li>
            <li>
              <code>DataRequired()</code> ensures the field is not empty.
            </li>
            <li>
              <code>Email()</code> checks that the value looks like a valid
              email.
            </li>
            <li>
              <code>validate_on_submit()</code> checks that the request is{" "}
              <code>POST</code> and the form is valid.
            </li>
            <li>
              In the template, you can render fields and show errors (e.g.{" "}
              <code>form.name.errors</code>).
            </li>
          </ul>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Always validate on the server:</strong> client-side checks
              can be bypassed.
            </li>
            <li>
              Use CSRF protection (Flask-WTF’s CSRF token or framework
              built-in).
            </li>
            <li>
              Sanitize user input if you render it back to HTML to avoid XSS (or
              rely on framework auto-escaping).
            </li>
            <li>
              Keep validation logic in form classes or schemas, not scattered
              across views.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
