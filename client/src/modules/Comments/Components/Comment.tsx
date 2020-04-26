import React, {useState} from "react"
import { css } from "aphrodite/no-important"
import baseStyle from "../../../styles"
import styles from "./CommentsStyle"
import { ButtonLink, Date, NameUser } from "../../../Components";
import CreateComment from "../Containers/CreateComment";
import { CommentText } from "./CommentText";
import { ShowComment } from "../Containers/ShowComment";

type MyCommentProps = {
  name: string
  date: string
  text: string
  idComment: string | undefined
  comments: any[]
  postId: string
}

export const Comment: React.FC<MyCommentProps> = ({ name, date, text, idComment, comments, postId }) => {
  const [ showCreateComment, setShowCreateComment ] = useState(false)
  const comment = comments.length !== 0 && comments.map((item, index) => {
    return <ShowComment key={ index } text={ item.text } _id={ item.idAuthor } idComment={ idComment } comments={ [] }  date={ item.createdAt } postId={ postId } />
  })
  const handleClick = () => {
    setShowCreateComment(!showCreateComment)
  }
  return <section className={ css(styles.blockUser) }>
    <div className={ css(baseStyle.flexSB) }>
      <NameUser name={ name } />
      <Date date={ date } format={ 'LL' } />
    </div>
    <CommentText text={ text } />
    <ButtonLink handleClick={ handleClick } nameBtn='відповісти' />
    { showCreateComment && <CreateComment idComment={ idComment } isFirstComment={ false } handleClick={ handleClick } postId={ postId } /> }
    { comment }
  </section>
}