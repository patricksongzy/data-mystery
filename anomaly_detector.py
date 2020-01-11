from sklearn.ensemble import IsolationForest
import numpy as np

forest = IsolationForest(max_samples=100, contamination=0.1)

def test(x):
    shaped = np.array(x)
    forest.fit(shaped)
    outliers = forest.predict(shaped)
    print(outliers)