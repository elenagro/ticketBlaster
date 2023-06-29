const Event = require("../../../pkg/models/eventModel");

const getConcertEvents = async (req, res) => {
  try {
    const concertEvents = await Event.find().sort({
      date: -1,
      category: "Musical Concert",
    });
    res.status(200).send(concertEvents);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error!");
  }
};
const getComedyEvents = async (req, res) => {
  try {
    const comedyEvents = await Event.find().sort({
      date: -1,
      category: "Stand-up Comedy",
    });
    res.status(200).send(comedyEvents);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error!");
  }
};

const getOneEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).send(event);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

const createEvent = async (req, res) => {
  try {
    let payload = {
      ...req.body,
      creator: req.auth.uid,
    };
    let e = await Event.create(payload);
    res.status(201).send(e);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

const updateEvent = async (req, res) => {
  try {
    let payload = {
      ...req.body,
      creator: req.auth.uid,
    };
    let e = await Event.updateOne(payload);
    res.status(204).send(e);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

const removeEvent = async (req, res) => {
  try {
    await Event.remove(req.params.id, req.params.uid);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  getConcertEvents,
  getComedyEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  removeEvent,
};
