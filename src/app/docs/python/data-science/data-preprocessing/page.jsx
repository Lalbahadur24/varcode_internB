import React from "react";

export default function DataPreprocessingPage() {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Data Preprocessing
      </h1>

      <p className="text-slate-700 leading-relaxed">
        Data preprocessing converts raw data into clean and useful form for
        machine learning. It includes splitting data, scaling numerical
        features, encoding categories, and building automated pipelines.
      </p>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Section: What is Data Preprocessing */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Why Data Preprocessing?
          </h2>
          <p className="mt-2">
            Most ML models expect numerical, scaled, and well-structured
            features. Preprocessing ensures:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Numerical data is standardized for optimal model performance.
            </li>
            <li>Categorical data is encoded into machine-readable vectors.</li>
            <li>
              Training and testing data are separated to avoid data leakage.
            </li>
            <li>
              A single Pipeline automates all steps, preventing manual mistakes.
            </li>
          </ul>
        </section>

        {/* Section: Install */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Install Dependencies
          </h2>
        </section>

        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Command</h3>
          </div>
          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">{`pip install scikit-learn`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Full Pipeline */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Full Preprocessing + Model Pipeline
          </h2>
          <p className="mt-2">Below is a complete example with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Standard scaling for numeric data</li>
            <li>One-Hot encoding for categorical data</li>
            <li>ColumnTransformer for different column types</li>
            <li>Pipeline chaining preprocessing + model</li>
          </ul>
        </section>

        {/* Code Block */}
        <section className="bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-start justify-between p-6">
            <h3 className="text-2xl font-semibold text-[#4a0080]">Example</h3>
          </div>

          <div className="px-6 pb-8">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-1 bg-[#4a0080]" />
                <pre className="p-6 w-full text-sm leading-7 font-mono text-slate-800">
                  {`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression

df = pd.DataFrame({
    'age': [22, 35, 58, 44],
    'city': ['NY', 'SF', 'LA', 'NY'],
    'label': [0, 1, 1, 0],
})

X = df[['age', 'city']]
y = df['label']

num = ['age']
cat = ['city']

pre = ColumnTransformer([
    ('num', StandardScaler(), num),
    ('cat', OneHotEncoder(handle_unknown='ignore'), cat),
])

clf = Pipeline([
    ('pre', pre),
    ('model', LogisticRegression())
])

X_train, X_test, y_train, y_test =
    train_test_split(X, y, test_size=0.25, random_state=42)

clf.fit(X_train, y_train)
print('Score:', clf.score(X_test, y_test))`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Output */}
        <p className="font-semibold text-[#4a0080]">Output (example):</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 whitespace-pre text-sm font-mono">
          <p className="text-slate-800">{`Score: 1.0`}</p>
        </div>

        {/* Additional Concepts */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            More Things You Can Add in Preprocessing
          </h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Min-Max Scaling</strong> for algorithms sensitive to
              scale.
            </li>
            <li>
              <strong>Label Encoding</strong> for ordinal categories.
            </li>
            <li>
              <strong>Polynomial Features</strong> for capturing non-linear
              patterns.
            </li>
            <li>
              <strong>Imputers</strong> to fill missing values automatically.
            </li>
            <li>
              <strong>Feature Selection</strong> to reduce noise & improve
              accuracy.
            </li>
          </ul>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Summary</h2>
          <p className="mt-2">
            Data preprocessing is one of the most important steps in machine
            learning. Scikit-learn Pipelines ensure that all transformations are
            applied consistently during both training and testing, avoiding data
            leakage.
          </p>
        </section>
      </div>
    </div>
  );
}
