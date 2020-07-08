const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/togather', {useNewUrlParser: true});
const Schema = mongoose.Schema;

const createEventSchema = new Schema(
    {

    createdBy: {
        type: String,
        required: true
    },

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
        required: true
    },

    eventStart: {
        type: String,
        required: true
    },

    eventEnd: {
        type: String,
        required: true
    },

    //this is the location from the 
    location: {
        type: String,
        required: true
    },

    additionalNotes: {
        type: String
    },
    //buid an array for multiple ids(users/persons)
    joined: {
        type: String,
        required: true

    },

    eventType: {
        type: String,
        required: true

    },

    eventCategory: {
        type: String,
        required: true
    }


  });
  

const CreateEvent = mongoose.model("CreateEvent", createEventSchema);

module.exports = CreateEvent;
  