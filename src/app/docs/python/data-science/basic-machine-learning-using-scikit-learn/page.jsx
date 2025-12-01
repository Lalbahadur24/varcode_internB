import React from "react";

export default function BasicMLScikitLearn() {
  return (
    <div className="prose max-w-none">
      <h1>Basic machine learning using Scikit-Learn</h1>
      <p>
        Scikit-Learn provides simple, consistent APIs for common ML algorithms
        (classification, regression, clustering) and utilities for model
        selection and evaluation.
      </p>

      <h2>Quick example</h2>
      <pre>
        <code>{`from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
clf = LogisticRegression(max_iter=200).fit(X, y)
print(clf.score(X,y))`}</code>
      </pre>
    </div>
  );
}
