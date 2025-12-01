import React from "react";

export default function TypecastingPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-[#4a0080]">Python - Typecasting</h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">

      {/* Title */}
      <h2 className="text-xl font-semibold ">Specify a Variable Type :</h2>

      {/* Paragraphs */}
      <p>
        There may be times when you want to specify a type on to a variable. This can be done
        with casting. Python is an object-orientated language, and as such it uses classes to
        define data types, including its primitive types.
      </p>

      <p>
        Casting in python is therefore done using constructor functions:
      </p>

      {/* List */}
      <ul className="list-disc pl-6 space-y-2">

        <li>
          <span className="font-semibold text-[#4a0080] drop-shadow">
            int()
          </span>{" "}
          - constructs an integer number from an integer literal, a float literal
          (by removing all decimals), or a string literal (providing the string
          represents a whole number)
        </li>

        <li>
          <span className="font-semibold text-[#4a0080] drop-shadow">
            float()
          </span>{" "}
          - constructs a float number from an integer literal, a float literal or a
          string literal (providing the string represents a float or an integer)
        </li>

        <li>
          <span className="font-semibold text-[#4a0080] drop-shadow">
            str()
          </span>{" "}
          - constructs a string from a wide variety of data types, including strings,
          integer literals and float literals
        </li>

      </ul>

      {/* --- example - 1 - start --- */}
      <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2> 
            <p className="mt-2 text-slate-700">
           Integers :</p>
          </div>
          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
               <span>x = int(1)</span>
          <span className="text-gray-500">     &#35;
 x will be 1</span>
          {"\n"}

          <span>y = int(2.8)</span>
          <span className="text-gray-500">   &#35;
 y will be 2</span>
          {"\n"}

          <span>z = int("3")</span>
          <span className="text-gray-500">   &#35;
 z will be 3</span>
              </pre>
            </div>
          </div>
        </div>
      </section>
      {/* --- example - 1 - end --- */}

      {/* --- example - 2 - start --- */}
      <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
            Floats :</p>
          </div>
          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
             <span>x = float(1)</span>
          <span className="text-gray-500">     &#35;
 x will be 1.0</span>
          {"\n"}

          <span>y = float(2.8)</span>
          <span className="text-gray-500">   &#35;
y will be 2.8</span>
          {"\n"}

          <span>z = int("3")</span>
          <span className="text-gray-500">     &#35;
 z will be 3.0</span>
              </pre>
            </div>
          </div>
        </div>
      </section>
       {/* --- example - 2 - end --- */}


      {/* --- example - 3 - start --- */}
      <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-start justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
            <p className="mt-2 text-slate-700">
           Strings :</p>
          </div>
          
        </div>

        {/* Code Panel */}
        <div className="px-6 pb-8">
          <div className=" bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]"></div>

              {/* Code Area */}
              <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
             <span>x = str("s1")</span>
          <span className="text-gray-500">     &#35;
 x will be 's1'</span>
          {"\n"}

          <span>y = str(2)</span>
          <span className="text-gray-500">        &#35;
y will be '2'</span>
          {"\n"}

          <span>z = str("3.0")</span>
          <span className="text-gray-500">    &#35;
z will be '3.0'</span>
              </pre>
            </div>
          </div>
        </div>
      </section>
       {/* --- example - 3 - end --- */}
      
    </div>

    
            
        </div>
    );
}
