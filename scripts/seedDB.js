const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/settle");

const postSeed = [
  {
    room: "Kitchen",
    title: "Sink",
    condition: "Excellent",
    clean: "Squeaky clean",
    function: "Functioning",
    image: "../../assets/images/countersink.jpg",
    imageID: "countersink.jpg",
    body: "Sink in good working order, tapware clean and tightened",
    date: new Date(Date.now())


  },
  {
    room: "Kitchen",
    title: "Sink pipes",
    condition: "Replacement required",
    clean: "Squeaky clean",
    function: "Functioning",
    image: "../../assets/images/underkitchensink.jpg",
    imageID: "underkitchensink.jpg",
    body: "Sink pipe blockage been resolved, however pipe requires replacement",
    date: new Date(Date.now())
  },
  {
    room: "Kitchen",
    title: "Stove",
    condition: "Good",
    clean: "Acceptable",
    function: "Functioning",
    image: "../../assets/images/stovetop.jpg",
    imageID: "stovetop.jpg",
    body: "Stove top in good working order, stove has been cleaned however some staining remains around hobs",
    date: new Date(Date.now())
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
