const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/togather', {useNewUrlParser: true});
const Schema = mongoose.Schema;

const createEventSchema = new Schema(
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
    location: {
        type: String,
        // required: true
    }
  });
  

const CreateEvent = mongoose.model("CreateEvent", createEventSchema);

module.exports = CreateEvent;
  