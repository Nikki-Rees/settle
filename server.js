require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const User = require("./models/user");
const Post = require("./models/post")
const path = require('path');




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view


//Added ruotes for Cloudinary 
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

//Initialise Cors middleware required by Cloudinary
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Session to keep track for user login sessions
app.use(session({
  name: "session-id",
  secret: "123-456-789",
  saveUninitialized: false,
  resave: false
}));


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/settle',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err));

mongoose.set("useCreateIndex", true, "useFindandModify", false)

mongoose.Promise = global.Promise;

app.use(routes);

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;