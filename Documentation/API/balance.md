# Current balance

Used to collect the current value on user address.

**URL** : `/balance/`

**Method** : `POST`

**Data example**

```json
{
	"token":"CtJigYE1jBdfkr5te25gETAsnqv1"
}
```


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"balance": 10000000
}
```

## Error Response

**Condition** : If 'token' is wrong or not provided.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Check token data"
}
```




