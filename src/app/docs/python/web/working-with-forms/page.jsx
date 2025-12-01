import React from "react";

export default function WorkingWithForms() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Working with Forms</h1>
      <p>
        Handle user input securely with server-side validation.
      </p>

      <h2>Flask Forms</h2>
      <pre><code>{`from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        # Process data
        return f'Thanks {name}!'
    return render_template('contact.html')`}</code></pre>
      <pre><code>{`<!-- contact.html -->
<form method="post">
  <input name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Submit</button>
</form>`}</code></pre>

      <h2>Flask-WTF (Validation)</h2>
      <pre><code>{`pip install flask-wtf`}</code></pre>
      <pre><code>{`from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import DataRequired, Email

class ContactForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = EmailField('Email', validators=[DataRequired(), Email()])

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        return 'Valid!'
    return render_template('contact.html', form=form)`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Always validate on server-side</li>
        <li>Use CSRF protection</li>
        <li>Sanitize user input</li>
      </ul>
    </div>
  );
}
