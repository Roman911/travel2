import React from "react"
import { useQuery } from '@apollo/react-hooks'

import { locationsQuery } from './queries'
import { Loading } from "../../Components"

import { Maps } from '../../Components'

const Map: React.FC = (): any => {
  const { loading, error, data } = useQuery(locationsQuery);
  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;
  const { locations } = data;

  return <Maps locations={ locations } />
}

export default Map