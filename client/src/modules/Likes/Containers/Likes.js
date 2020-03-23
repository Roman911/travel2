import React from "react";
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import { Like } from '../Components/Like';
import { addLikeMutation, removeLikeMutation } from './mutations';
import { postQuery } from '../../Post/Containers/queries';
import { modalActions } from "../../../redax/actions";

const Likes = ({ id, likes, post, data, showModal }) => {
  const quantityLikes = likes.length;
  const userId = data ? data.userId : undefined;
  const userLike = likes.filter((item) => {
    if (item === userId) {
      return item
    }
    return 0
  });

  const [addLike] = useMutation(addLikeMutation);
  const [removeLike] = useMutation(removeLikeMutation);

  const handleChangeAdd = () => {
    if (userId) {
      addLike({
        variables: { postId: id, userId: userId },
        refetchQueries: [{
          query: postQuery,
          variables: { _id: id }
        }]
      }).then(r =>r);
    } else {
      showModal('Для виконання данної дії потрібно авторизоватись')
    }
   };

  const handleChangeRemove = () => {
    removeLike({
      variables: { postId: id, userId: userId },
      refetchQueries: [{
        query: postQuery,
        variables: { _id: id }
      }]
    })
      .then(r =>r)
  };

  return <>
      <Like post={ post } quantityLikes={ quantityLikes } userLike={ userLike } handleChangeAdd={ handleChangeAdd } handleChangeRemove={ handleChangeRemove } userId={ userId } />
    </>
};

export default connect(({ user }) => user, { ...modalActions })(Likes)