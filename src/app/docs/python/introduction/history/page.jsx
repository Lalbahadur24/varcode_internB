import React from "react";

export default function history() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-[#4a0080] ">Python History</h1>
      <p className="text-xl text-slate-600">
        Python has the following history built-in by default.
      </p>

      <div className="space-y-4 text-slate-700 leading-relaxed">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#4a0080]">
        History of Python
      </h2>

      {/* List */}
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Created by:</span> Guido van Rossum in 1989
        </li>
        <li>
          <span className="font-semibold">Name Origin:</span> Inspired by the British comedy show 
          <span className="italic"> “Monty Python’s Flying Circus”</span>
        </li>
        <li>
          <span className="font-semibold">First Release:</span> Python 1.0 in January 1994
        </li>
      </ul>

    </div>

    {/* -- history table -- */}
    <div className=" ">
      <h2 className="text-2xl font-semibold mb-4 text-[#4a0080] ">Major Versions:</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 font-medium border-b border-gray-300">
                Version
              </th>
              <th className="text-left p-3 font-medium border-b border-gray-300">
                Release Date
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border-b border-gray-200">Python 1.0</td>
              <td className="p-3 border-b border-gray-200">January 1994</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3 border-b border-gray-200">Python 2.0</td>
              <td className="p-3 border-b border-gray-200">October 2000</td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-3">Python 3.0</td>
              <td className="p-3">December 2008</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    {/* -- history table - end -- */}

    <div className="space-y-3 text-slate-700 leading-relaxed">

      <p>
        <span className="font-semibold text-[#4a0080]">Note:</span> Python 3.x is not
        backward-compatible with Python 2.x.
      </p>

      <p>
        Python 3.x is the latest and recommended version with modern features and long-term support.
      </p>

    </div>

    <div className="space-y-4 text-slate-700 leading-relaxed">

      <h2 className="text-xl font-semibold text-[#4a0080]">
        Python in the Industry
      </h2>

      <p>
        Python is widely used by top companies :
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-medium">Google, Dropbox, YouTube, Yahoo</span> → use Python as a core or support language
        </li>
        <li>
          <span className="font-medium">Reddit</span> → built entirely with Python
        </li>
      </ul>

      <p>
        This strong industry adoption makes Python one of the most valuable skills for developers today.
      </p>

    </div>
      
    </div>
  );
}
