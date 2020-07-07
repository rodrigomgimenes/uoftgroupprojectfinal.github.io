const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || 
    "mongodb://localhost/togather",{
        useNewUrlParser: true, useFindAndModify: false
    }, (error) => console.log("ERROR" + error)
  );

  const eventSeed = [
      {
        eventName: "BURNING MAN",
        participants: 4,
        eventDate: 
            new Date("12/04/2020"),
        eventStart: Number,
        eventEnd: Number,
        location: String
      }
  ];

  db.CreateEvent.collection.insertMany(eventSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });