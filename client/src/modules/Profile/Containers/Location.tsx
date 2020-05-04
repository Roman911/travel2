import React from "react"
import { useMutation, useQuery } from '@apollo/react-hooks'
import { locationQuery } from "./queris"
import { Loading } from "../../../Components"
import { VisualContent } from "../Components/VisualContent"
import { addLocationsUserListMutation } from "../../InformUserLocation/Containers/mutations"
import { removeLocationWithUserListMutation } from './mutations'

type LocationProps = {
  _id: string
  locationId: string
  nameSection: string
  handleClick: (arg: string) => void
}

export const Location: React.FC<LocationProps> = ({ _id, locationId, nameSection, handleClick }): any => {
  const [ addLocationsUserList ] = useMutation(addLocationsUserListMutation)
  const [ removeLocationWithUserList ] = useMutation(removeLocationWithUserListMutation)
  const { loading, error, data } = useQuery(locationQuery, {
    variables: {
      _id: locationId
    }
  })
  const updateLocationMyList = () => {
    addLocationsUserList({
      variables: {
        _id: _id,
        action: 'visited'
      }
    }).then(data => {
      if (data) {
        handleClick('wantToVisit')
      }
    })
  }
  const removeLocation = () => {
    removeLocationWithUserList({
      variables: {
        _id: _id
      }
    }).then(data => {
      if (data) {
        handleClick(nameSection)
      }
    })
  }
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { location } = data

  return <VisualContent location={ location } nameSection={ nameSection } updateLocationMyList={ updateLocationMyList } removeLocation={ removeLocation } />
}