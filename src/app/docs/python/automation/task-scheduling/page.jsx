import React from "react";

export default function TaskSchedulingPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Task Scheduling</h1>
      <p>
        Run jobs on a schedule using lightweight libraries or external schedulers.
      </p>

      <h2>Python: schedule</h2>
      <pre><code>{`pip install schedule`}</code></pre>
      <pre><code>{`import schedule, time

def job():
    print('Running job')

schedule.every().day.at('09:00').do(job)

while True:
    schedule.run_pending()
    time.sleep(1)`}</code></pre>

      <h2>Python: APScheduler</h2>
      <pre><code>{`pip install apscheduler`}</code></pre>
      <pre><code>{`from apscheduler.schedulers.background import BackgroundScheduler
import time

def job():
    print('Tick')

sched = BackgroundScheduler()
sched.add_job(job, 'interval', seconds=10)
sched.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    sched.shutdown()`}</code></pre>

      <h2>System Schedulers</h2>
      <ul>
        <li>Windows Task Scheduler for Windows.</li>
        <li>cron/systemd timers for Linux/macOS.</li>
      </ul>
    </div>
  );
}
