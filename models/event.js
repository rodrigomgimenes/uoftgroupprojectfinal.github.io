const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/togather', {useNewUrlParser: true});
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
    eventName: {
      type: String,
    //   required: true,
    //   unique: true
    },
    //participants number
    participants: {
        type: Number,
        // required: true
    },

    //date from calendar
    eventDate: {
        type: Date,
        // required: true
    },

    eventStart: {
        type: String,
        // required: true
    },

    eventEnd: {
        type: String,
        // required: true
    },
    
    notes: {
        type: String
    },

    //this is the location from the 
    location: {
        type: String,
        // required: true
    }
  });
  

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;