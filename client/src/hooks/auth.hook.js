import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from "../redax/actions/";

const storageName = 'userData';

export const UseAuth = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data) {
      dispatch(userActions.setData(data))
    }
  }, [dispatch]);
};