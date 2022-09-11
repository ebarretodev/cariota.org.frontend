# Buy values from IOTA
Used to request faucets from the server of IOTA. At this point the transactions use the DEVNET.

**URL** : `/buy/`

**Method** : `POST`

**Data example**

```json
{
	"address": "atoi1qpnak3p4jkluac3plqduel5896yzexj3kx2jw5d2qsq8mq875ggzyugmvcn",
	"token": "fH6LrpetZJfvq4G3j4BNJhLtqlj2"
}
```


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"message":"Iota sended to address"
}
```

## Error Response

**Condition** : If 'address' and/or 'token' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": {
        "message": "Not authorized, needs a user identifier"
        }
}
```




