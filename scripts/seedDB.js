const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/togather"
  );

  const eventSeed = [
      {
        eventName: "Burnig Man",
        participants: 4,
        eventDate: 06-24-2020


      }
  ];

  db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });