import React from "react";

export default function SchedulingTasks() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Scheduling Tasks
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Many automation scripts need to run on a schedule — every minute, every
        hour, or once a day. You can schedule Python jobs using pure Python
        libraries or OS-level schedulers like <code>cron</code> and Windows Task
        Scheduler.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* schedule library */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Scheduling with <code>schedule</code> Library
          </h2>
          <p className="mt-2">
            The <code>schedule</code> library provides a very simple, readable
            way to run functions at regular intervals inside a long-running
            Python process.
          </p>

          {/* Install */}
          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`pip install schedule`}
              </pre>
            </div>
          </div>

          {/* Code */}
          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`import schedule
import time

def job():
    print('Task running...')

# Schedule patterns
schedule.every(10).seconds.do(job)
schedule.every().hour.do(job)
schedule.every().day.at('09:00').do(job)
schedule.every().monday.at('08:30').do(job)

while True:
    schedule.run_pending()
    time.sleep(1)`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use this for <strong>simple scripts</strong> that you keep running
              (e.g. inside a Docker container or background service).
            </li>
            <li>
              <code>run_pending()</code> checks due jobs; the loop ensures it
              keeps running.
            </li>
            <li>
              Don’t forget <code>time.sleep()</code> to avoid a busy loop.
            </li>
          </ul>
        </section>

        {/* APScheduler */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            APScheduler (Advanced Scheduling)
          </h2>
          <p className="mt-2">
            <code>APScheduler</code> is more powerful: supports cron-style
            expressions, intervals, background schedulers, and integration with
            web frameworks.
          </p>

          {/* Install APScheduler */}
          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`pip install apscheduler`}
              </pre>
            </div>
          </div>

          {/* APScheduler code */}
          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-4">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`from apscheduler.schedulers.background import BackgroundScheduler
import time

def my_job():
    print('Job executed')

scheduler = BackgroundScheduler()

# Interval trigger
scheduler.add_job(my_job, 'interval', seconds=30)

# Cron trigger
scheduler.add_job(my_job, 'cron', hour=9, minute=0)

scheduler.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    scheduler.shutdown()`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Interval trigger:</strong> run every N seconds/minutes.
            </li>
            <li>
              <strong>Cron trigger:</strong> run at specific times (e.g. daily
              at 09:00).
            </li>
            <li>
              <code>BackgroundScheduler</code> runs jobs in the background
              thread.
            </li>
          </ul>
        </section>

        {/* OS-level schedulers */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            OS-Level Schedulers (Production)
          </h2>
          <p className="mt-2">
            For production systems, it’s common to run Python scripts via the
            operating system&apos;s scheduler instead of keeping a Python
            process always alive.
          </p>
        </section>

        {/* Cron (Linux/macOS) */}
        <section>
          <h3 className="text-xl font-semibold text-[#4a0080]">
            Linux / macOS: <code>cron</code>
          </h3>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-3">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`# Edit crontab
crontab -e

# Run script every day at 2 AM
0 2 * * * /usr/bin/python3 /path/to/script.py

# Every hour
0 * * * * /usr/bin/python3 /path/to/script.py`}
              </pre>
            </div>
          </div>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Cron expression format: <code>min hour day month weekday</code>.
            </li>
            <li>Use absolute paths to Python and script files.</li>
            <li>Redirect output to a log file for debugging.</li>
          </ul>
        </section>

        {/* Windows Task Scheduler */}
        <section>
          <h3 className="text-xl font-semibold text-[#4a0080]">
            Windows Task Scheduler
          </h3>

          <p className="mt-2">
            On Windows, use Task Scheduler to run Python scripts at fixed times.
          </p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-3">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-6 w-full text-sm leading-7 font-mono bg-white">
                {`# PowerShell command to create a scheduled task
$action = New-ScheduledTaskAction -Execute 'python.exe' -Argument 'C:\\path\\to\\script.py'
$trigger = New-ScheduledTaskTrigger -Daily -At 9am
Register-ScheduledTask -Action $action -Trigger $trigger -TaskName 'MyPythonTask'`}
              </pre>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Use <strong>OS-level schedulers</strong> (cron, Task Scheduler) in
              production.
            </li>
            <li>
              Use <strong>Python libraries</strong> (<code>schedule</code>,{" "}
              <code>APScheduler</code>) when scheduling is part of your app.
            </li>
            <li>Log task execution (start, success, errors) for monitoring.</li>
            <li>
              Wrap jobs in <code>try/except</code> and handle errors gracefully.
            </li>
            <li>
              For critical jobs, add notifications (email/Slack) on failures.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
