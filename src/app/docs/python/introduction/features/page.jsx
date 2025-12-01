import React from "react";

export default function features() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Features</h1>
      <p>Python is a high-level, general-purpose programming language known for its readability, simplicity, and flexibility. It supports multiple programming paradigms and has a large ecosystem of libraries, making it useful for everything from data science to web development.</p>
      
    <div className="space-y-4">
  <h2 className="text-2xl font-bold text-[#4a0080]">Python Features</h2>

  <ul className="list-disc pl-6 space-y-2 text-lg">
    <li> Easy to learn</li>
    <li> Cross-platform</li>
    <li> Interpreted and dynamically typed</li>
    <li> Object-oriented</li>
    <li> Supports multiple programming styles</li>
    <li> Large standard library and ecosystem</li>
    <li> Automatic memory management</li>
  </ul>



  {/* 1. Simple and Easy to Learn */}
  <div>
    <h2 className="text-2xl font-bold flex items-center gap-2 text-[#4a0080]">
      1. Simple and Easy to Learn
    </h2>

    <p className="text-gray-700 mt-2">
      Python syntax is close to natural English. This makes it easier for beginners.
    </p>

    <h3 className="font-semibold mt-4 text-[#4a0080]">Example:</h3>

    {/* Code Block */}
    <div className="bg-gray-100 rounded-lg p-4 mt-2">
      <p className="text-xs text-gray-600 mb-2">python</p>
      <pre className="text-sm text-gray-800">
        print(<span className="text-[#4a0080]">"Hello, Python!"</span>)
      </pre>
    </div>
  </div>

  {/* 2. Interpreted Language */}
  <div>
    <h2 className="text-2xl font-bold flex items-center gap-2 text-[#4a0080]">
       2. Interpreted Language
    </h2>

    <p className="text-gray-700 mt-2">
      Python executes code line-by-line using an interpreter — no need to compile before running.
    </p>

    <h3 className="font-semibold mt-4 text-[#4a0080]">Example:</h3>

    <p className="text-gray-700 mt-2">
      If there's an error, Python stops at that line and shows a message:
    </p>

    {/* Code Block */}
    <div className="bg-gray-100 rounded-lg p-4 mt-2">
      <p className="text-xs text-gray-600 mb-2">python</p>
      <pre className="text-sm text-gray-800">
        print(<span className="text-[#4a0080]">"Start"</span>){"\n"}
        print(10/0) <span className="text-gray-500"># causes error</span>{"\n"}
        print(<span className="text-[#4a0080]">"End"</span>) <span className="text-gray-500"># will not run</span>
      </pre>
    </div>
  </div>

  {/* 3. Dynamically Typed */}
  <div>
     <h2 className="text-2xl font-bold flex items-center gap-2 text-[#4a0080]">
     3. Dynamically Typed  
    </h2>

    <p className="text-gray-700 mt-2">
      You don’t need to declare data types. Python assigns them automatically.
    </p>

    <h3 className="font-semibold mt-4 text-[#4a0080]">Example:</h3>

    {/* Code Block */}
    <div className="bg-gray-100 rounded-lg p-4 mt-2">
       <p className="text-sm text-gray-500 mb-4">python</p>

  <pre className="text-sm leading-6">
    <code>
      <span className="text-black">x = </span>
      <span className="text-[#4a0080]">10</span>
      <span className="text-gray-400">    # integer</span>
      {"\n"}
      <span className="text-black">x = </span>
      <span className="text-[#4a0080]">"Hello"</span>
      <span className="text-gray-400">   # now a string (same variable)</span>
      {"\n"}
      <span className="text-black">print</span>
      <span className="text-black">(</span>
      <span className="text-black">x</span>
      <span className="text-black">)</span>
    </code>
  </pre>
    </div>
  </div>

   {/* 4. Object-Oriented Programming */}
  <section>
    <h2 className="text-2xl font-bold text-[#4a0080]">
       4. Object-Oriented Programming (OOP)
    </h2>

    <p className="text-gray-700 mt-2">
      Python supports classes, objects, inheritance, and encapsulation.
    </p>

    <h3 className="mt-4 font-semibold text-lg text-[#4a0080]">Example:</h3>

    <div className="bg-gray-100 p-4 rounded-xl mt-3">
      <p className="text-sm text-gray-500 mb-2">python</p>

      <pre className="text-sm text-gray-800">
{`class Car:
    def __init__(self, brand):
        self.brand = brand

c = Car("Tesla")
print(c.brand)`}
      </pre>
    </div>
  </section>

    {/* 5. Large Standard Library */}
  <section>
    <h2 className="text-2xl font-bold text-[#4a0080]">
       5. Large Standard Library
    </h2>

    <p className="text-gray-700 mt-2">
      Python comes with built-in modules for tasks like math, file handling, networking, etc.
    </p>

    <h3 className="mt-4 font-semibold text-lg text-[#4a0080]">Example (using a built-in module):</h3>

    <div className="bg-gray-100 p-4 rounded-xl mt-3">
      <p className="text-sm text-gray-500 mb-2">python</p>

      <pre className="text-sm text-gray-800">
{`import math
print(math.sqrt(25))`}
      </pre>
    </div>
  </section>

</div>






    </div>
  );
}
