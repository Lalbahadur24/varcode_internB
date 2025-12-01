import React from "react";

export default function loops() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Loops</h1>
      
    <div className="space-y-4">
  <h1 className="text-2xl font-bold text-[#4a0080]">What Are Loops ?</h1>

  <p>
    Loops let you run a block of code multiple times without repeating it manually.
  </p>

  <p>Python has two main types of loops:</p>

  <ul className="list-disc pl-6 space-y-1">
    <li><strong className="text-[#4a0080] shadow-xl">for loop</strong> — repeats a fixed number of times or iterates over items.</li>
    <li><strong className="text-[#4a0080] shadow-xl">while loop</strong> — repeats while a condition is true.</li>
  </ul>
    {/* ---- for loop ---- */}
  <h2 className="text-2xl font-semibold text-[#4a0080]">1. The for Loop</h2>

  <p>
    A for loop is commonly used to iterate over items like lists, strings, or ranges of numbers.
  </p>

   <p>
    A <strong className="text-[#4a0080] shadow-lg">for loop</strong> is used for iterating over a sequence (that is either a list, a tuple,
    a dictionary, a set, or a string).
  </p>

  <p>
    This is less like the <strong className="text-[#4a0080] shadow-lg">for</strong> keyword in other programming languages, and works
    more like an iterator method as found in other object-oriented programming languages.
  </p>

  <p>
    With the for loop we can execute a set of statements, once for each item in a list, tuple, set, etc.
  </p>
      {/* -- example -- */}
  <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
              Print each fruit in a fruit list:
            </p>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-4 pb-6">
          <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
  print(fruit)
`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* -- example end -- */}

      <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">apple <br />banana <br />cherry</p>
              
       </div>
        </div>
  {/* -- for loop end -- */}

   {/* --- while loop ----  */}
        <h2 className="text-2xl font-semibold text-[#4a0080]">2. The while Loop</h2>

  <p>
    A <strong  className="text-[#4a0080] shadow-lg">while loop</strong> runs as long as a condition remains true.
  </p>
  <br />
   <strong className="text-[#4a0080] font-semibold text-xl">syntax :</strong>

  <div className="">
      <div className="bg-gray-200 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800"> <span className="text-[#4a0080]">while</span> condition:</p>
                 <p className="text-gray-500">     #block of code</p>
              
       </div>
        </div> 

     <p>
    The condition should be something that can be evaluated as <strong className="text-[#4a0080]">True</strong> or <strong className="text-[#4a0080]">False</strong> (a Boolean expression).
  </p>

  <p>
    The code inside the loop (indented block) keeps running repeatedly until the condition becomes <strong className="text-[#4a0080]">False</strong>.
  </p>

      {/* -- example -- */}
  <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
              Print i as long as i is less than 6:
            </p>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-4 pb-6">
          <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-3 w-full text-sm leading-7 font-mono text-slate-800">
{`i = 1
while i < 6:
  print(i)
  i += 1
`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* -- example end -- */}

       <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800"> 1<br /> 2 <br /> 3 <br /> 4 <br /> 5</p>
              
       </div>
        </div>

    {/* --- while loop end----  */}




</div>


      
    </div>
  );
}
