import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type MyLikeIconProps = {
  className: string
  handleChange: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined
  iconHearts: IconProp
}

export const LikeIcon:React.FC<MyLikeIconProps> = ({ className, handleChange, iconHearts }) => {
  return <FontAwesomeIcon className={ className } onClick={handleChange} icon={ iconHearts }/>
};