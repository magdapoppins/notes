# SQL

```sql
/* Selections */
select * from people
select name from people
select name, age from people
select distinct age from people

/* Count */
select count(*) from people
select count(distinct age) from people /* how many distinct ages are there */

/* Where */
select name from people where age > 50
select * from people where name <> 'maria' /* not maria */
select name, title from people where birth_year > 1990 and birth_year <= 2000 /* note that this could be done using between as well */
select * from people where (name = 'lukas' or name = 'anton') and birth_year > 2000
select * from people where birth_year between 1990 and 2010
select name from people where deathdate is null /* null means value missing */


/* Like */
select name from people where name like 'M%' /* starts with M */
select name from people where name not like 'M%'

/* Aggregation */
select sum(pages) from books /* You have: sum, min, max, avg */

/* Aliasing */
select max(release_year) - min(release_year) as timespan from books

/* In */
select title from books where genre in ('fantasy', 'scifi')

/* Order by */
select title from books where genre in ('fantasy', 'scifi') order by release_year desc
select name from people order by birthdate



```

### Patterns for like

- `M%` first letter M
- `_r%` second letter r
