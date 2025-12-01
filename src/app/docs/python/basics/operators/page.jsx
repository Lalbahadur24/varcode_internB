import React from "react";

export default function OperatorsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-extrabold">Operators</h1>
            <p className="text-xl text-slate-600">
                Operators are used to perform operations on variables and values.
            </p>
            <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto text-white">
                <pre>
                    <code>{`print(10 + 5)
print(10 * 5)`}</code>
                </pre>
            </div>
        </div>
    );
}
