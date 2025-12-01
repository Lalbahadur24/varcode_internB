import React from "react";

export default function FormsValidationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Forms & Validation</h1>
      <p>Handle forms safely with CSRF and server‑side validation.</p>

      <h2>Flask‑WTF</h2>
      <pre><code>{`pip install flask-wtf`}</code></pre>
      <pre><code>{`# app.py
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
    return render_template('form.html', form=form)`}</code></pre>
      <pre><code>{`<!-- templates/form.html -->
<form method="post">
  {{ form.hidden_tag() }}
  {{ form.name.label }} {{ form.name() }}
  <button type="submit">Submit</button>
  {% for f, errs in form.errors.items() %}
    {% for e in errs %}<p style="color:red">{{ e }}</p>{% endfor %}
  {% endfor %}
</form>`}</code></pre>

      <h2>Django Forms</h2>
      <p>Use <code>forms.Form</code> or <code>forms.ModelForm</code> for validation and CSRF.</p>
    </div>
  );
}
