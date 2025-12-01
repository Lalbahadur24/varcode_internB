import React from "react";

export default function nestedifelse() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Nested - If - Else</h1>
     
        <p>
        You can have <span className="font-semibold">if statements</span> inside if statements.
        This is called <span className="text-[#4a0080] font-semibold">nested if statements</span>.
      </p>

       {/* -- example -- */}
       <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className="mt-3 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`x = 41
if x > 10:
  print("Above ten,")
  if x > 20:
    print("and also above 20!")
  else:
    print("but not above 20.")
`}
              </pre>
            </div>
          </div>
        </div>
      </section>
       {/* -- example - end -- */}

         <p className="font-semibold">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-700">Above ten,
and also above 20!</p>
              
       </div>
        </div>

          <h2 className="text-2xl font-semibold text-[#4a0080]">
        How Nested If Works
      </h2>

      <p>
        Each level of nesting creates a deeper level of decision-making.
        The code evaluates from the outermost condition inward.
      </p>

        {/* -- example -- */}
       <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className="mt-3 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`age = 25
has_license = True
if age >= 18:
  if has_license:
    print("You can drive")
  else:
    print("You need a license")
else:
  print("You are too young to drive")
`}
              </pre>
            </div>
          </div>
        </div>
      </section>
       {/* -- example - end -- */}

        <p className="font-semibold">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-700">You can drive</p>
              
       </div>
        </div>

      
    </div>
  );
}
