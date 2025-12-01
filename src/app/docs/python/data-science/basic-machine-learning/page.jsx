import React from "react";

export default function BasicMLPage() {
  return (
    <div className="space-y-6">
      {/* Main title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Basic Machine Learning
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Minimal regression and classification using scikit-learn.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* --- Regression Section --- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Regression</h2>
          <p className="mt-2">
            A simple linear regression example using synthetic data generated
            from <code>make_regression</code>.
          </p>
        </section>

        {/* Regression Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

X, y = make_regression(n_samples=500, n_features=3, noise=10, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression().fit(X_train, y_train)
pred = model.predict(X_test)
print('R2:', r2_score(y_test, pred))`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Output Block */}
        <p className="font-semibold text-[#4a0080]">Output:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
          <p className="text-slate-800">{`R2: 0.9xx`}</p>
        </div>

        {/* --- Classification Section --- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Classification
          </h2>
          <p className="mt-2">
            Classification using the Breast Cancer dataset and a Random Forest
            model.
          </p>
        </section>

        {/* Classification Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h2 className="text-2xl font-semibold text-[#4a0080]">Example</h2>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42
)

clf = RandomForestClassifier(n_estimators=200, random_state=42).fit(X_train, y_train)
pred = clf.predict(X_test)
print('Accuracy:', accuracy_score(y_test, pred))`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Output Block */}
        <p className="font-semibold text-[#4a0080]">Output:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
          <p className="text-slate-800">{`Accuracy: 0.9xx`}</p>
        </div>
      </div>
    </div>
  );
}
