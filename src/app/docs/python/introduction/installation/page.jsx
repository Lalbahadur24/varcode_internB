import React from "react";

export default function installation() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080]">Installation</h1>
      <div className="space-y-4 text-slate-700 leading-relaxed">

      {/* <h2 className="text-2xl font-semibold text-[#4a0080]">
        Installing Python
      </h2> */}

      <p className="text-lg font-medium text-[#4a0080]">
        Step 1: Check if Python is Already Installed
      </p>

      <p>
        Open Command Prompt (CMD) and run:
      </p>
        
        {/* -- example -- */}
      <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">python --version</p>
        <p className="text-blue-600">python3 --version</p>
      </div>
    </div>
        {/* -- example -- end -- */}
    </div>

     <p>
        If you see an error like this, then Python is not installed:
      </p>
       {/* -- example -- */}
      <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">Python was not found; run without arguments to install from the Microsoft Store...</p>
       
      </div>
    </div>
     {/* -- example -- end -- */}

      <div className="space-y-6 text-slate-700 leading-relaxed">

      {/* Step 2 */}
      <section>
        <h2 className="text-xl font-semibold text-[#4a0080]">Step 2: Download Python</h2>

        <p className="mt-2">
          Visit the official website:
          <a
            href="https://www.python.org/downloads/"
            className="text-blue-600 underline ml-1"
            target="_blank"
          >
            https://www.python.org/downloads/
          </a>
        </p>

        <p className="mt-3">
          Download the latest stable Python version (e.g., <span className="font-semibold">Python 3.13.5</span>).
        </p>

        <p className="mt-4 font-medium">Choose the correct installer:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Windows 64-bit</strong> → Recommended for most systems (Intel i5/i7, AMD Ryzen)
          </li>
          <li>
            <strong>ARM version</strong> → Only if your device specifically supports ARM
          </li>
        </ul>

        <p className="mt-4">
          Check the option <span className="font-semibold">"Add Python.exe to PATH"</span> during installation.
          This ensures Python commands work in the terminal.
        </p>
      </section>

      {/* Step 3 */}
      <section>
        <h2 className="text-xl font-semibold text-[#4a0080]">Step 3: Verify Installation</h2>
        <p className="mt-2">Open Command Prompt / Terminal and run:</p>
      </section>

    </div>
        {/* -- example -- */}
     <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">python --version</p>
      </div>
    </div>
        {/* -- example -- end -- */}
      
      <p> or </p>

 {/* -- example -- */}
 <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">python3 --version</p>
      </div>
    </div>
 {/* -- example -- end -- */}

 <p>If installed correctly, it will display something like:</p>
  {/* -- example -- */}
  <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">Python 3.13.5</p>
      </div>
    </div>
  {/* -- example -- end -- */}

   <div className="space-y-4 text-slate-700 leading-relaxed">

      <h2 className="text-2xl font-semibold text-[#4a0080]">
        Running Python Code
      </h2>

      <p>
        You can run Python programs in the following ways:
      </p>

      <p className="font-semibold text-[#4a0080]">
        1. Python Interactive Shell (REPL) :
      </p>

      <p>
        Start Python directly in the terminal:
      </p>

    </div>
     {/* --- cmd -- */}
     <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        
        <p className="text-blue-600">&gt;
 python <br />
&gt;
&gt;
&gt;
 print("Hello") <br />
Hello</p>
       
      </div>
    </div>
    {/* --- cmd -- end -- */}
 
 <p>This mode is great for testing small code snippets.</p>

 <div className="space-y-6 text-slate-700 leading-relaxed">

      <h2 className="text-2xl font-semibold text-[#4a0080]">
        2. Running Python Files (.py)
      </h2>

      <p>
        For multi-line code:
      </p>

      <ol className="list-decimal pl-6 space-y-2">
        <li>Open an editor or IDE</li>
        <li>Write your Python code</li>
        <li>Save the file with the <span className="font-semibold text-[#4a0080]">.py</span> extension, e.g., <span className="font-medium text-[#4a0080] shadow-slate-800">Demo.py</span></li>
        <li>
          Navigate to the folder in your terminal:
         <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">&gt; cd path/to/folder <br />
&gt; ls     <span className="text-gray-500">&#35;
show files</span> </p>
      </div>
    </div>

        </li>
        <li>
          Run the script:
          <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600">&gt; python Demo.py</p>
      </div>
    </div>
        </li>

        <li>
         Output:
          <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600"> Hello </p>
      </div>
    </div>
        </li>
      </ol>
      

     

    </div>

    
      <h2 className="text-2xl font-semibold text-[#4a0080]">
        3. Importance of the .py File Extension
      </h2>

      <p>The <span className="text-[#4a0080] font-semibold shadow" >.py </span>extension plays a vital role in Python programming. It identifies a file as a Python script and ensures that tools, interpreters, and IDEs handle the file correctly. Without this extension, the Python interpreter and development tools cannot treat the file as executable Python code.</p>

       <div className="">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
        <p className="text-blue-600"> python script.py </p>
      </div>
    </div>

    <p>to execute the file successfully.</p>

    </div>
  );
}
