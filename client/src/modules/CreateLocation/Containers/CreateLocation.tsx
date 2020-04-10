import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { useMutation } from '@apollo/react-hooks';

import { Location } from '../Components/CreateLocation';
import { addLocationMutation } from "./mutations";
import { modalActions } from "../../../redax/actions";
import { User, UserData } from "../../../types/user";
type MyCreateLocationProps = {
  user: User
  data: UserData
  showModal: (arg0: string) => void
}

const CreateLocation: React.FC<MyCreateLocationProps> = ({ user, showModal }) => {
  const { data } = user;
  const [ createLocations ] = useMutation(addLocationMutation);
  const { handleSubmit, handleChange, values, handleBlur, isSubmitting, setSubmitting } = useFormik({
    initialValues: {
      title: '', small_text: '', coordinateY: '', coordinateX: '', isType: 'other', region: '', district: '', city: ''
    },
    onSubmit: values => {
      const coordinates = [ values.coordinateY, values.coordinateX ];
      const idAuthor = data ? data.userId : null;
      createLocations({
        variables: {
          locationsInput: {
            idAuthor: idAuthor,
            title: values.title,
            small_text: values.small_text,
            coordinates: coordinates,
            isType: values.isType,
            region: values.region,
            district: values.district,
            city: values.city
          }
        }
      })
        .then(data => {
          if (data) {
            showModal('Локація успішно добавлена!')
          }
          setSubmitting(false)
        })
        .catch( () => {
          setSubmitting(false)
        })
    }
  })
  // @ts-ignore
  return <Location handleSubmit={ handleSubmit } isSubmitting={ isSubmitting } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } />
}

const mapStateToProps = (state: { user: User }) => ({
  user: state.user
});

export default connect(mapStateToProps, { ...modalActions })(CreateLocation)