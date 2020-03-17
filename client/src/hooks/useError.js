import React from "react";
import {InformWindow} from "../Components";

export const useError = (errors) => {

  console.log(errors);
  
  const handleChangeModal = () => {
    console.log(handleChangeModal)
  };
  
  const closedModal = () => {
    console.log(closedModal)
  };

  return <InformWindow id={'modal'} children={ errors } handleChangeModal={ handleChangeModal } closedModal={ closedModal } />
};