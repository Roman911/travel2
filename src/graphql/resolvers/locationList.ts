const LocationsList = require('../../models/LocationList')

type MyLocationsListProps = {
  _id: string
  userId: string
  locationId: string
  action: string
}

module.exports = {
  locationsUserList: async (args: MyLocationsListProps) => {
    try {
      const locations = await LocationsList.find({ userId: args.userId })
      const location = locations.filter((loc: any) => {
        return loc.action === args.action && loc
      })
      if (location.length !== 0) {
        return location
      }
    } catch (err) {
      throw err
    }
  },
  locationUser: async (args: MyLocationsListProps) => {
    try {
      const locations = await LocationsList.find({ locationId: args.locationId })
      const location = locations.filter((loc: any) => {
        return loc.userId === args.userId && loc
      })
      return location[0]
    } catch (err) {
      throw err
    }
  },
  addLocationsUserList: async (args: MyLocationsListProps) => {
    if (args._id) {
      try {
        return await LocationsList.findByIdAndUpdate(args._id, {action: args.action})
      } catch (err) {
        throw err
      }
    } else {
      const locations = new LocationsList({
        userId: args.userId,
        locationId: args.locationId,
        action: args.action
      })
      return await locations.save()
    }
  },
  removeLocationWithUserList: async (args: MyLocationsListProps) => {
    try {
      return await LocationsList.findByIdAndRemove(args._id)
    } catch (err) {
      throw err
    }
  }
}