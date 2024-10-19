const Event = require("../models/events.model.js");

const addNewEvent = async (req, res, next) => {
    const { eventName, driveLink, eventDate, thumbnail } = req.body;
    try {
        const event1 = new Event({
            eventName,
            driveLink,
            eventDate,
            thumbnail
        });

        await event1.save();
        res.json({ message: "Event added successfully" });
    } catch (error) {
        next(error);
    }
}

const viewEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        next(error);
    }
}

module.exports = { addNewEvent, viewEvents };
