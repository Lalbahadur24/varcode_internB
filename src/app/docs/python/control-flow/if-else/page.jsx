import React from "react";

export default function ifelse() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">If - Else</h1>
      
       <div className="space-y-4 text-slate-700 leading-relaxed">

      <h2 className="text-2xl font-semibold ">
        What Is an  <span className="font-semibold text-[#4a0080]">if </span>Statement?
      </h2>

      <p>
        An <span className="font-semibold text-[#4a0080]">if statement</span> allows your program to make decisions.
      </p>

      <p>
        It checks a condition and runs code only if the condition is true.
      </p>

    </div>

     <p className="font-bold text-[#4a0080]">Basic Structure : </p>

      <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-[#4a0080]">if <span className="text-slate-700">condition</span></p> <br />
              <p className="text-gray-400"> &#35;code to run if condition is true</p>
       </div>
        </div>
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
{`age = 18
if age >= 18:
    print("You are an adult.")
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
        <p className=" text-slate-700">You <span className="text-[#4a0080]">are</span> an adult.</p>
              
       </div>
        </div>
              {/* --- if - else --- */}
          <p className="text-gray-800 text-base leading-relaxed">
      <span className="font-bold text-2xl text-[#4a0080]">if…else Statement <br /> 
      </span>  Use <code className="bg-gray-100 px-1 rounded text-sm text-[#4a0080]">else</code> when you want code to run if the condition is false.
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
{`age = 15
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
`}
              </pre>
            </div>
          </div>
        </div>
       </section>
      {/* -- example -- end -- */}

       <p className="font-semibold">Output:</p>

        <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-700">You are <span className="text-[#4a0080]">a</span> minor.</p>
              
       </div>
        </div>

        {/* if - else - end -- */}
           
           {/* -- elif -- */}
          <p className="text-gray-800 text-base leading-relaxed">
      <span className="font-bold text-2xl text-[#4a0080]"> elif (Else If) <br /> 
      </span>  Use <code className="bg-gray-100 px-1 rounded text-sm text-[#4a0080]">elif</code> when you nedd to check <span className="font-semibold text-[#4a0080]">multiple conditions</span>.
    </p>

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
{`temperature = 25
if temperature > 30:
    print("It's hot!")
elif temperature > 20:
    print("Nice weather.")
else:
    print("It's cold.")
`}
              </pre>
            </div>
          </div>
        </div>
       </section>

        <p className="font-semibold">Output:</p>
        
        <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-700">Nice weather.</p>
              
       </div>
        </div>

    {/* -- elif -- end -- */}
    
      
    </div>
  );
}
