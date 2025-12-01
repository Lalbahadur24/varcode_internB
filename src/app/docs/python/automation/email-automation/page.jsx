import React from "react";

export default function EmailAutomationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Email Automation</h1>
      <p>
        Send emails with <code>smtplib</code> and <code>email.message</code>. Use app
        passwords and TLS.
      </p>

      <h2>Send a Simple Email (Gmail)</h2>
      <pre><code>{`import os, smtplib
from email.message import EmailMessage

EMAIL = os.environ.get('SMTP_USER')
PASS = os.environ.get('SMTP_PASS')  # use app password

msg = EmailMessage()
msg['Subject'] = 'Daily Report'
msg['From'] = EMAIL
msg['To'] = 'recipient@example.com'
msg.set_content('Report attached')

with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(EMAIL, PASS)
    smtp.send_message(msg)`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Never hardcode credentials; use environment variables.</li>
        <li>For attachments, use <code>msg.add_attachment(...)</code>.</li>
      </ul>
    </div>
  );
}
import React from "react";

export default function EmailAutomation() {
  return (
    <div className="prose max-w-none">
      <h1>Email automation</h1>
      <p>
        You can send emails using the <code>smtplib</code> module or higher-level
        libraries. For attachments and HTML emails use <code>email.message</code>.
      </p>

      <h2>Quick example</h2>
      <pre>
        <code>{`import smtplib
from email.message import EmailMessage
msg = EmailMessage()
msg.set_content('Hello')
msg['Subject'] = 'Test'
# configure server and send`}</code>
      </pre>
    </div>
  );
}
