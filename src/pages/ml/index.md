---
path: /ml
---

# Machine Learning and Data Science

In lecture, we talked about how **Machine Learning** just boils down to making predictions about the world, given adequete data. We also learned about a variety of different techniques for the machine learning process, namely data pre-processing and splitting data into a training/test split.

Slides from lecture are available [here](https://kirubarajan.nyc3.digitaloceanspaces.com/spring2020/Machine%20Learning%20I.pdf).

## Analyzing Cereal

In lecture, we took a look at the [Cereal Dataset](https://www.kaggle.com/crawford/80-cereals) from Kaggle.

### Working With Files

We used the following script to load the `"cereal.csv"` file:

```python
import pickle

def get_points(file_path):
    with open(file_path) as dataset:
        points = dict()

        for line in dataset.readlines()[1:]:
            fields = line.split(",")
            name, calories, sugar, rating = fields[0], float(fields[3]), float(fields[9]), float(fields[-1].strip())
            points[name] = calories, sugar, rating

    return points

def save_points(points, file_path):
    with open(file_path, "wb") as points_file:
        pickle.dump(points, points_file)

def load_points(file_path):
    with open(file_path, "rb") as points_file:
        points = pickle.load(points_file)
        return points

points = get_points("cereal.csv")
save_points(points, "dataset.something")
print(load_points("dataset.something"))
```

This script opens the UTF-8 encoded `.csv` file, and reads in the relevant fields of `name`, `sugar`, `calories`, and `rating` before returning a dictionary of the different data points.

The `save_points` and `load_points` functions allow us to _serialize_ a Python object into a file that is stored locally using the first-party `pickle` package. This is convinient, since we don't need to re-parse the file, and instead it is directly loaded into Python's "memory".

### Visualizing Data

In this script, we `import`-ed our previous `get_points` function from the other module, and we used a third-party library named `matplotlib` to plot the points graphically:

```python
from data import get_points
import matplotlib.pyplot as plt

points = get_points("cereal.csv").items()
fig, ax = plt.subplots()

# calories
x = [info[1] for name, info in points]
# rating
y = [info[2] for name, info in points]

ax.scatter(x, y)

# annotating with name
for i, (name, info) in enumerate(points):
    ax.annotate(name[:5], (x[i], y[i]))

plt.show()
```

The script plots either calories or sugar on the x-axis and the cereal's rating on the y-axis. We also annotate each point with the cereal's name to make our graph more interpretable.

### Training a Machine Learning Model

Finally, we trained a machine learning model named `KNeighborsRegressor` to predict the rating of a cereal, given it's sugar and calories as **features**. The model is a variant of the K-Nearest Neighbours classifier discussed in class. However, the model performs a _regression_ task of predicting a continuous value, rather than a discrete one.

We first `import` the data points, partition the data into a training and testing splits, and then train the classifier:

```python
from sklearn.neighbors import KNeighborsRegressor
from data import get_points
import numpy as np

# getting data
data = list(get_points("cereal.csv").items())
split = (len(data) // 10) * 8

# splitting data
training, test = data[:split], data[split:]

# formatting train data
training_data = np.array([(features[0], features[1]) for name, features in training]).astype(np.float64)
training_labels = np.array([features[2] for name, features in training]).astype(np.float64)

# formatting test data
test_data = np.array([(features[0], features[1]) for name, features in training]).astype(np.float64)
test_labels = np.array([features[2] for name, features in training])

# making predictions
knn = KNeighborsRegressor(n_neighbors=3)
knn.fit(training_data, training_labels)

# scoring predictions
print(knn.predict(test_data[:3]))
print(knn.score(test_data, test_labels))
```

Our final two lines print some example predictions, followed by the model's evaluation score.

## Conclusion

There are many different third-party tools and frameworks that make machine learning easy in Python. We discussed in class how they use [Cython](https://cython.org/) to speed up the performance of the code, and this will become more apparent in the following week's lectures, when we look into Natural Language Processing and Deep Learning!

## References

1. Pickling (Official)
2. Read/Writing to Files (Official)
3. Sci-Kit Learn
4. Matplotlib
