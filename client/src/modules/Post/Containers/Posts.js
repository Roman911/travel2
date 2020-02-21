import React from "react";
import {useParams} from 'react-router-dom';
import {Query} from "react-apollo";

import { postQuery } from './queries';
import {Post} from "../Components/Post";
import {Loading} from "../../../Components/Loading/Loading";

const Posts = () => {

  const _id = useParams().id;
  return <Query query={ postQuery } variables={ {_id} }>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error}`;
      
      const { post } = data;
      
      return <Post
        title={ post.title }
        date={ post.createdAt }
        small_text={ post.small_text }
        text={ post.text }
        cover={ post.coverPost }
        views={ post.views }
        author={ post.author }
      />
    }}
  </Query>
};

export default Posts