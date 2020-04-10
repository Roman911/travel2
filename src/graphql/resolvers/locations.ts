const Locations = require('../../models/Locations');

type MyLocationsInputProps = {
  idAuthor: string
  idPost: string
  title: string
  tags: string[]
  small_text: string
  coordinates: number[]
  isType: string
  city: string
  district: string
  region: string
}

module.exports = {
  locations: async () => {
    try {
      return await Locations.find()
    } catch (err) {
      throw err;
    }
  },
  createLocations: async (args: { locationsInput: MyLocationsInputProps }) => {
    const { locationsInput } = args;
    const locations = new Locations({
      idAuthor: locationsInput.idAuthor,
      idPost: locationsInput.idPost,
      title: locationsInput.title,
      tags: locationsInput.tags,
      small_text: locationsInput.small_text,
      coordinates: locationsInput.coordinates,
      isType: locationsInput.isType,
      city: locationsInput.city,
      district: locationsInput.district,
      region: locationsInput.region
    });
    return await locations.save()
  }
};