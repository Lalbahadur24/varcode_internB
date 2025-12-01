import React from "react";

export default function Whatispy() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">What is Python ?</h1>
      
      <div className="space-y-8 text-slate-700 leading-relaxed">

      {/* What is Python */}
      <section>
        {/* <h2 className="text-2xl font-semibold text-[#4a0080]">What is Python?</h2> */}
        <p className="mt-2">
          Python is a popular programming language. It was created by Guido van Rossum,
          and released in 1991.
        </p>

        <p className="mt-4 font-medium text-[#4a0080]">It is used for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>web development (server-side)</li>
          <li>software development</li>
          <li>mathematics</li>
          <li>system scripting</li>
        </ul>
      </section>

      {/* What can Python do? */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">What can Python do?</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Python can be used on a server to create web applications.</li>
          <li>Python can be used alongside software to create workflows.</li>
          <li>Python can connect to database systems. It can also read and modify files.</li>
          <li>Python can be used to handle big data and perform complex mathematics.</li>
          <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
        </ul>
      </section>

      {/* Why Python */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Why Python?</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
          <li>Python has a simple syntax similar to the English language.</li>
          <li>Python has syntax that allows developers to write programs with fewer lines.</li>
          <li>Python runs on an interpreter system, meaning code executes immediately — fast prototyping.</li>
          <li>Python supports procedural, object-oriented, and functional programming styles.</li>
        </ul>
      </section>

      {/* Good to Know */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">Good to know :</h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>The most recent major version is Python 3, which is used in this tutorial.</li>
          <li>
            In this tutorial, Python is written in a text editor. You can also use IDEs like
            Thonny, PyCharm, NetBeans or Eclipse for managing larger projects.
          </li>
        </ul>
      </section>

      {/* Syntax Comparison */}
      <section>
        <h2 className="text-2xl font-semibold text-[#4a0080]">
          Python Syntax compared to other programming languages
        </h2>

        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Python was designed for readability and has similarities to the English language,
            influenced by mathematics.
          </li>
          <li>
            Python uses new lines to complete a command, unlike other languages that use
            semicolons or parentheses.
          </li>
          <li>
            Python relies on indentation to define scope (loops, functions, classes),
            whereas other languages use curly braces.
          </li>
        </ul>
      </section>

    </div>
        
        {/* -- example -- table -- */}
    <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`
print("Hello, World!")`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* -- example -- table -- end --  */}

      <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">Hello, World!
</p>    
       </div>
        </div>

      
    </div>
  );
}