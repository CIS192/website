---
path: '/django1'
---

# Full Stack Development

> Introduction to Django

In this lecture, we build upon last week’s topics using the Django Framework. Recall that the fundamental protocol of the internet is HTTP (Hyper Text Transfer Protocol).

## About Django

Django is a web development framework that takes a “batteries included” approach. This means a lot of server configuration is done for us, while still being flexible for the developer. This is contrasted with a micro-framework like Flask, where most setup is left up to the developer to implement. A non-exhaustive list of things Django does for you:

2. Built-in SQL abstraction layer (ORM) and pre-defined database connection
3. User Authentication System
4. Pre-Built Admin Page

Django is one of the most widely used web frameworks of all time and is used to power everything from Penn to DoorDash to NASA to Instagram. I personally love it because it alleviates a lot of headaches that can come with web development! However, since a lot of Django is pre-customized, it can be difficult at first to understand what is going on under the hood. In this lecture, we’ll draw as many comparisons to Flask as we can to elucidate the framework’s inner workings.

## Initialization

In this lecture, we will be building a restaurant application that programmatically stores the menu for the restaurant and handles reservations. We install Django through pip by using `pip install django`. Then, we can create a new Django project by running `django-admin startproject restaurant`. This creates a folder named `restaurant` that we can `cd` into. We can then run `python manage.py runserver` and view a cute splash screen at `localhost:8000` (ignore the warnings about unapplied migrations).

## Project Structure

The first file we notice is `manage.py`, which is used to interface with our Django project from the command line (like how we ran our server earlier). There is also an auto-generated `restaurant/` folder that contains a few default files. The `restaurant/settings.py` file contains all the pre-configured settings that Django has provided for us, which includes the database connection, the language, timezone etc. Also note that `restaurant/urls.py` contains only a single route (defined using a regular expression) corresponding to `/admin`.

Django applications are defined using a top-level project (i.e. the `restaurant` folder) and sub-projects called apps that exist within the top-level project. The structure of apps remain consistent (i.e. containing their own `urls.py` and `views.py` etc) throughout the project and allow us to modularize our code. This also helps the project scale reliably as we add more functionality and code to our project.

Let’s create our first app called `about` which will serve the functionality of returning information about our restaurant by running `python manage.py startapp about`. This creates a folder named `about` in our project that contains a `urls.py` and a `views.py` already for us. Finally, in order for Django to recognize this app, we must add `about` as an installed app in the configuration. To do this, open `settings.py` and add `'about'` to the end of the list `INSTALLED_APPS`.

## Creating a “Hello World“ Application

Getting a page to render on Django is a multi-step process, and is a little complicated. First, like with Flask, we must consider what URL route we want our page to be displayed on. Then, we must create a _view_ function that is invoked when the route is accessed which renders some HTML file. Finally, we must create the HTML template itself. Let’s implement these in reverse order to gain a better understanding.

Let’s first create a splash page for our restaurant. Create a folder named `templates` in our `about` folder. Create a file called `splash.html` in `about/templates` containing:

```html
<h1>192 Restaurant</h1>
<p>A restaurant where the only meal is tears from Java programmers.</p>
<p></p>
```

Feel free to open up the file in your favourite web browser to see how the page looks. Next, let’s define a _view_ in `about/views.py`. Add the following code to `view.py`:

```python
def splash(request):
	return render(request, "splash.html", {})
```

The `render` function is provided by Django (and is imported by default), and takes in the request used to prompt the render (i.e. the `request` parameter in the function header), the HTML file and a dictionary of Python variables to pass through to the template. Note the similarity between this function definition and the decorated functions we wrote in the Flask framework.

However, we haven’t linked this view to any particular route. To do this, open `restaurant/urls.py` and import the view we wrote by adding `from about.views import splash` to the top of the file. Finally, we specify the route by appending the route, view and name to the `urlpatterns` list the route specification:

```python
urlpatterns = [
	path('admin/', admin.site.urls),
	path('', splash, name='splash'),
]
```

Finally, if we open our browser to `localhost:8000`, we should see our splash page!

## Defining Models

Right now, our application is a little basic. It would be nice if we were able to show users our restaurants menu. Assume that our menu is constantly changing. Therefore, we want to be able to use a database to store all the different meals. Let’s create a new app to handle this logic using `python manage.py startapp menu`. Before we write any functionality, we want to do is link our newly created app to our top-level restaurant project. Open `restaurant/settings.py` and add `menu` to `INSTALLED_APPS`.

The first thing we want to implement is a class that represents each meal in our menu. Django abstracts all SQL interactions so that you can just write native Python code to define all database behaviour. However, we still need to be able to tell Django that our `Meal` class should be designed for a SQL database - a strongly typed language. This will involve specifying the types of data that our object will contain. Open `menu/models.py` and add the following code:

