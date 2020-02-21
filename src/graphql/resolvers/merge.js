const DataLoader = require('dataloader');

const Event = require('../../models/events');
const User = require('../../models/Users');
const { dateToString } = require('../../helpers/date');

const eventLoader = new DataLoader(eventIds => {
  return events(eventIds);
});

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    events.sort((a, b) => {
      return (
        eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString())
      );
    });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await eventLoader.load(eventId.toString());
    return event;
  } catch (err) {
    throw err;
  }
};

const author = async authorId => {
  try {
    const author = await User.findById(authorId);
    return {
      ...author._doc,
      _id: author.id,
      createdEvents: () => eventLoader.loadMany(author._doc.createdEvents)
    };
  } catch (err) {
    throw err;
  }
};

const transformEvent = event => {
  return {
    ...event._doc,
    _id: event.id,
    date: dateToString(event._doc.date),
    creator: user.bind(this, event.creator)
  };
};

const transformPost = post => {
  return {
    ...post._doc,
    _id: post.id,
    author: author.bind(this, post.idAuthor),
    event: singleEvent.bind(this, post._doc.event),
    createdAt: dateToString(post._doc.createdAt),
    updatedAt: dateToString(post._doc.updatedAt)
  };
};

exports.transformEvent = transformEvent;
exports.transformPost = transformPost;
