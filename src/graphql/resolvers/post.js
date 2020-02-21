const Event = require('../../models/events');
const Post = require('../../models/Post');
const { transformPost, transformEvent } = require('./merge');

module.exports = {
  posts: async (args, req) => {
    try {
      const posts = await Post.find({author: req.idAuthor});
      return posts.map(post => {
        return transformPost(post);
      });
    } catch (err) {
      throw err;
    }
  },
  post: async (args) => {
    try {
      const post = await Post.findById(args._id);
      return transformPost(post)
    } catch (err) {
      throw err
    }
  },
  createPost: async (args) => {
    const { postInput } = args;
    const post = new Post({
      title: postInput.title,
      idAuthor: postInput.idAuthor,
      type_material: postInput.type_material,
      coverNews: "undefined",
      coverPost: "undefined",
      link: postInput.link,
      tags: postInput.tags,
      tickets: postInput.tickets,
      small_text: postInput.small_text,
      coordinates: postInput.coordinates,
      photo: postInput.phone,
      text: postInput.text,
      views: 0
    });
    return await post.save()
  },
  postEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    const fetchedEvent = await Event.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: req.userId,
      event: fetchedEvent
    });
    const result = await booking.save();
    return transformBooking(result);
  },
  cancelPost: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};