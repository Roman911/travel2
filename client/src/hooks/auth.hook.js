import { useEffect } from 'react';

import { userActions } from "../redax/actions";
import store from "../redax/store";

const storageName = 'userData';

export const UseAuth = () => {

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data) {
      store.dispatch(userActions.setData(data))
    }
  }, []);
};