```python
class Meal(models.Model):
	name = models.CharField(max_length=200)
	description = models.TextField()
	vegan = models.BooleanField()
	price = models.DecimalField(max_digits=6, decimal_places=2)
```

Django comes with a variety of pre-defined model fields ranging from calendar dates to simple text fields. Here we use:

1. `CharField` representing a short string (e.g. names)
2. `TextField` representing a large text input (e.g. entire blog posts)
3. `BooleanField` (you can figure out what data type this is)
4. `DecimalField` (you can figure out what data type this is)

Note that Django also predefines a default integer _primary key_ (or unique identifier) for all objects. We can override this if we want to prevent data redundancy by specifying `primary_key=True` in any of our model’s fields. There are a variety of other custom modifiers we can implement to squeeze more functionality into our site, but we’ll keep it basic for now!

The last thing we need to do is to migrate the database. Migrations are a powerful tool in database management to structure the database to reflect changes in model definitions. Run `python manage.py makemigrations menu` and then execute `python manage.py migrate`. The `makemigrations` command generates a specific list of changes to make to the database schema whereas the `migrate` command actually changes the database to our liking. This is increasingly important when our database is in production since we want changes to our database to be done in a way that doesn’t lose any existing information.

## Admin Management

So, we’ve defined a custom class for the meals that our restaurant serves. However, we don’t really have any ways to instantiate instances of our class yet. Let’s fix that by using the robust Django Admin page. If we look at our `urlpatterns` in `restaurant/urls.py`, we can see a route at `/admin`. Run the server again and pay a visit to `localhost:8000/admin`. Notice it asks for a username and password - which we don’t have yet. Let’s make ourselves admins of our restaurant site by quitting the server (CTRL-C) and running `python manage.py createsuperuser` to enter a username and password for our admin account.

Our admin account is able to manipulate the database however we choose. At first glance, this doesn’t seem too important - can’t we just edit the database directly? Well, first, directly altering our database is 99% of the time a bad idea and second, writing raw SQL isn’t always the most intuitive way to change the database (think if we wanted to pass this application over to the restaurant’s non-technical owner).

Open up the admin page again and log in with your newly created admin account credentials. We’re greeted with a very blank looking portal that doesn’t even have our `Meal` class listed - we have to link the class ourself. This is actually by design, since a lot of Django’s SQL tables are autogenerated and thus don’t need to clutter our nice admin page. In `menu/admin.py` import the class at the top using `from menu.models import Meal` and add `admin.site.register(Meal)`. Go back to the admin page and we should be able to add new meals to the menu! Add some vegan meals and some non-vegan meals.

Two things to appreciate here:

1. Django already comes with a secure implementation of an accounts system.
2. Django’s admin page comes pre-built (and is surprisingly easy to use).

## Querying Model

We are almost done the base of our restaurant website! The last thing we want to do is a a way to retrieve the meals in our database and query by specific fields. In our `menu/view.py` file create a new view function called `meals` that renders a template named `meals.html` (create this view and template based off of the earlier “Hello World” section). Link this view to the route `/meals` in `restaurant/urls.py`. This should render a static page at `/meals`.

We now want a way to programmatically retrieve all the meals and pass them through to the template to render them. We first import the meal class in `menu/views.py` using `from menu.models import Meal`. In our view function, before we call `render`, retrieve all the instances of this class using `meals = Meal.objects.all()`. If we print out `meals`, we should see a `QuerySet` of objects. This is just a fancy way for Django to serialize all of our objects in a Django-compatible way. We can simply iterate over this in Python using `for meal in meals` and printing their names using `print(meal.name)`. Finally, let’s pass this through to the template by adding it into the dictionary in the request call: `return render(request, "meals.html", {"meals": meals})`.

Finally, we can iterate over these objects in our template using a similar syntax as in Flask:

```html
{% for meal in meals %}
<p>{{meal.name}}: {{meal.description}}</p>
<p>Vegan: {{meal.vegan}}</p>
{% endfor %}
```

## Conclusion

In this lecture, we developed an application that uses a SQL database to store meals for a restaurant. These notions are the fundamentals behind any large scale web service from Dropbox to Facebook. In particular, Django does a lot of heavy lifting for us so we don’t need to implement certain complicated aspects of web development like SQL interactions and user accounts. In the next lecture, we will cover (non-admin) user accounts, more complex database querying and cloud deployment.

## Exercises

Implement HW1 in Django using MySQL as a database (instead of the file system). This should take roughly 1 - 2 hours and will be good practice for HW2.
