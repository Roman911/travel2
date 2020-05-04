import mongoose, { Schema, Document } from 'mongoose'

export interface MyLocationsList extends Document {
  userId: string,
  locationId: string,
  action: string
}

const LocationsListSchema = new Schema({
  userId: String,
  locationId: String,
  action: String,
}, {
  timestamps: true
})

module.exports = mongoose.model<MyLocationsList>('LocationsList', LocationsListSchema)