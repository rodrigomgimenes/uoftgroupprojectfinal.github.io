const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const createEventSchema = new mongoose.Schema(
    {
    eventName: {
      type: String,
      required: true,
      unique: true
    },
    //participants number
    participants: {
        type: Number,
        required: true
    },

    //date from calendar
    eventDate: {
        type: Date,
        // required: true
    },

    eventStart: {
        type: Number,
        // required: true
    },

    eventEnd: {
        type: Number,
        // required: true
    },

    //this is the location from the 
    Location: {
        type: String,
        required: true
    }
  });
  

const CreateEvent = mongoose.model("CreateEvent", createEventSchema);

module.exports = CreateEvent;
  