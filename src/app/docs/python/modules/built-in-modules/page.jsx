import React from "react";

export default function BuiltInModules() {
  const dq = String.fromCharCode(34); // "

  /* EXAMPLES */

  const exMath = `import math

print(math.sqrt(25))
print(math.pi)
print(math.factorial(5))`;

  const exRandom = `import random

print(random.randint(1, 10))
print(random.choice(["apple", "banana", "cherry"]))`;

  const exDatetime = `from datetime import datetime

now = datetime.now()
print(now)
print(now.year)
print(now.strftime("%d/%m/%Y"))`;

  const exOs = `import os

print(os.getcwd())
print(os.listdir("."))`;

  const exSys = `import sys

print(sys.version)
print(sys.path)`;

  const exPlatform = `import platform

print(platform.system())
print(platform.machine())`;

  const exStatistics = `import statistics

nums = [10, 20, 30, 40, 50]
print(statistics.mean(nums))
print(statistics.median(nums))
print(statistics.variance(nums))`;

  const exJson = `import json

data = {"name": "Emil", "age": 25}
json_string = json.dumps(data)
print(json_string)`;

  const exRe = `import re

text = "I love Python"
x = re.search("Python", text)
print(x)`;

  const codeClass =
    "mt-3 border border-gray-200 bg-white rounded-lg p-4 font-mono text-sm leading-7 overflow-x-auto border-l-4 border-[#4a0080]";

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Python Built-in Modules — Full Cheat Sheet
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Python comes with many powerful <strong>built-in modules</strong> that
        give you extra features without installing anything. Below are some of
        the most commonly used ones with simple examples.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* MATH */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            1. <code>math</code> Module
          </h2>
          <p className="mt-2">
            The <code>math</code> module provides mathematical functions like{" "}
            <strong>square root</strong>, <strong>factorial</strong>,{" "}
            <strong>π</strong>, trigonometry, etc.
          </p>
          <pre className={codeClass}>
            <code>{exMath}</code>
          </pre>
        </section>

        {/* RANDOM */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            2. <code>random</code> Module
          </h2>
          <p className="mt-2">
            Used for generating random numbers, choosing random items, shuffling
            lists, etc.
          </p>
          <pre className={codeClass}>
            <code>{exRandom}</code>
          </pre>
        </section>

        {/* DATETIME */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            3. <code>datetime</code> Module
          </h2>
          <p className="mt-2">
            Used to work with <strong>dates</strong> and <strong>time</strong>{" "}
            (current time, formatting, etc.).
          </p>
          <pre className={codeClass}>
            <code>{exDatetime}</code>
          </pre>
        </section>

        {/* OS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            4. <code>os</code> Module
          </h2>
          <p className="mt-2">Used to interact with the operating system.</p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Get current working directory</li>
            <li>List files and folders</li>
            <li>Work with paths and environment variables</li>
          </ul>
          <pre className={codeClass}>
            <code>{exOs}</code>
          </pre>
        </section>

        {/* SYS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            5. <code>sys</code> Module
          </h2>
          <p className="mt-2">
            Gives access to system-level information like{" "}
            <strong>Python version</strong> and <strong>import paths</strong>.
          </p>
          <pre className={codeClass}>
            <code>{exSys}</code>
          </pre>
        </section>

        {/* PLATFORM */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            6. <code>platform</code> Module
          </h2>
          <p className="mt-2">
            Useful for detecting <strong>OS type</strong> and{" "}
            <strong>machine/CPU</strong> details. Good for writing
            cross-platform code.
          </p>
          <pre className={codeClass}>
            <code>{exPlatform}</code>
          </pre>
        </section>

        {/* STATISTICS */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            7. <code>statistics</code> Module
          </h2>
          <p className="mt-2">
            Helpful for basic <strong>data analysis</strong> like mean, median,
            variance, etc.
          </p>
          <pre className={codeClass}>
            <code>{exStatistics}</code>
          </pre>
        </section>

        {/* JSON */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            8. <code>json</code> Module
          </h2>
          <p className="mt-2">
            Used to work with <strong>JSON data</strong>, very common in{" "}
            <strong>APIs</strong> and web applications.
          </p>
          <pre className={codeClass}>
            <code>{exJson}</code>
          </pre>
        </section>

        {/* RE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            9. <code>re</code> Module
          </h2>
          <p className="mt-2">
            The <code>re</code> module deals with{" "}
            <strong>regular expressions</strong> — powerful pattern matching for
            text searching and validation.
          </p>
          <pre className={codeClass}>
            <code>{exRe}</code>
          </pre>
        </section>

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Python&apos;s built-in modules save you time by providing{" "}
            <strong>ready-made functionality</strong> for maths, randomness, OS
            control, date/time, system info, statistics, JSON handling, and text
            searching. Learn these well and your scripts become much more
            powerful with very little code.
          </p>
        </section>
      </div>
    </div>
  );
}
