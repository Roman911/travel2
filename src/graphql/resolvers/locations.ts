const Locations = require('../../models/Locations')

type MyLocationsInputProps = {
  idAuthor: string
  linkToPost: string
  cover: string
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
      throw err
    }
  },
  locationsSort: async (args: { types: [string] }) => {
    try {
      const locations = await Locations.find()
      const locationFilter = locations.filter((loc: any) => {
        return args.types.includes(loc.isType) && loc
      })
      return await locationFilter
    } catch (err) {
      throw err
    }
  },
  location: async (args: { _id: string }) => {
    try {
      return await Locations.findById(args._id)
    } catch (err) {
      throw err
    }
  },
  createLocations: async (args: { locationsInput: MyLocationsInputProps }) => {
    const { locationsInput } = args
    const locations = new Locations({
      idAuthor: locationsInput.idAuthor,
      linkToPost: locationsInput.linkToPost,
      cover: locationsInput.cover,
      title: locationsInput.title,
      tags: locationsInput.tags,
      small_text: locationsInput.small_text,
      coordinates: locationsInput.coordinates,
      isType: locationsInput.isType,
      city: locationsInput.city,
      district: locationsInput.district,
      region: locationsInput.region
    })
    return await locations.save()
  }
}