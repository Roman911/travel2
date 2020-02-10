import  { withFormik } from "formik";

import withHocs from './PostFormHoc';
import store from "../../../redax/store";
import validateForm from "../../../utils/validate";
import { PostCreateForm } from '../Components/PostCreateForm';

const PostCreateFormContainer = withFormik({

  enableReinitialize: true,

  mapPropsToValues: () => ({type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', text: ''}),
  validate: values => {
    let errors = {};

    validateForm({values, errors});

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting, setStatus }) => {

    const { addPost } = props;

    addPost({
      idAuthor: store.getState().user.data.userId,
      type_material: values.type_material,
      title: values.title,
      cover: values.image_loader,
      link: values.link,
      tags: values.tag,
      price: values.price,
      small_text: values.small_text,
      coordinateY: values.coordinateY,
      coordinateX: values.coordinateX,
      text: values.text
    })
      .then(() => {
      setSubmitting(false)
    })
      .catch(error => {
        setStatus(error.response.data.message);
        setSubmitting(false)
      })
  },
  displayName: 'PostCreateForm'
})(PostCreateForm);

export default withHocs(PostCreateFormContainer)