const express = require('express')
const morgan = require('morgan');
const app = express();
const port = 3000;
// const books = require('./mock-data/books.json');
// const authors = require('./mock-data/authors.json');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));






app.listen(port, () => {
  console.log(`Express Checkpoint Listening on port: ${port}`);
});





// app.get('/', (req, res) => {
//   res.send('Dang \'ol Express app up and runnin\'!');
// });

// app.get('/books', (req, res) => {
//   res.json(books);
// });

// app.get('/books/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   let matchFound = false;
//   if (id && typeof id === 'number') {
//     for (let i = 0; i < books.length; i++) {
//       if (books[i].id === id) {
//         res.json([books[i]]);
//         matchFound = true;
//       }
//     }
//     if (!matchFound) {
//       res.status(404)
//         .send(`No book with ID ${id} found`);
//     }
//   } else {
//     res.status(400)
//       .send('Invalid ID');
//   }
// });




// app.post('/books', (req, res) => {
//   let result;
//   let name;
//   console.log(req.body);
//   // if(req.body.firstName !== '' && req.body.lastName !== ''){
//   //     name = [req.body.firstName,req.body.lastName];
//   // }

//   // if (name) {
//   //     let newUserId = users.length + 1
//   //     users.push({
//   //         id: newUserId,
//   //         name: name,
//   //         profilePic: req.body.profilePic,
//   //         lastCalled: req.body.lastCalled,
//   //         timesCalled: req.body.timesCalled,
//   //         notes: req.body.notes
//   //     })
//   //     //reviews.push({ email: review.email, movieId: review.movieId, reviewTitle: review.reviewTitle, reviewText: review.reviewText })
//   //     result = {status: "Success", message: "The user was successfully added."}
//   // } else {
//   //     result = {status: "Failed", message: "The user was not added."}
//   //     res.status(400)
//   // }
//   res.json(result);
//   // /* POST user data using the request body */
// })



// app.get('/authors', (req, res) => {
//   res.json(authors);
// });

// app.get('/authors/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   let matchFound = false;
//   if (id && typeof id === 'number') {
//     for (let i = 0; i < authors.length; i++) {
//       if (authors[i].id === id) {
//         res.json([authors[i]]);
//         matchFound = true;
//       }
//     }
//     if (!matchFound) {
//       res.status(404)
//         .send(`No book with ID ${id} found`);
//     }
//   } else {
//     res.status(400)
//       .send('Invalid ID');
//   }
// });

// module.exports = app;
