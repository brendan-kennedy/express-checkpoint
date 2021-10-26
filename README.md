As a client application consuming your api application,
I want to be able to receive a list of movies from the api,
so that I can list them on my interface.

As a client application consuming your application,
I want to be able to search by title for movies from the api,
so that I can list them on my interface.

As a client consuming application, I want to be able to receive
an individual movie record from the api, so that I can display
its data on my interface.

As a client consuming application, I want to be able to send a
new movie record to the api, so that it can be available for my
future use.



GET movies
[/]As a client application consuming your api application,
I want to be able to receive a list of movies from the api,
so that I can list them on my interface.
[/]As a client application consuming your application,
I want to be able to search by title for movies from the api,
so that I can list them on my interface.

GET a movie
[/]As a client consuming application, I want to be able to receive an individual movie record from the api, so that I can display its data on my interface.

POST a movie
[/]As a client consuming application, I want to be able to send a new movie record to the api, so that it can be available for my future use.

DELETE a movie
[/]As a client consuming application, I want to be able to delete a movie record from the api, so that it is no longer an entry in the list of movies.

URL	Method
/movies/{movieId}	DELETE
Name	Description
movieId	Id of movie to delete
Stretch Goal:

[]Use cookies to set 2 cookies named firstName and lastName. 
[]Create a route/endpoint named setCookie that sets the cookies with your first name and last name. 
[]Create a route/endpoint named readCookie that displays your name on the browser using the cookies that were set.


We encourage you to use a service like Postman to test your code before you submit it. This will allow you to verify that your backend is working the way you expect it to.