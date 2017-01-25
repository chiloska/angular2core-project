# Angular 2 Core Project

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

#Description

The project has the ability to login to a JWT end point and use the claims to get access to a restricted routes using CanActive option through guards.

The enviroment.ts file contians all you need to configure to contact your endpoints for authentification.

The authentification use a application/x-www-form-urlencoded and store in Local Storage a JWT Token with the following format:

{
    {"access_token":"token","token_type":"bearer","expires_in":time}
}

The project also use some code from this repo angular2-jwt (auth0/angular2-jwt) https://github.com/auth0/angular2-jwt to decode the token and verify if still valid.

Hope this project help someone to understand more Angular 2

Happy Code!
REG