# SQL

## number 1

```sql
SELECT p.name, sum(CAST(i.price AS INTEGER) * t.total) AS "total_price" FROM persons p
JOIN transactions t ON p.id = t.person_id
JOIN items i ON i.id  = t.item_id
GROUP BY p."name";
```

## number 2

```sql
SELECT t.*, p."name" AS "person_name", i."name" AS "item_name" FROM transactions t
JOIN persons p ON p.id = t.person_id
JOIN items i ON i.id = t.item_id
WHERE t."date" BETWEEN '2020-01-02' AND '2020-06-25';
```

## number 3

```sql
SELECT p."name", count(t.person_id) AS variety FROM transactions t
JOIN persons p ON p.id = t.person_id
JOIN items i ON i.id = t.item_id
GROUP BY p."name"
ORDER BY variety DESC;
```
