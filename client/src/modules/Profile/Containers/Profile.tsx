import React, {useState} from "react"
import { useQuery } from '@apollo/react-hooks'
import { ProfileMain } from "../Components/ProfileMain"
import { locationsUserQuery } from './queris'

import { User } from '../../../types/user'
import { Loading } from "../../../Components"
type ProfileProps = {
  user: User
}

const Profile: React.FC<ProfileProps> = ({ user }): any => {
  const [ nameSection, setNameSection ] = useState('wantToVisit')
  const { loading, error, data, refetch } = useQuery(locationsUserQuery, {
    variables: {
      userId: user.data.userId,
      action: 'wantToVisit'
    }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { locationsUserList } = data

  const handleClick = (action: string) => {
    setNameSection(action)
    refetch({
      userId: user.data.userId,
      action: action
    })
  }
  return user.data && <ProfileMain handleClick={ handleClick } data={ user.data } nameSection={ nameSection } locationsUserList={ locationsUserList } />
}

export default Profile