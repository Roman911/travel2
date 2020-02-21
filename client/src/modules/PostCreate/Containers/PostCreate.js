import  { withFormik } from "formik";

import withHocs from './PostFormHoc';
import store from "../../../redax/store";
import validateForm from "../../../utils/validate";
import { PostCreateForm } from '../Components/PostCreateForm';

const PostCreateFormContainer = withFormik({

  enableReinitialize: true,

  mapPropsToValues: () => ({type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', text: '', adultTicket: '', childTicket: '', studentTicket: '', pensionTicket: ''}),
  validate: values => {
    let errors = {};

    validateForm({values, errors});

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting, setStatus }) => {

    const { createPost } = props;
    const tags = values.tag.split(' ');
    const coordinates = [ values.coordinateY, values.coordinateX ];
    const tickets = [ values.adultTicket, values.childTicket, values.studentTicket, values.pensionTicket ];
    
    createPost({
      postInput: {
        idAuthor: store.getState().user.data.userId,
        type_material: values.type_material,
        title: values.title,
        link: values.link,
        tags: tags,
        tickets: tickets,
        small_text: values.small_text,
        coordinates: coordinates,
        text: values.text
      }
    })
      .then(() => {
      setSubmitting(false)
    })
      .catch( () => {
        setSubmitting(false)
      })
  },
  displayName: 'PostCreateForm'
})(PostCreateForm);

export default withHocs(PostCreateFormContainer)