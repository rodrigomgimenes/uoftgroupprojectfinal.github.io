const Event = require("../models/event");


module.exports = function(app) {
  app.post("/event", async function(req, res) {
      try {
          console.log(req.body);
          const event = new Event(req.body);
          //save event into mongoDB
          await event.save();
          //new event model
        res.send(event);
      } catch (error) {
          res.status(500).send(error);
      }
  });
};

