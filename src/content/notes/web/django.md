# Questions about the Django web framework

## ORM

### What is the difference between prefetch_related and select_related?

- prefetch_related is a separate db query which is then joined into the model on the python side
- prefetch_related is used when fetching a set of related things (many to many fields)
- select_related is translated into sql only and it preforms a join for each lookup where the relation is joined to the thing itself
- select_related is used to select a single related thing
