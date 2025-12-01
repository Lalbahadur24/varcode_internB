import React from "react";

export default function BuiltInModules() {
  const dq = String.fromCharCode(34);    // "
  const obr = String.fromCharCode(123);  // {
  const cbr = String.fromCharCode(125);  // }
  const op = String.fromCharCode(40);    // (
  const cp = String.fromCharCode(41);    // )
  const lb = String.fromCharCode(91);    // [
  const rb = String.fromCharCode(93);    // ]
  const cln = String.fromCharCode(58);   // :
  const cm = String.fromCharCode(44);    // ,
  const dot = String.fromCharCode(46);   // .
  const sm = String.fromCharCode(59);    // ;
  const pl = String.fromCharCode(43);    // +
  const mn = String.fromCharCode(45);    // -
  const sl = String.fromCharCode(47);    // /
  const st = String.fromCharCode(42);    // *

  /* EXAMPLES */

  const exMath =
`import math

print${op}math${dot}sqrt${op}25${cp}${cp}
print${op}math${dot}pi${cp}
print${op}math${dot}factorial${op}5${cp}${cp}`;

  const exRandom =
`import random

print${op}random${dot}randint${op}1${cm} 10${cp}${cp}
print${op}random${dot}choice${op}${lb}${dq}apple${dq}${cm} ${dq}banana${dq}${cm} ${dq}cherry${dq}${rb}${cp}`;

  const exDatetime =
`from datetime import datetime

now ${cln} datetime${dot}now${op}${cp}
print${op}now${cp}
print${op}now${dot}year${cp}
print${op}now${dot}strftime${op}${dq}%d${sl}%m${sl}%Y${dq}${cp}`;

  const exOs =
`import os

print${op}os${dot}getcwd${op}${cp}${cp}
print${op}os${dot}listdir${op}${dq}.${dq}${cp}`;

  const exSys =
`import sys

print${op}sys${dot}version${cp}
print${op}sys${dot}path${cp}`;

  const exPlatform =
`import platform

print${op}platform${dot}system${op}${cp}${cp}
print${op}platform${dot}machine${op}${cp}${cp}`;

  const exStatistics =
`import statistics

nums ${cln} ${lb}10${cm} 20${cm} 30${cm} 40${cm} 50${rb}
print${op}statistics${dot}mean${op}nums${cp}${cp}
print${op}statistics${dot}median${op}nums${cp}${cp}
print${op}statistics${dot}variance${op}nums${cp}${cp}`;

  const exJson =
`import json

data ${cln} ${obr}${dq}name${dq}${cln} ${dq}Emil${dq}${cm} ${dq}age${dq}${cln}25${cbr}
json_string ${cln} json${dot}dumps${op}data${cp}
print${op}json_string${cp}`;

  const exRe =
`import re

text ${cln} ${dq}I love Python${dq}
x ${cln} re${dot}search${op}${dq}Python${dq}${cm} text${cp}
print${op}x${cp}`;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">

      <h1 className="text-4xl font-bold">Python Built-in Modules — Full Cheat Sheet</h1>

      <p className="mt-2">
        Python comes with many useful built-in modules that provide extra features without 
        installing anything. Below are the most commonly used modules with clear examples.
      </p>

      {/* MATH */}
      <section>
        <h2 className="text-2xl font-semibold">1. math Module</h2>
        <p className="mt-2">
          The <strong>math</strong> module provides mathematical functions like square root, 
          factorial, logarithms, trigonometry, etc.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exMath}</code></pre>
      </section>

      {/* RANDOM */}
      <section>
        <h2 className="text-2xl font-semibold">2. random Module</h2>
        <p className="mt-2">
          Used for generating random values, selecting random items, shuffling lists, etc.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exRandom}</code></pre>
      </section>

      {/* DATETIME */}
      <section>
        <h2 className="text-2xl font-semibold">3. datetime Module</h2>
        <p className="mt-2">Used to work with dates and time.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exDatetime}</code></pre>
      </section>

      {/* OS */}
      <section>
        <h2 className="text-2xl font-semibold">4. os Module</h2>
        <p className="mt-2">Used to interact with the operating system.</p>
        <ul className="list-disc ml-6 mt-3">
          <li>Reading files</li>
          <li>Creating folders</li>
          <li>Checking directory structure</li>
          <li>Environment variables</li>
        </ul>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exOs}</code></pre>
      </section>

      {/* SYS */}
      <section>
        <h2 className="text-2xl font-semibold">5. sys Module</h2>
        <p className="mt-2">
          Gives access to system-level features such as Python version, system paths, etc.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exSys}</code></pre>
      </section>

      {/* PLATFORM */}
      <section>
        <h2 className="text-2xl font-semibold">6. platform Module</h2>
        <p className="mt-2">
          Useful for detecting operating system and hardware details.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exPlatform}</code></pre>
      </section>

      {/* STATISTICS */}
      <section>
        <h2 className="text-2xl font-semibold">7. statistics Module</h2>
        <p className="mt-2">Useful for analyzing numeric data statistically.</p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exStatistics}</code></pre>
      </section>

      {/* JSON */}
      <section>
        <h2 className="text-2xl font-semibold">8. json Module</h2>
        <p className="mt-2">
          Used to encode and decode JSON data (very useful in APIs).
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exJson}</code></pre>
      </section>

      {/* RE */}
      <section>
        <h2 className="text-2xl font-semibold">9. re Module</h2>
        <p className="mt-2">
          The <strong>re</strong> module deals with regular expressions — patterns to search text.
        </p>
        <pre className="p-3 rounded border bg-gray-50 mt-3"><code>{exRe}</code></pre>
      </section>

      {/* SUMMARY */}
      <section>
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="mt-2">
          Python's built-in modules make programming easier by providing 
          pre-written functions for mathematics, randomness, OS control, 
          date/time, system info, statistics, JSON, and text searching.
        </p>
      </section>

    </article>
  );
}
