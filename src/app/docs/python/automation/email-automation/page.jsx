import React from "react";

export default function EmailAutomationPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Email Automation
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Automate sending emails using Python’s built-in <code>smtplib</code>{" "}
        module along with <code>EmailMessage</code>. Supports text, HTML,
        attachments, CC/BCC, and TLS/SSL encryption.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* Simple Gmail email */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Send a Simple Email (Gmail)
          </h2>

          <p className="mt-2">
            Use Gmail app passwords (NOT your main password). Store them in
            environment variables for safety.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import os, smtplib
from email.message import EmailMessage

EMAIL = os.environ.get('SMTP_USER')
PASS = os.environ.get('SMTP_PASS')  # Gmail App Password

msg = EmailMessage()
msg['Subject'] = 'Daily Report'
msg['From'] = EMAIL
msg['To'] = 'recipient@example.com'
msg.set_content('Report attached')

with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(EMAIL, PASS)
    smtp.send_message(msg)`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Uses SSL port <code>465</code>.
            </li>
            <li>Requires Gmail App Password (2FA must be ON).</li>
            <li>
              Always store your credentials in <code>os.environ</code>, never
              hardcoded.
            </li>
          </ul>
        </section>

        {/* Attachments */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Sending Attachments
          </h2>

          <p className="mt-2">
            You can attach files like PDFs, images, CSVs, etc.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from email.message import EmailMessage
import mimetypes

msg = EmailMessage()
msg['Subject'] = 'Invoice Attached'
msg['From'] = EMAIL
msg['To'] = 'client@example.com'
msg.set_content('Please find the invoice attached.')

# Detect file type automatically
file_path = 'invoice.pdf'
mime_type, _ = mimetypes.guess_type(file_path)
mime_main, mime_sub = mime_type.split('/')

with open(file_path, 'rb') as f:
    msg.add_attachment(
        f.read(),
        maintype=mime_main,
        subtype=mime_sub,
        filename='invoice.pdf'
    )`}
              </pre>
            </div>
          </div>

          <p className="mt-3">
            <strong>Automatically detects file type</strong> using{" "}
            <code>mimetypes</code>.
          </p>
        </section>

        {/* HTML Email */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Sending HTML Emails
          </h2>

          <p className="mt-2">
            Use HTML templates to send beautiful newsletter-style emails.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`msg = EmailMessage()
msg['Subject'] = 'Welcome!'
msg['From'] = EMAIL
msg['To'] = 'user@example.com'

msg.set_content('Your email client does not support HTML.')

msg.add_alternative('''
<!DOCTYPE html>
<html>
  <body>
    <h2 style="color: purple;">Welcome to Varcode!</h2>
    <p>Your registration is complete.</p>
  </body>
</html>
''', subtype='html')`}
              </pre>
            </div>
          </div>

          <p className="mt-3">
            This is how professional newsletters are created.
          </p>
        </section>

        {/* SMTP with TLS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Sending Emails with TLS (Port 587)
          </h2>

          <p className="mt-2">
            Some SMTP providers (like Outlook, Office365) require TLS instead of
            SSL.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
    smtp.starttls()   # upgrade connection to secure TLS
    smtp.login(EMAIL, PASS)
    smtp.send_message(msg)`}
              </pre>
            </div>
          </div>
        </section>

        {/* Quick example */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Minimal Email Example
          </h2>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import smtplib
from email.message import EmailMessage

msg = EmailMessage()
msg.set_content('Hello from Python!')
msg['Subject'] = 'Test Email'
msg['From'] = 'you@example.com'
msg['To'] = 'friend@example.com'

# configure server and send...
`}
              </pre>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Best Practices
          </h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>NEVER hardcode credentials</strong> — always use{" "}
              <code>os.environ</code>.
            </li>
            <li>Use Gmail App Passwords (normal password will not work).</li>
            <li>Use HTML emails for reports, dashboards, summaries.</li>
            <li>Use attachments for PDFs, Excel, CSV, logs, screenshots.</li>
            <li>
              Send emails in batch using loops for automated systems (cron jobs,
              scheduled pipelines).
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
