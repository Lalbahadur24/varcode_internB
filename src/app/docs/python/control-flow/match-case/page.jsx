import React from "react";

export default function matchcase() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Match Case</h1>
      
      <div className="space-y-4">
  <p>
    Instead of writing many <span className="font-semibold text-[#4a0080]">if..else</span> statements,
    you can use the <span className="font-semibold text-[#4a0080] shadow-lg">match</span> statement.
  </p>

  <p>
    The <span className="font-semibold text-[#4a0080] shadow-lg">match</span> statement selects one of many code
    blocks to be executed.
  </p>

  <h2 className="text-2xl font-semibold text-[#4a0080]">Why Use match-case?</h2>

  <p className="text-lg">match-case makes code:</p>

  <ul className="list-disc pl-6 space-y-1">
    <li>Cleaner</li>
    <li>Easier to read</li>
    <li>Better for handling multiple possibilities</li>
    <li>Suitable for pattern-based decisions</li>
  </ul>

  <p className="text-lg">It is especially helpful when:</p>

  <ul className="list-disc pl-6 space-y-1">
    <li>Comparing against many possible values</li>
    <li>Working with structured data (like tuples or dictionaries)</li>
    <li>Replacing long chains of if-elif-else statements</li>
  </ul>

 {/* -- example -- */}
    <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Syntax</h2>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-4 pb-6">
          <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`match expression:
  case x:
    code block
  case y:
    code block
  case z:
    code block
`}
              </pre>
            </div>
          </div>
        </div>
      </section>
   {/* -- example -- end -- */}


<p className="text-lg">
    This is how it works:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      The <span className="text-[#4a0080] font-semibold">match</span> expression is evaluated once.
    </li>
    <li>
      The value of the expression is compared with the values of each case.
    </li>
    <li>
      If there is a match, the associated block of code is executed.
    </li>
  </ul>

  <p className="text-lg">
    The example below uses the <span className="text-[#4a0080] font-semibold">weekday number</span> to print the weekday name:
  </p>

{/* -- example -- */}
    <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>
        </div>

        {/* Code Panel */}
        <div className="px-4 pb-6">
          <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`day = 4
match day:
  case 1:
    print("Monday")
  case 2:
    print("Tuesday")
  case 3:
    print("Wednesday")
  case 4:
    print("Thursday")
  case 5:
    print("Friday")
  case 6:
    print("Saturday")
  case 7:
    print("Sunday")
`}
              </pre>
            </div>
          </div>
        </div>
      </section>
   {/* -- example -- end -- */}

 <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">Thursday</p>    
       </div>
        </div>




</div>



      
    </div>
  );
}
