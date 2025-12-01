import React from "react";

export default function DataPreprocessingPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Data Preprocessing</h1>
      <p>Split, scale, and encode features with scikit‑learn.</p>

      <h2>Pipeline</h2>
      <pre><code>{`pip install scikit-learn`}</code></pre>
      <pre><code>{`import pandas as pd
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

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)
clf.fit(X_train, y_train)
print('Score:', clf.score(X_test, y_test))`}</code></pre>
    </div>
  );
}
