import React from "react";

export default function BasicMLScikitLearn() {
  return (
    <div className="space-y-6">
      {/* Main title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Basic Machine Learning using Scikit-Learn
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Scikit-Learn provides simple, consistent APIs for common machine
        learning algorithms such as classification, regression, and clustering,
        along with utilities for model selection and evaluation.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Description section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Quick Example: Logistic Regression on Iris Dataset
          </h2>
          <p className="mt-2">
            Below is a minimal example using <code>LogisticRegression</code> on
            the classic Iris dataset. We load the features and labels, fit a
            classifier, and print the training accuracy.
          </p>
        </section>

        {/* Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
clf = LogisticRegression(max_iter=200).fit(X, y)
print(clf.score(X, y))`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Output Block */}
        <p className="font-semibold text-[#4a0080]">Output (example):</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
          <p className="text-slate-800">
            {`0.97
# (Approx training accuracy, depends on solver & version)`}
          </p>
        </div>
      </div>
    </div>
  );
}
