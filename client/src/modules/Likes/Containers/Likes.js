import React, { useState } from "react";
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import { Like } from '../Components/Like';
import { addLikeMutation, removeLikeMutation } from './mutations';
import { postQuery } from '../../Post/Containers/queries';
import { InformWindow } from "../../../Components";

const Likes = ({ id, likes, post, data }) => {
  const [ modalError, setModalError ] = useState(false);
  const [ closedModal, setClosedModal ] = useState( false );

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
      setModalError(true);
      setTimeout(() => {
        setClosedModal(true);
        setTimeout(() => {
          setModalError( false );
          setClosedModal( false )
        }, 1000)
      }, 3000)
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

  const handleChangeModal = () => {
    setClosedModal( true );
    setTimeout(() => {
      setModalError( false );
      setClosedModal( false )
    }, 1000)
  };

  return <>
    <Like post={ post } quantityLikes={ quantityLikes } userLike={ userLike } handleChangeAdd={ handleChangeAdd } handleChangeRemove={ handleChangeRemove } userId={ userId } />
    { modalError ? <InformWindow id={'modal'} children={'Для виконання данної дії потрібно авторизоватись'} handleChangeModal={ handleChangeModal } closedModal={ closedModal } /> : '' }
    </>
};

export default connect(({ user }) => user)(Likes)