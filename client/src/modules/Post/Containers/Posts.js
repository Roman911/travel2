import React from "react";
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { postQuery } from './queries';
import {Post} from "../Components/Post";
import {Loading} from "../../../Components/Loading/Loading";

const Posts = () => {

  const _id = useParams().id;

  const { loading, error, data } = useQuery(postQuery, {
    variables: { _id }
  });

  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  const { post } = data;

  return <Post
    id={ post._id }
    title={ post.title }
    date={ post.createdAt }
    small_text={ post.small_text }
    text={ post.text }
    cover={ post.coverPost }
    views={ post.views }
    likes={ post.likes }
    author={ post.author }
  />
};

export default Posts