import React from "react";

export default function breakcontinue() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Break / Continue</h1>
      
      {/* --- break --- start --- */}

      <div className="space-y-4">
  <h2 className="text-2xl font-bold">Loop Control Statements: <span className="text-[#4a0080]">break</span> and <span className="text-[#4a0080]">continue</span> :</h2>

  <p>
    In Python loops (both <span className="font-semibold">for</span> and <span className="font-semibold">while</span>), sometimes you want to change the natural flow of the loop. Two special statements are used for that:
  </p>

  <h3 className="text-2xl font-semibold text-[#4a0080]">1. break Statement :</h3>

  <h4 className="text-lg font-semibold">Theory :</h4>
  <p>
    The <span className="font-semibold text-[#4a0080]">break</span> statement immediately stops the loop.
  </p>
  <p>It ends the loop even if the loop condition is still true.</p>
  <p>Code after the loop continues executing normally.</p>

  <h4 className="text-lg font-semibold">When to Use :</h4>
  <ul className="list-disc pl-6 space-y-1">
    <li>When a condition is met</li>
    <li>When searching and the target is found</li>
    <li>To prevent infinite loops</li>
  </ul>

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
{`i = 1
while i <= 10:
    print(i)
    if i == 5:
        break  # Stop the loop when i becomes 5
    i += 1
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
        <p className=" text-slate-800">1
2
3
4
5
</p>
              
       </div>
        </div>

        <p>Even though the condition allowed the loop to continue until 10, the break forced an early exit.</p>

</div>

 {/* --- break --- end --- */}

 {/* --- continue --- start ---  */}

<div className="space-y-4">
  <h3 className="text-2xl font-semibold text-[#4a0080]">2. continue Statement</h3>

  <h4 className="text-lg font-semibold">Theory :</h4>
  <p>
    The <span className="font-semibold text-[#4a0080]">continue</span> statement skips the current
    iteration of the loop.
  </p>
  <p>It does not stop the loop.</p>
  <p>The loop moves directly to the next iteration.</p>

  <h4 className="text-lg font-semibold">When to Use :</h4>
  <p>Use <span className="font-semibold text-[#4a0080]">continue</span> when:</p>

  <ul className="list-disc pl-6 space-y-1">
    <li>You want to ignore specific values</li>
    <li>You want to skip processing certain cases</li>
    <li>You want to avoid writing nested if statements</li>
  </ul>

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
{`i = 0
while i < 5:
    i += 1
    if i == 3:
        continue  # skip printing number 3
    print(i)
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
        <p className=" text-slate-800">1
2
4
5

</p>
              
       </div>
        </div>
<p>The loop skipped printing the value 3, but continued running.</p>


</div>

 {/* --- continue --- end --- */}

 <h3 className="text-2xl font-semibold text-[#4a0080]">Both Together:</h3>

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
{`i = 0

while i < 10:
    i += 1

    if i == 3:
        continue  # skip 3

    if i == 8:
        break  # stop at 8

    print(i)

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
        <p className=" text-slate-800">1
2
4
5
6
7

</p>
              
       </div>
        </div>

         <p>3 was skipped</p>
      <p>Loop ended when <code className="text-[#4a0080] shadow-lg">i</code> reached 8</p>


      <ul>
        <li><strong className="text-[#4a0080] shadow-lg">break</strong> → Ends loop immediately</li>
        <li><strong className="text-[#4a0080] shadow-lg">continue</strong> → Skips one iteration, but loop continues</li>
      </ul>

    </div>
  );
}