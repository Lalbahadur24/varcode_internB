import React from "react";

export default function PythonListsFull() {
  const dq = String.fromCharCode(34);

  // Examples
  const exList1 = `mylist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]`;
  const exList2 = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
print(thislist)`;
  const exDup = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, ${dq}apple${dq}, ${dq}cherry${dq}]
print(thislist)`;

  const exChange1 = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thislist[1] = ${dq}blackcurrant${dq}
print(thislist)`;

  const exChange2 = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}, ${dq}orange${dq}, ${dq}kiwi${dq}, ${dq}mango${dq}]
thislist[1:3] = [${dq}blackcurrant${dq}, ${dq}watermelon${dq}]
print(thislist)`;

  const exChange3 = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thislist[1:2] = [${dq}blackcurrant${dq}, ${dq}watermelon${dq}]
print(thislist)`;

  const exChange4 = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thislist[1:3] = [${dq}watermelon${dq}]
print(thislist)`;

  const exInsert = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thislist.insert(2, ${dq}watermelon${dq})
print(thislist)`;

  const exAppend = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thislist.append(${dq}orange${dq})
print(thislist)`;

  const exInsert2 = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thislist.insert(1, ${dq}orange${dq})
print(thislist)`;

  const exExtendList = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
tropical = [${dq}mango${dq}, ${dq}pineapple${dq}, ${dq}papaya${dq}]
thislist.extend(tropical)
print(thislist)`;

  const exExtendTuple = `thislist = [${dq}apple${dq}, ${dq}banana${dq}, ${dq}cherry${dq}]
thistuple = (${dq}kiwi${dq}, ${dq}orange${dq})
thislist.extend(thistuple)
print(thislist)`;

  const methods = [
    { name: "append()", desc: "Adds an element to the end of the list." },
    { name: "clear()", desc: "Removes all elements from the list." },
    { name: "copy()", desc: "Returns a shallow copy of the list." },
    { name: "count()", desc: "Counts how many times a value appears." },
    { name: "extend()", desc: "Appends items from another iterable." },
    { name: "index()", desc: "Returns index of first matching value." },
    { name: "insert()", desc: "Inserts an item at a specific position." },
    { name: "pop()", desc: "Removes and returns an element at index." },
    { name: "remove()", desc: "Removes the first matching value." },
    { name: "reverse()", desc: "Reverses the list in-place." },
    { name: "sort()", desc: "Sorts the list in ascending order." }
  ];

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-10">

      <h1 className="text-4xl font-bold">Python Lists — Full Notes</h1>

      {/* INTRO */}
      <section>
        <h2 className="text-2xl font-semibold">What Is a List?</h2>
        <p className="mt-2">
          A <strong>list</strong> in Python is an ordered, changeable collection that can store multiple values.
          Lists allow duplicates and can contain any data type.
        </p>

        <p className="mt-3">Lists are created using square brackets:</p>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exList1}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Printing a List</h3>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exList2}</code></pre>

        <h3 className="text-xl font-semibold mt-4">Lists Allow Duplicate Values</h3>
        <p className="mt-1">Because lists are indexed, duplicates are allowed.</p>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exDup}</code></pre>
      </section>

      {/* CHANGE ITEMS */}
      <section>
        <h2 className="text-2xl font-semibold">Changing List Items</h2>
        <p className="mt-2">
          Lists are mutable, meaning you can update, delete, or add items after creation.
        </p>

        <h3 className="text-lg font-semibold mt-3">1. Change a Single Item</h3>
        <p>Modify any list element using its index.</p>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exChange1}</code></pre>

        <h3 className="text-lg font-semibold mt-4">2. Change a Range of Items</h3>
        <p>You can replace multiple values at once using slicing.</p>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exChange2}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Insert More Items Than Replaced</h3>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exChange3}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Insert Fewer Items Than Replaced</h3>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exChange4}</code></pre>
      </section>

      {/* INSERT */}
      <section>
        <h2 className="text-2xl font-semibold">Insert Items</h2>
        <p className="mt-2">
          Use <strong>insert()</strong> to place an element at a specific index.
        </p>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exInsert}</code></pre>
      </section>

      {/* ADD ITEMS */}
      <section>
        <h2 className="text-2xl font-semibold">Adding Items</h2>

        <h3 className="text-lg font-semibold mt-2">Append()</h3>
        <p>Adds an item at the end of the list.</p>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exAppend}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Insert at a Specific Position</h3>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exInsert2}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Extend from Another List</h3>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exExtendList}</code></pre>

        <h3 className="text-lg font-semibold mt-4">Extend from Any Iterable</h3>
        <pre className="p-3 mt-2 rounded border bg-gray-50"><code>{exExtendTuple}</code></pre>
      </section>

      {/* METHODS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Python List Methods</h2>
        <p className="mb-3">Python provides several built-in methods to work efficiently with lists.</p>

        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Method</th>
              <th className="border p-2">Definition</th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m, i) => (
              <tr key={i}>
                <td className="border p-2 font-mono">{m.name}</td>
                <td className="border p-2">{m.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}
