const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
const cors = require('cors')

const port = 3000;
// const books = require('./mock-data/books.json');
// const authors = require('./mock-data/authors.json');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())

const movies = JSON.parse(fs.readFileSync("movies.JSON"))

app.get('/movies', (req, res) => {
  if(req.query.title){
    res.send(movies.filter(movie => movie.title.includes(req.query.title)));
  } else {
    res.send(movies);
  }
});

app.get('/movies/:movieId', (req, res) => {

let id = parseInt(req.params.movieId);
  let matchFound = false;
  if (id && typeof id === 'number') {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].movieId === id) {
        res.send(movies[i]);
        matchFound = true;
      }
    }
    if (!matchFound) {
      res.status(404)
        .send(`No movie with ID ${id} found`);
    }
  } else {
    res.status(400)
      .send('Invalid ID');
  }
})

app.post('/movies',function(req,res){

    let result;
    const movieData = req.body;
/* BODY SHOULD BE
{
"id": 200,
"title": "From Paris With Love",
"runtime": 94,
"release_year": 2010,
"director": "Pierre Morel",
}, */
    if(movieData.id && movieData.title && movieData.runtime && movieData.release_year && movieData.director){
        movies.push({ 
          movieId: movieData.id,
          title: movieData.title,
          runtime: movieData.runtime, 
          release_year: movieData.release_year, 
          director: movieData.director
        })

        result = {
            "status": "success",
            "message": "The movie has been successfully added"
        }
    }else{
        result = {
            "status": "failed",
            "message": "The movie has not been added"
        }
        res.status(400);
    }

    res.json(result);
});


app.delete('/movies/:movieId', (req, res) => {
  let matchFound = false;
  let id = parseInt(req.params.movieId);
  if (id && typeof id === 'number') {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].movieId === id) {        
        console.log(movies[i])
        movies.splice(i,1)
        res.send("Resource has been deleted.")
        matchFound = true;
      }
    }
  if (!matchFound) {
      res.status(404)
        .send(`No movie with ID ${id} found`);
    }
  } else {
    res.status(400)
      .send('Invalid ID');
  }
})
  







app.listen(port, () => {
  console.log(`Express Checkpoint Listening on port: ${port}`);
});




// Server from previous GMDB Checkpoint

// const movies = JSON.parse(fs.readFileSync("movies.JSON"))
// const reviews = [{email: 'johndoe@gmail.com', movieId: 1, reviewTitle: "Director is a scumbag", reviewText: "I can't believe Gunn said those things on Twitter... Makes me not want to watch this movie!!!"}]
// const users = [{email: 'johndoe@gmail.com', password: 'password'}];


// app.get('/movies', (req, res) => res.json(movies))
// app.get('/movies/:movieId', (req, res) => res.send(movies.find(movie => movie.movieId === +req.params.movieId)))

// app.get('/search',(req,res) => {
//     const query = decodeURIComponent(req.query.query)
//     const filteredMovies = movies.filter(movie => movie.title.includes(query))

//     res.send(filteredMovies)
// });

// app.get('/reviews/:movieId', (req, res) => res.json(reviews.filter(review => review.movieId === +req.params.movieId)))


// app.post('/register',function(req,res){

//     let result;
//     const user = {email: req.body.email, password: req.body.password};
//     if(user.email && user.password){
//         const existingUserIndex = users.findIndex(oldUser => oldUser.email === user.email)
//         existingUserIndex === -1 ? users.push(user) : users.splice(existingUserIndex, 1, user);

//         result = {
//             "status": "success",
//             "message": "The account has been successfully created"
//         }

//     }else{
//         result = {
//             "status": "failed",
//             "message": "The account has not been created"
//         }
//         res.status(400);
//     }
//     res.json(result);
// });