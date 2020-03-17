import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LikeIcon = ({ className, handleChange, iconThumbs }) => {

  return <FontAwesomeIcon className={className} onClick={handleChange} icon={ iconThumbs }/>
};