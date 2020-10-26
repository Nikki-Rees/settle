require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");
const routes = require("./routes/api");
const User = require("./routes/api/user")
const app = express();
const PORT = process.env.PORT || 3001;

//Cloudinary config
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, //ENTER YOUR CLOUDINARY NAME
  api_key: process.env.CLOUDINARY_API_KEY, // THIS IS COMING FROM CLOUDINARY WHICH WE SAVED FROM EARLIER
  api_secret: process.env.CLOUDINARY_API_SECRET // ALSO COMING FROM CLOUDINARY WHICH WE SAVED EARLIER
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

//Added roustes for Cloudinary 
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
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/settle", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log(err));

mongoose.set("useCreateIndex", true, "useFindandModify", false)

mongoose.Promise = global.Promise;



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;