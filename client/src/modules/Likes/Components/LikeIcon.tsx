import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type MyLikeIconProps = {
  className: string
  handleChange: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined
  iconThumbs: IconProp
}

export const LikeIcon:React.FC<MyLikeIconProps> = ({ className, handleChange, iconThumbs }) => {
  return <FontAwesomeIcon className={className} onClick={handleChange} icon={ iconThumbs }/>
};