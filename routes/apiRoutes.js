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

  app.get("/api/events", (req, res) => {
    Event.find({sportType: req.query.sportType})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
  });
};
