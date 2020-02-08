import React, {useState, useCallback, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Post } from "../Components/Post";
import {Loading} from "../../../Components/Loading/Loading";

const Posts = () => {

  const [post, setPost] = useState(null);

  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    axios.get(`/post/${linkId}`)
      .then(({ data }) => {
        setPost(data)
      })
  }, [linkId]);

  useEffect(() => {
    getLink()
  }, [getLink]);

  return post ?
    <Post
      idAuthor={ post.idAuthor }
      title={ post.title }
      small_text={ post.small_text }
      text={ post.text }
      cover={ post.cover }
      views={ post.views }
    />
    : <Loading />
};

export default Posts