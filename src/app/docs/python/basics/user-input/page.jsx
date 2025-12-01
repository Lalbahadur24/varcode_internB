import React from "react";

export default function UserInputPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-[#4a0080] ">User Input</h1>
           <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
  <p>
    Python allows for user input.
  </p>

  <p>
    That means we are able to ask the user for input.
  </p>

  <p>
    The following example asks for your name, and when you enter a name, it gets 
    printed on the screen:
  </p>
</div>
 {/* -- example-section--- */}
<section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
             Ask for User Inpute :</p>
          </div>
          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
              {`print("Enter your name:")
name = input()
print(f"Hello {name}")`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* -- example-section-end---- */}

        <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">Enter your name: <br />
xyz <br />
Hello xyz</p>      
       </div>
        </div>

      <div className="space-y-4 text-slate-700 leading-relaxed">
      
      <p className="text-lg">
        <span className="font-bold text-[#4a0080]">Using prompt :</span>
      </p>

      <p>
        In the example above, the user had to input their name on a new line. <br />
        The Python <code className="bg-gray-100 px-1 py-0.5 rounded text-[#4a0080]">input()</code> function 
        has a <span className="font-semibold text-[#4a0080]">prompt</span> parameter, which acts 
        as a message you can put in front of the user input, on the same line:
      </p>

    </div>
 
          {/* -- example-section -2--- */}
<section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
            Add a message in front of the user input :</p>
          </div>
          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
              {`name = input("Enter your name: ")
print(f"Hello {name}")`}
              </pre>
            </div>
          </div>
        </div>
      </section>
        {/* -- example-section-2-end---- */}
       
        <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">Enter your name: <br />
Hello xyz</p>      
       </div>
        </div>
  

      <div className="space-y-4 text-slate-700 leading-relaxed">

      <p className="text-lg">
        <span className="font-semibold text-[#4a0080]">Multiple Inputs</span>
      </p>

      <p>
        You can add as many inputs as you want, Python will stop executing at each of them,
        waiting for user input:
      </p>

    </div>
    
     {/* -- example-section- multiple-inputs --- */}
     <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
           Multiple inputs :</p>
          </div>
          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
              {`name = input("Enter your name: ")
print(f"Hello {name}")
fav1 = input("Enter your first favorite color: ")
fav2 = input("Enter your second favorite color: ")
print(f"Your favorite colors are {fav1} and {fav2}")`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* -- example-section- multiple-inputs-- end --- */}

 <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">Enter your name: xyz <br />
Hello xyz <br />
Enter your first favorite color: Purple <br />
Enter your second favorite color: Black <br />
Your favorite colors are Purple and Black <br />

</p>      
       </div>
        </div>
            
        </div>
    );
}
