import React from "react"
import { connect } from 'react-redux'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { InformLocation } from "../Components/InformLocation"
import { modalActions } from "../../../redax/actions"
import { User } from "../../../types/user"
import { locationUserQuery } from './queris'
import { addLocationsUserListMutation } from "./mutations"
import { Loading } from "../../../Components"

type InformUserLocationProps = {
  showModal: (arg0: string) => void
  user: User
  locationId: string
}

const InformUserLocation: React.FC<InformUserLocationProps> = ({ user, showModal, locationId }): any => {
  const [ addLocationsUserList ] = useMutation(addLocationsUserListMutation)
  const { loading, error, data } = useQuery(locationUserQuery, {
    variables: {
      userId: user.data.userId,
      locationId: locationId
    }
  })
  const addLocationMyList = (action: string) => {
    const { locationUser } = data
    const variables: { userId: string, locationId: string, action: string, _id?: string } = {
      userId: user.data.userId,
      locationId: locationId,
      action: action
    }
    locationUser && (variables._id = locationUser._id)
    addLocationsUserList({
      variables: variables,
      refetchQueries: [{
        query: locationUserQuery,
        variables: {
          userId: user.data.userId,
          locationId: locationId
        }
      }]
    }).then(data => {
      if (data) {
        showModal('Локація успішно добавлена у ваш список')
      }
    })
  }
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { locationUser } = data

  return <InformLocation addLocationMyList={ addLocationMyList } locationUser={ locationUser } />
}

export default connect(null, { ...modalActions })(InformUserLocation)