import React from "react";

export default function SchedulingTasks() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Scheduling Tasks</h1>
      <p>
        Run Python jobs on a schedule using libraries or OS schedulers.
      </p>

      <h2>schedule Library</h2>
      <pre><code>{`pip install schedule`}</code></pre>
      <pre><code>{`import schedule
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
    time.sleep(1)`}</code></pre>

      <h2>APScheduler (Advanced)</h2>
      <pre><code>{`pip install apscheduler`}</code></pre>
      <pre><code>{`from apscheduler.schedulers.background import BackgroundScheduler
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
    scheduler.shutdown()`}</code></pre>

      <h2>OS-Level Schedulers</h2>
      <h3>Linux/macOS (cron)</h3>
      <pre><code>{`# Edit crontab
crontab -e

# Run script every day at 2 AM
0 2 * * * /usr/bin/python3 /path/to/script.py

# Every hour
0 * * * * /usr/bin/python3 /path/to/script.py`}</code></pre>

      <h3>Windows Task Scheduler</h3>
      <pre><code>{`# PowerShell command to create task
$action = New-ScheduledTaskAction -Execute 'python.exe' -Argument 'C:\\path\\to\\script.py'
$trigger = New-ScheduledTaskTrigger -Daily -At 9am
Register-ScheduledTask -Action $action -Trigger $trigger -TaskName 'MyPythonTask'`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Use OS schedulers for production systems</li>
        <li>Use Python libraries for app-internal scheduling</li>
        <li>Log task execution for monitoring</li>
        <li>Handle errors gracefully in scheduled jobs</li>
      </ul>
    </div>
  );
}
