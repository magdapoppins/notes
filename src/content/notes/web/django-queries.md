# Optimizing Django queries

## Using the cprofile profiler in pycharm

One way to look into what is taking time is to create a test and use "profile run" in pycharm, which will run the test using pythons in-built cprofile.
One of the key values to keep your eyes on is the count of `cursor.execute`. This is the count of db queries preformed.

## Using a custom profiler

You can also use custom profilers such as [abyss](https://github.com/akx/abyss) along with e.g. https://ui.perfetto.dev/ for viewing the trace. There you can similarly search for `cursor.execute` in order to see how many queries happened.

## So I have a lot of queries going on, now what?

Using django + postgresql you can set up SQL logging to see the queries happen in real time. https://www.neilwithdata.com/django-sql-logging

In essence, you'd set loggings `django.db.backends` to `DEBUG`. This will automatically log sql queries in `runserver`.

## Select related vs prefetch related?

Prefetch related will do 2 sql queries and join them on the python side. Prefetch related can do many to many relationships, whereas select related can only work on one to one relationships. Select related only executes one sql query. If counting the nr of executed queries, keep this in mind!

Keep in mind that there are situations in which using prefetch related are ignored, for example on `queryset.iterator()`.
