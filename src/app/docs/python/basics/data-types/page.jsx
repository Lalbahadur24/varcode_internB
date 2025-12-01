

import React from "react";

export default function DataTypesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Data Types</h1>

      {/* Intro Section */}
      <div className="text-xl text-slate-600 space-y-4">
        <h2 className="text-2xl font-semibold ">Built-in Data Types</h2>

        <p>In programming, data type is an important concept.</p>
        <p>Variables can store data of different types, and different types can do different things.</p>
        <p>Python has the following data types built-in by default, in these categories:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Text Type:</strong> <span className="text-[#4a0080]">str</span></li>

          <li>
            <strong>Numeric Types:</strong>
            <span className="text-[#4a0080]"> int</span>, 
            <span className="text-[#4a0080]"> float</span>, 
            <span className="text-[#4a0080]"> complex</span>
          </li>

          <li>
            <strong>Sequence Types:</strong>
            <span className="text-[#4a0080]"> list</span>, 
            <span className="text-[#4a0080]"> tuple</span>, 
            <span className="text-[#4a0080]"> range</span>
          </li>

          <li><strong>Mapping Type:</strong> <span className="text-[#4a0080]">dict</span></li>

          <li>
            <strong>Set Types:</strong>
            <span className="text-[#4a0080]"> set</span>, 
            <span className="text-[#4a0080]"> frozenset</span>
          </li>

          <li><strong>Boolean Type:</strong> <span className="text-[#4a0080]">bool</span></li>

          <li>
            <strong>Binary Types:</strong>
            <span className="text-[#4a0080]"> bytes</span>, 
            <span className="text-[#4a0080]"> bytearray</span>, 
            <span className="text-[#4a0080]"> memoryview</span>
          </li>

          <li><strong>None Type:</strong> <span className="text-[#4a0080]"> NoneType</span></li>
        </ul>
      </div>

      {/* Getting Data Type Section */}
      <h2 className="text-2xl font-semibold mb-4 text-[#4a0080]">Getting the Data Type :</h2>

      <p className="text-lg">
        You can get the <span className="font-semibold">data type</span> of any object  
        by using the <span className="text-[#4a0080] font-semibold">type()</span> function:
      </p>

      {/* Example Section */}
      <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
              Print the data type of the variable <span className="font-medium">x</span>:
            </p>
          </div>

          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-6">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
{`x = 5
print(type(x))`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <p className="font-semibold text-[#4a0080]">Output:</p>

         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className=" text-slate-800">class 'int'</p>
              
       </div>
        </div>



    </div>
  );
}

