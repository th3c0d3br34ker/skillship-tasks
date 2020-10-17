# JWT Auth Server

## Task

Build an AUTH API using JWT.
The user should be:

1.  Asked for his email and password on signup.
2.  Be able to login, logout with his credentials.

Display error messages when necessary.

### What is JWT

[JWT](https://jwt.io/introduction/) or JSON WEB TOKENS is an internet standard for handling Authorization. See [Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Token) for the jargon. JWT is mainy used for Authorization and not for Authentication. There is a slight difference between them. Authentication means that taking in the email and passwords and checking up the database if the user actually exists or not. Authorization on the other hand checks if the user is authenticated and ha

### Example

Here is an exmaple JWT Token.

```code
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFpbmFtIiwiaWF0IjoxNjAyOTI0NjY1fQ.CV61sFnjxEE3tm04gEsKlKofLdi14KZjQQ3FSqKsJ-U
```

If you notice there are periods `.` in the token, JWT seperates out the encoded information in three different parts. The first part is the header, the second part is the payload or the data and the third part contains the information used to hash data.

### Reference

1.  https://www.youtube.com/watch?v=7Q17ubqLfaM
2.  https://www.youtube.com/watch?v=mbsmsi7l3r4
3.  https://www.youtube.com/watch?v=-RCnNyD0L-s
4.  https://jwt.io/introduction/
