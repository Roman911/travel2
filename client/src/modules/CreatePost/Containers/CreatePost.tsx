import React from "react";
import { connect } from 'react-redux';
import { useFormik } from "formik";
import { useMutation } from '@apollo/react-hooks';
import validateForm from "../../../utils/validate";
import { CreatePost } from "../Components/CreatePost";
import { addPostMutation } from "./mutations";

import { User, UserData } from "../../../types/user";
type MyCreatePostProps = {
  user: User
  data: UserData
}

const CreatePostFormContainer:React.FC<MyCreatePostProps> = ({ user }) => {
  const { data } = user;
  const [ createPost ] = useMutation(addPostMutation);
  const { handleSubmit, handleChange, values, touched, handleBlur, isSubmitting, setSubmitting, setFieldValue } = useFormik({
    initialValues: {
      type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', location: '', work_time: '',  adultTicket: '', childTicket: '', studentTicket: '', pensionTicket: '', isType: 'other', text: ''
    },
    validate: values => {
      let errors = {};
      validateForm({values, errors});
      return errors;
    },
    onSubmit: values => {
      const tags = values.tag.split(' ');
      const coordinates = [ values.coordinateY, values.coordinateX ];
      const tickets = [];
      values.adultTicket && tickets.push(`Дорослий: ${ values.adultTicket } грн`);
      values.childTicket && tickets.push(`Дитячий: ${ values.childTicket } грн`);
      values.studentTicket && tickets.push(`Студенський: ${ values.studentTicket } грн`);
      values.pensionTicket && tickets.push(`Пенсійний: ${ values.pensionTicket } грн`);
      const idAuthor = data ? data.userId : null;
      createPost({
        variables: {
          postInput: {
            idAuthor: idAuthor,
            type_material: values.type_material,
            title: values.title,
            link: values.link,
            tags: tags,
            tickets: tickets,
            small_text: values.small_text,
            coordinates: coordinates,
            location: values.location,
            work_time: values.work_time,
            isType: values.isType,
            text: values.text
          }
        }
      })
        .then(() => {
          setSubmitting(false)
        })
        .catch( () => {
          setSubmitting(false)
        })
    },
  });
  // @ts-ignore
  return <CreatePost handleSubmit={ handleSubmit } values={ values } touched={ touched } handleChange={ handleChange } handleBlur={ handleBlur } setFieldValue={ setFieldValue } isSubmitting={ isSubmitting } />
};

const mapStateToProps = (state: { user: User }) => ({
  user: state.user
});

export default connect(mapStateToProps)(CreatePostFormContainer)