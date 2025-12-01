import React from "react";

export default function OperatorsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-[#4a0080]">Python Operators</h1>
            <p className="text-xl text-slate-600">
                Operators are used to perform operations on variables and values.
            </p>
           
           <p className="text-lg text-slate-600">
  In the example below, we use the{" "}
  <span className="text-[#4a0080] font-semibold">+</span> and{" "}
  <span className="text-[#4a0080] font-semibold">*</span> operator to add and multiply together two values:
</p>

  <div className="bg-gray-200 rounded-lg p-4 overflow-x-auto text-[#4a0080] ">
                <pre>
                    <code>{`print(10 + 5)
print(10 * 5)`}</code>
                </pre>
</div>
          {/* ---  Arithmatic operator section --- */}
            <div className="space-y-6">
  <h1 className="text-4xl font-bold text-[#4a0080]">Arithmetic Operators</h1>

  <p className="text-lg text-slate-700">
    Arithmetic operators are used with numeric values to perform common mathematical operations:
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border border-gray-300 font-semibold">Operator</th>
          <th className="p-3 border border-gray-300 font-semibold">Name</th>
          <th className="p-3 border border-gray-300 font-semibold">Example</th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">+</td>
          <td className="p-3 border border-gray-300">Addition</td>
          <td className="p-3 border border-gray-300">x + y</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">-</td>
          <td className="p-3 border border-gray-300">Subtraction</td>
          <td className="p-3 border border-gray-300">x - y</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">*</td>
          <td className="p-3 border border-gray-300">Multiplication</td>
          <td className="p-3 border border-gray-300">x * y</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">/</td>
          <td className="p-3 border border-gray-300">Division</td>
          <td className="p-3 border border-gray-300">x / y</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">%</td>
          <td className="p-3 border border-gray-300">Modulus</td>
          <td className="p-3 border border-gray-300">x % y</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">**</td>
          <td className="p-3 border border-gray-300">Exponentiation</td>
          <td className="p-3 border border-gray-300">x ** y</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">//</td>
          <td className="p-3 border border-gray-300">Floor division</td>
          <td className="p-3 border border-gray-300">x // y</td>
        </tr>
      </tbody>
    </table>
  </div>
           </div>
        {/* -- Arithmatic Operator section - End -- */}
      
      {/* --- Logical - operator section --- */}
      <div className="space-y-6">
  <h1 className="text-4xl font-bold text-[#4a0080]">Logical Operators</h1>

  <p className="text-lg text-slate-700">
    Logical operators are used to combine conditional statements:
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border border-gray-300 font-semibold">Operator</th>
          <th className="p-3 border border-gray-300 font-semibold">Description</th>
          <th className="p-3 border border-gray-300 font-semibold">Example</th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">and</td>
          <td className="p-3 border border-gray-300">Returns True if both statements are true</td>
          <td className="p-3 border border-gray-300">x &lt; 5 and x &lt; 10</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">or</td>
          <td className="p-3 border border-gray-300">Returns True if one of the statements is true</td>
          <td className="p-3 border border-gray-300">x &lt; 5 or x &lt; 4</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">not</td>
          <td className="p-3 border border-gray-300">
            Reverse the result, returns False if the result is true
          </td>
          <td className="p-3 border border-gray-300">not(x &lt; 5 and x &lt; 10)</td>
        </tr>
      </tbody>
    </table>
  </div>
       </div>
     {/* --- Logical - operator section -End --- */}                    

           {/* --- Bitwise operator section --- */}
         <div className="space-y-6">
  <h1 className="text-4xl font-bold text-[#4a0080]">Bitwise Operators</h1>

  <p className="text-lg text-slate-700">
    Bitwise operators are used to compare (binary) numbers:
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border border-gray-300 font-semibold">Operator</th>
          <th className="p-3 border border-gray-300 font-semibold">Name</th>
          <th className="p-3 border border-gray-300 font-semibold">Description</th>
          <th className="p-3 border border-gray-300 font-semibold">Example</th>
        </tr>
      </thead>

      <tbody>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">&amp;</td>
          <td className="p-3 border border-gray-300">AND</td>
          <td className="p-3 border border-gray-300">Sets each bit to 1 if both bits are 1</td>
          <td className="p-3 border border-gray-300">x &amp; y</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">|</td>
          <td className="p-3 border border-gray-300">OR</td>
          <td className="p-3 border border-gray-300">Sets each bit to 1 if one of two bits is 1</td>
          <td className="p-3 border border-gray-300">x | y</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">^</td>
          <td className="p-3 border border-gray-300">XOR</td>
          <td className="p-3 border border-gray-300">Sets each bit to 1 if only one of two bits is 1</td>
          <td className="p-3 border border-gray-300">x ^ y</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">~</td>
          <td className="p-3 border border-gray-300">NOT</td>
          <td className="p-3 border border-gray-300">Inverts all the bits</td>
          <td className="p-3 border border-gray-300">~x</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">&lt;&lt;</td>
          <td className="p-3 border border-gray-300">Zero fill left shift</td>
          <td className="p-3 border border-gray-300">
            Shift left by pushing zeros in from the right and let the leftmost bits fall off
          </td>
          <td className="p-3 border border-gray-300">x &lt;&lt; 2</td>
        </tr>

        <tr>
          <td className="p-3 border border-gray-300 text-[#4a0080] font-semibold">&gt;&gt;</td>
          <td className="p-3 border border-gray-300">Signed right shift</td>
          <td className="p-3 border border-gray-300">
            Shift right by pushing copies of the leftmost bit in from the left, and let the
            rightmost bits fall off
          </td>
          <td className="p-3 border border-gray-300">x &gt;&gt; 2</td>
        </tr>

      </tbody>
    </table>
  </div>
          </div>
        {/* --- Bitwise operator section - End --- */} 
        
            {/* ---Assignment operator section --- */}
             <div className="space-y-6">
  <h1 className="text-4xl font-bold text-[#4a0080]">Assignment Operators</h1>

  <p className="text-lg text-slate-700">
   Assignment operators are used to assign values to variables : </p>
   <div className="overflow-x-auto mt-6">
  <table className="w-full border border-gray-300 text-left">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-3 border border-gray-300 font-semibold">Operator</th>
        <th className="p-3 border border-gray-300 font-semibold">Example</th>
        <th className="p-3 border border-gray-300 font-semibold">Same As</th>
      </tr>
    </thead>

    <tbody>
      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">=</td>
        <td className="p-3 border">x = 5</td>
        <td className="p-3 border">x = 5</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">+=</td>
        <td className="p-3 border">x += 3</td>
        <td className="p-3 border">x = x + 3</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">-=</td>
        <td className="p-3 border">x -= 3</td>
        <td className="p-3 border">x = x - 3</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">*=</td>
        <td className="p-3 border">x *= 3</td>
        <td className="p-3 border">x = x * 3</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">/=</td>
        <td className="p-3 border">x /= 3</td>
        <td className="p-3 border">x = x / 3</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">%= </td>
        <td className="p-3 border">x %= 3</td>
        <td className="p-3 border">x = x % 3</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">//=</td>
        <td className="p-3 border">x //= 3</td>
        <td className="p-3 border">x = x // 3</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">**=</td>
        <td className="p-3 border">x **= 3</td>
        <td className="p-3 border">x = x ** 3</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">&amp;=</td>
        <td className="p-3 border">x &= 3</td>
        <td className="p-3 border">x = x &amp; 3</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">|=</td>
        <td className="p-3 border">x |= 3</td>
        <td className="p-3 border">x = x | 3</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">^=</td>
        <td className="p-3 border">x ^= 3</td>
        <td className="p-3 border">x = x ^ 3</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">&gt;&gt;=</td>
        <td className="p-3 border">x &gt;&gt;= 3</td>
        <td className="p-3 border">x = x &gt;&gt; 3</td>
      </tr>

      <tr className="bg-gray-50">
        <td className="p-3 border text-[#4a0080] font-semibold">&lt;&lt;=</td>
        <td className="p-3 border">x &lt;&lt;= 3</td>
        <td className="p-3 border">x = x &lt;&lt; 3</td>
      </tr>

      <tr>
        <td className="p-3 border text-[#4a0080] font-semibold">:=</td>
        <td className="p-3 border">print(x := 3)</td>
        <td className="p-3 border">x = 3<br/>print(x)</td>
      </tr>
    </tbody>
  </table>
</div>

              </div>
            {/* --- Assignment Operators --- End --- */}

             {/* --- comparision operators --- */}
            <div className="space-y-6">
      
        
        <h1 className="text-4xl font-bold text-[#4a0080]">
          Comparison Operators
        </h1>

        <p className="text-lg mb-6">
          Comparison operators are used to compare two values :
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100 text-left  font-semibold">
                <th className="py-3 px-4 border-b border-gray-300 font-semibold">
                  Operator
                </th>
                <th className="py-3 px-4 border-b border-gray-300 font-semibold">
                  Name
                </th>
                <th className="py-3 px-4 border-b border-gray-300 font-semibold">
                  Example
                </th>
              </tr>
            </thead>

            <tbody className="">
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold text-[#4a0080]">==</td>
                <td className="py-3 px-4">Equal</td>
                <td className="py-3 px-4">x == y</td>
              </tr>

              <tr className="bg-gray-50 border-b border-gray-300">
                <td className="py-3 px-4 font-semibold text-[#4a0080]">!=</td>
                <td className="py-3 px-4">Not equal</td>
                <td className="py-3 px-4">x != y</td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold text-[#4a0080]">&gt;</td>
                <td className="py-3 px-4">Greater than</td>
                <td className="py-3 px-4">x &gt; y</td>
              </tr>

              <tr className="bg-gray-50 border-b border-gray-300">
                <td className="py-3 px-4 font-semibold text-[#4a0080]">&lt;</td>
                <td className="py-3 px-4">Less than</td>
                <td className="py-3 px-4">x &lt; y</td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold text-[#4a0080]">&gt;=</td>
                <td className="py-3 px-4">Greater than or equal to</td>
                <td className="py-3 px-4">x &gt;= y</td>
              </tr>

              <tr>
                <td className="py-3 px-4 font-semibold text-[#4a0080]">&lt;=</td>
                <td className="py-3 px-4">Less than or equal to</td>
                <td className="py-3 px-4">x &lt;= y</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   
          {/* --- comparision operators end--- */}



        </div>
    );
}
