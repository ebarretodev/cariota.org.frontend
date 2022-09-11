# Send values to other user
Used to transfer value to other user.

**URL** : `/balance/`

**Method** : `POST`

**Data example**

```json
{
	"token": "HXYZVVX4YDTKcRVnPIsov0ahbSB3",
	"address":"atoi1qqnw8k5nhz0une6r40wue922zys2vp2x3x6tp80gj4chmgvxje376xepwvr",
	"amount": 1000000,
	"message": "send from Cariota"
}
```


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"message": { [MessageObject] },
	"messageId": "e21e4c85a2c2ac6d6319b36c3076170c827348f9745de071e8594b1ab0b2e97a"
}
```

## Error Response

**Condition 1** : If 'token', 'address', 'amount' and/or 'message' are not provided.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Check values"
}
```

**Condition 2** : If there is no funds to send the value designed to this transaction.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "No funds enough to this transaction"
}
```

**Condition 3** : If the address for destination not register on server.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "error": "Destination user doesn't exits"
}
```

**Condition 4** : If the 'token' not register on server.

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "error": "Not authorized transaction."
}
```




