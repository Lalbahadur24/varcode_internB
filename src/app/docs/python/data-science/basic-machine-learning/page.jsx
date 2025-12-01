import React from "react";

export default function BasicMLPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Basic Machine Learning</h1>
      <p>Minimal regression and classification with scikit‑learn.</p>

      <h2>Regression</h2>
      <pre><code>{`from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

X, y = make_regression(n_samples=500, n_features=3, noise=10, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression().fit(X_train, y_train)
pred = model.predict(X_test)
print('R2:', r2_score(y_test, pred))`}</code></pre>

      <h2>Classification</h2>
      <pre><code>{`from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, test_size=0.2, random_state=42)

clf = RandomForestClassifier(n_estimators=200, random_state=42).fit(X_train, y_train)
pred = clf.predict(X_test)
print('Accuracy:', accuracy_score(y_test, pred))`}</code></pre>
    </div>
  );
}
