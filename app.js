const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const db = require('./config/database')

const app = express();

//load routes
const todos = require("./Routes/todo")

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User route
app.use('/todos', todos);

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`Server has started on ${port}`)
});