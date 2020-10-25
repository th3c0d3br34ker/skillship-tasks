# **JWT Auth Server**

## **What is JWT** 😬

[JWT](https://jwt.io/introduction/) or JSON WEB TOKENS is an internet standard for handling Authorization. See [Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token) for the jargon. JWT is mainy used for Authorization and not for Authentication. There is a slight difference between them. Authentication means that taking in the email and passwords and checking up the database if the user actually exists or not. Authorization on the other hand checks if the user is authenticated and has access to the requested resource.

Here is an exmaple JWT Token:  
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFpbmFtIiwiaWF0IjoxNjAyOTI0NjY1fQ.CV61sFnjxEE3tm04gEsKlKofLdi14KZjQQ3FSqKsJ-U`

If you notice there are periods `.` in the token, JWT seperates out the encoded information in three different parts. The first part contains the header, the second part is the payload or the data and the third part contains the information used to hash data.

---

## **Installation** 🔽

### Clone Repository

```code
git clone https://github.com/th3c0d3br34ker/ColorGame.git
cd ColorGame
```

### Installation AND Run

```code
npm install
npm run node start-main
npm run node start-auth
```

### REST Client

You can REST Clients like [Postman](https://www.postman.com/) or this [extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for vscode.

---

## **Usage** 📄

You need to run two servers one `server.js` and `auth-server.js`.

1.  Create a user:

```code
Request:

POST http://localhost:5200/user
Content-Type: application/json

{
   "username": "jainam",
   "password": "alsosomething"
}

Response:

HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: text/plain; charset=utf-8
Content-Length: 7
ETag: W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"
Date: Fri, 23 Oct 2020 06:02:47 GMT
Connection: close

Created
```

2.  Login with that user:

```code
Request:

POST http://localhost:5200/user
Content-Type: application/json

{
   "username": "jainam",
   "password": "alsosomething"
}

Response:

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 498
ETag: W/"1f2-1eN5Slhok/7CwCChxvWJL+PKH0Q"
Date: Fri, 23 Oct 2020 06:03:15 GMT
Connection: close

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphaW5hbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJpS3lJVUNTSTRYSVVUZ2NoQmdaN2V6VG92WVRCUTdhUWxxVTdqUlJDWDZGL3pTRHVJTk5PIiwiaWF0IjoxNjAzNDMyOTk1fQ.d7EKCz81qQnb0eCu3bIyrDfP9oR21ZfMTEm3BZEpKwI",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphaW5hbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJpS3lJVUNTSTRYSVVUZ2NoQmdaN2V6VG92WVRCUTdhUWxxVTdqUlJDWDZGL3pTRHVJTk5PIiwiaWF0IjoxNjAzNDMyOTk1fQ.ysc3vmXN0PHJtco2GQ-Hb0hRArcrk9Q1qbOtmHOAD_4"
}
```

You will get an `accessToken` and a `refreshToken`. These are JSON Web Token.

3.  Request for Posts:

```code
Request:

GET http://localhost:5201/posts
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFpbmFtIiwiaWF0IjoxNjAyOTIzMDMxLCJleHAiOjE2MDI5MjMwNDZ9.Le-DouEHVhuxghXFykh5LL8vlfdU0Hf8VXmvskUCbYw

Response:
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
Date: Fri, 23 Oct 2020 06:04:47 GMT
Connection: close

[
  {
    "username": "Jainam",
    "title": "Post 1"
  },
  {
    "username": "John",
    "title": "Post 2"
  }
]
```

4. Get a new `accessToken` from the `refreshToken`:

```code
Request:

POST http://localhost:5200/token
Content-Type: application/json

{
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFpbmFtIiwiaWF0IjoxNjAyOTIzMDIyfQ.MUjIjeE2n58NEa4yBH4CWzwDqPnkziLAYackXYFp4Ac"
}

Response:

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 146
ETag: W/"92-Rca5/bEXipukOjYjI5CWpiuojp0"
Date: Fri, 23 Oct 2020 06:30:48 GMT
Connection: close

{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDM0MzQ2NDgsImV4cCI6MTYwMzQzNDY2M30.427pzQL5FtoF9ly4gsSALRnOHaz5JnIfSx0MgLzcsrw"
}
```

---

## 🚀 References:

1.  https://www.youtube.com/watch?v=7Q17ubqLfaM
2.  https://www.youtube.com/watch?v=mbsmsi7l3r4
3.  https://www.youtube.com/watch?v=-RCnNyD0L-s
4.  https://jwt.io/introduction/
