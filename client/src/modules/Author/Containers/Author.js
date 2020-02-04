import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";

import { AuthorPost } from "../Components/Author";
import { Loading } from "../../../Components/Loading/Loading";

const Author = ({ isArticle, idAuthor, createdAt }) => {

  const [ items, setItems ] = useState(null);

  const user = useCallback(() => {
    axios.post('/user', {idAuthor})
      .then(({data}) => {
        setItems(data)
      })
  }, [idAuthor, items]);

  useEffect(() => {
    if (!items) {
      user()
    }
  }, [idAuthor]);

  return <>
    { !items ? <Loading/> : <AuthorPost name={items.name} avatar={items.avatar} createdAt={createdAt} isArticle={isArticle} /> }
  </>
};

export default Author