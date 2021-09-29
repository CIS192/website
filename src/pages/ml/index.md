---
path: /ml
---

# Machine Learning and Data Science

In lecture, we talked about how **Machine Learning** just boils down to making predictions about the world, given adequete data. We also learned about a variety of different techniques for the machine learning process, namely data pre-processing and splitting data into a training/test split.

Slides from lecture are available [here](https://kirubarajan.nyc3.digitaloceanspaces.com/spring2020/Machine%20Learning%20I.pdf).

## About Pandas and Sci-Kit Learn

Recall from lecture that Pandas is a library that gives us a framework for loading and manipulating data. Data is stored in a spreadsheet-like format of a `DataFrame`, which we can initialize from a `.csv` file (along with a list of dictionaries or by inserting rows into programatically). In addition to Pandas, we will also make use of .

## Analyzing Cereal

In lecture, we took a look at the [Cereal Dataset](https://www.kaggle.com/crawford/80-cereals) from Kaggle.

### Working With Files

We used the following script to read in the `"cereal.csv"` file with Pandas:

```python
import pandas as pd
import matplotlib.pyplot as plt


def get_cereal_df(input_path):
    return pd.read_csv(input_path)


def visualize_data(df):
    plt.scatter(df['calories'], df['sugars'])
    plt.show()


if __name__ == '__main__':
    df = get_cereal_df('cereal.csv')
    visualize_data(df)
```

Note that the code under the `if` statement is only run when we execute the script via the command line (i.e. `python3 data.py`). This is to ensure that we can later import functionality from this module without running all the code in the script.

### Training a Machine Learning Model

Finally, we trained a machine learning model named `KNeighborsRegressor` to predict the rating of a cereal, given it's sugar and calories as **features**. The model is a variant of the K-Nearest Neighbours classifier discussed in class. However, the model performs a _regression_ task of predicting a continuous value, rather than a discrete one.

We first `import` the data points via `get_cereal_df`, partition the data into a training and testing splits, and then train the classifier:

```python
from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import train_test_split
from data import get_cereal_df


if __name__ == '__main__':
    df = get_cereal_df('cereal.csv')

    train_features, test_features = train_test_split(df[['sugars', 'calories']], test_size=0.2)
    train_labels, test_labels = train_test_split(df[['calories']], test_size=0.2)

    model = KNeighborsRegressor(n_neighbors=9)
    model.fit(train_features, train_labels) # ---> does the training!

    print(model.score(test_features, test_labels))
```

Our final line prints the model's evaluation score, which you can read about [here](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsRegressor.html#sklearn.neighbors.KNeighborsRegressor.score).

## Conclusion

There are many different third-party tools and frameworks that make machine learning easy in Python. We discussed in class how they use [Cython](https://cython.org/) to speed up the performance of the code, and this will become more apparent in the following week's lectures, when we look into Natural Language Processing and Deep Learning!