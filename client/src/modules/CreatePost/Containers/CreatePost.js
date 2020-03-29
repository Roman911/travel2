import React from "react";
import { connect } from 'react-redux';
import { useFormik } from "formik";
import { useMutation } from '@apollo/react-hooks';
import validateForm from "../../../utils/validate";
import { CreatePost } from "../Components/CreatePost";
import { addPostMutation } from "./mutations";

const CreatePostFormContainer = ({ data }) => {
  const [ createPost ] = useMutation(addPostMutation);
  const { handleSubmit, handleChange, values, touched, handleBlur, isSubmitting, setSubmitting, setFieldValue } = useFormik({
    initialValues: {
      type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '',  adultTicket: '', childTicket: '', studentTicket: '', pensionTicket: '',
      text: ''
    },
    validate: values => {
      let errors = {};
      validateForm({values, errors});
      return errors;
    },
    onSubmit: values => {
      const tags = values.tag.split(' ');
      const coordinates = [ values.coordinateY, values.coordinateX ];
      const tickets = [ values.adultTicket, values.childTicket, values.studentTicket, values.pensionTicket ];

      createPost({
        variables: {
          postInput: {
            idAuthor: data.userId,
            type_material: values.type_material,
            title: values.title,
            link: values.link,
            tags: tags,
            tickets: tickets,
            small_text: values.small_text,
            coordinates: coordinates,
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

  return <CreatePost handleSubmit={ handleSubmit } values={ values } touched={ touched } handleChange={ handleChange } handleBlur={ handleBlur } setFieldValue={ setFieldValue } isSubmitting={ isSubmitting } />
};

export default connect(({ user }) => user)(CreatePostFormContainer)