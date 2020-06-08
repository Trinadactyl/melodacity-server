# Server for Melodacity
-A fun, interactive app for simple music composition.

Check it out: https://melodacity.now.sh/


## Endpoints:
  
  - /users
    Method: GET
    Returns data stored in users table, (including: id, name, username, and date created) 
      - /users/:id
        Takes a user id, and returns the same data for the specified user

  - /auth
    - /auth/login
      Method: POST
      Takes a username and password, and verifies that the user exists in the password and whether they've provided the correct password.                                   

  -/melodies
    Method: GET
    Responds with all the melodies stored in th database (including: id, title, music_key, tonic, progression, melody, date_created, and user_id )
    Method: POST
    Recieves the same info and posts it to the melodies table.
    - /:user_id
      Method: GET 
      Takes in user id, and responds with all the melodies associated with the specified user id.


## Technologies:
-Node.js
-Express
-Mocha
-Nodemon



