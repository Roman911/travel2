import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";

import { AuthorPost } from "../Components/Author";
import { Loading } from "../../../Components/Loading/Loading";

const Author = ({ isArticle, user, date }) => {

  console.log(user);

  return <>
    { !user ? <Loading/> : <AuthorPost name={user.name} avatar={user.avatar} date={date} isArticle={isArticle} /> }
  </>
};

export default Author