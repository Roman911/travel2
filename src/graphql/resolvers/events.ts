const Events = require('../../models/events');
// @ts-ignore
const User = require('../../models/Users');

const { transformEvent } = require('./merge');

module.exports = {
  events: async () => {
    try {
      const events = await Events.find();
      return events.map((event: any) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args: any, req: any) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    const event = new Events({
      title: args.title,
      description: args.description,
      price: +args.price,
      date: new Date(args.date),
      creator: req.userId
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = transformEvent(result);
      const creator = await User.findById(req.userId);

      if (!creator) {
        throw new Error('User not found.');
      }
      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
