import  { withFormik } from "formik";
import { PostCreateForm } from '../Components/PostCreateForm';
import validateForm from "../../../utils/validate";

import store from '../../../redax/store';
import { postActions } from "../../../redax/actions";

const PostCreateFormContainer = withFormik({

  enableReinitialize: true,

  mapPropsToValues: () => ({type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', text: ''}),
  validate: values => {
    let errors = {};

    validateForm({values, errors});

    return errors;
  },

  handleSubmit: (values, { setSubmitting, setStatus }) => {

    const tags = values.tag.split(', ');
    const coordinates = [values.coordinateY, values.coordinateX];

    const postData = {
      idAuthor: store.getState().user.data.userId,
      type_material: values.type_material,
      title: values.title,
      cover: values.image_loader,
      link: values.link,
      tags,
      price: values.price,
      small_text: values.small_text,
      coordinates,
      text: values.text
    };
    store.dispatch(postActions.fetchPost(postData))
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

export default PostCreateFormContainer