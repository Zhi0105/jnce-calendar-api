# JNCE Clinic Calendar API

* ## **Base URL**

```
https://jnce-calendar-api.herokuapp.com/api/cal
```

===============================


### Create OAuth token sample request

```
HTTP Method: POST
URL: {{url}}/create-tokens
```

##### Sample Request Body

```
{
    GoogleOAuthResponseCode
}
```

##### Parameters

Name | Description | Required | 
--- | --- | --- | 
GoogleAuth | Code | Yes |

===============================


### Create calendar event sample request

```
HTTP Method: POST
URL: {{url}}/create-event
```

##### Sample Request Body

```
{
    "title": "sample title"
    "description": "sample description",
    "location": "sample location",
    "startDateTime": "sample datetime",
    "endDateTime": "sample datetime",
    "access_token": "token"
}
```

##### Parameters

Name | Description | Required | 
--- | --- | --- | 
title | calendar title | Yes |
location | calendar location | Yes |
startDateTime | calendar start-datetime | Yes |
endDateTime | calendar end-datetime | Yes |
access_token | token | Yes |


===============================
