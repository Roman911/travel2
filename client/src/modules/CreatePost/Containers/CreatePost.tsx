import React from "react"
import { connect } from 'react-redux'
import { useFormik } from "formik"
import { useMutation } from '@apollo/react-hooks'
import {css} from "aphrodite/no-important"
import validateForm from "../../../utils/validate"
import { addPostMutation } from "./mutations"
import { User, UserData } from "../../../types/user"
import { modalActions } from "../../../redax/actions"
import baseStyle from "../../../styles"
import {Button, MiInput, SectionTitle} from "../../../Components"
import styles from "../Components/CreatePostStyles"
import stylesInput from "../../../Components/Input/InputStyles"
import { optionItem } from "../../../Components/Select/select.config"
import loginStyles from "../../../styles/loginStyles"
import { Editor } from "../Components/Editor"
import {items} from "../Components/confige"
import {EntranceTicketItems} from "../Components/EntranceTicketConfige"
import {EntranceTicket} from "../Components/EntranceTicket"

type MyCreatePostProps = {
  user: User
  data: UserData
  showModal: (arg0: string) => void
}

const CreatePostFormContainer:React.FC<MyCreatePostProps> = ({ user, showModal }) => {
  const { data } = user;
  const [ createPost ] = useMutation(addPostMutation);

  const { handleSubmit, handleChange, values, handleBlur, isSubmitting, setSubmitting, setFieldValue } = useFormik({
    initialValues: { editor: '', type_material: 'post', title: '', image_loader: '', link: '', tag: '', price: '', small_text: '', coordinateY: '', coordinateX: '', location: '', work_time: '',  adultTicket: '', childTicket: '', studentTicket: '', pensionTicket: '', isType: 'other', text: '' },
    validate: values => {
      let errors = {};
      validateForm({values, errors});
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      const tags = values.tag.split(' ');
      const coordinates = [ values.coordinateY, values.coordinateX ];
      const tickets = [];
      values.adultTicket && tickets.push(`Дорослий: ${ values.adultTicket } грн`);
      values.childTicket && tickets.push(`Дитячий: ${ values.childTicket } грн`);
      values.studentTicket && tickets.push(`Студенський: ${ values.studentTicket } грн`);
      values.pensionTicket && tickets.push(`Пенсійний: ${ values.pensionTicket } грн`);
      const idAuthor = data ? data.userId : null;
      createPost({
        variables: {
          postInput: {
            idAuthor: idAuthor,
            type_material: values.type_material,
            title: values.title,
            link: values.link,
            tags: tags,
            tickets: tickets,
            small_text: values.small_text,
            coordinates: coordinates,
            location: values.location,
            work_time: values.work_time,
            isType: values.isType,
            editor: values.editor,
          }
        }
      })
        .then(data => {
          if (data) {
            showModal('Статю успішно створено!')
            resetForm()
          }
          setSubmitting(false)
        })
        .catch( () => {
          setSubmitting(false)
        })
    },
  });

  const form = items.map((item, index) => {
    return <div key={ index } className={css( stylesInput.wrapper )}>
      <p className={css( stylesInput.paragraph )}>{ item.title }</p>
      <input className={css(stylesInput.input)} id={ item.id } type={ item.type }
        // @ts-ignore
             value={ values[item.id] } onChange={handleChange} onBlur={handleBlur} />
    </div>
  });
  const EntranceTicketForm = EntranceTicketItems.map((item, index) => {
    return <EntranceTicket key={ index }
      // @ts-ignore
                           id={ item.id }
                           title={ item.title }
                           type={ item.type }
      // @ts-ignore
                           value={values[item.id]}
                           handleChange={ handleChange }
                           handleBlur={handleBlur}
    />
  });

  return <section className={ css(baseStyle.wrapper) }>
    <SectionTitle title='Редагування' />
    <div className={css(baseStyle.boxShadow, styles.wrapper)}>
      <form onSubmit={ handleSubmit }>
        <div className={ css(baseStyle.flexVFS) }>
          <div className={ css( values.type_material === 'post' ? styles.wrapperBlock : styles.wrapperBlockNews)}>
            <div className={ css( stylesInput.wrapper )}>
              <p className={ css( stylesInput.paragraph) }>Тип матеріалу:</p>
              <MiInput
                // @ts-ignore
                values={ values } handleChange={ handleChange } handleBlur={ handleBlur }
                id='post' name="type_material" type="radio" value='post' tittle='Стаття'
              />
              <MiInput
                // @ts-ignore
                values={ values } handleChange={ handleChange } handleBlur={ handleBlur }
                id='new' name="type_material" type="radio" value='new' tittle='Новина'
              />
            </div>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Обкладинка:</p>
              <input id='image_loader' type='file'/>
            </div>
            { form }
          </div>
          {
            values.type_material === 'post' && <div className={ css(styles.container) }>
              <p className={css( stylesInput.paragraph, styles.text )}>Вхідний Квиток</p>
              { EntranceTicketForm }
            </div>
          }
        </div>
        <div className={css( stylesInput.wrapper )}>
          <p className={css( stylesInput.paragraph )}>Короткий опис:</p>
          <textarea className={css(stylesInput.input)} id='small_text' onChange={handleChange} onBlur={handleBlur} />
        </div>
        {
          values.type_material === 'post' && <>
            <div className={css(baseStyle.flex)}>
              <div className={css( stylesInput.wrapper )}>
                <p className={css( stylesInput.paragraph )}>Широта:</p>
                <input className={css(stylesInput.input)} id='coordinateY' type='text' onChange={handleChange} onBlur={handleBlur}/>
              </div>
              <div className={css( stylesInput.wrapper )}>
                <p className={css( stylesInput.paragraph )}>Довгота:</p>
                <input className={css(stylesInput.input)} id='coordinateX' type='text' onChange={handleChange} onBlur={handleBlur}/>
              </div>
            </div>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Місце знаходження:</p>
              <input className={css(stylesInput.input)} id='location' type='text' onChange={handleChange} onBlur={handleBlur}/>
            </div>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Час роботи:</p>
              <input className={css(stylesInput.input)} id='work_time' type='text' onChange={handleChange} onBlur={handleBlur}/>
            </div>
            <section className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Тип:</p>
              <select className={css(stylesInput.input)} name="isType" id="isType" onChange={ handleChange } onBlur={ handleBlur }>
                { optionItem.map((item, index) => {
                  return <option key={ index } className={ css(stylesInput.option) } value={ item.value }>{ item.title }</option>
                })}
              </select>
            </section>
          </>
        }
        <Editor
          editor={ values.editor }
          onChange={ setFieldValue }
        />
        <div className={ css(loginStyles.inputSub) }>
          <Button type="submit" nameBtn='Зберегти' isSubmitting={ isSubmitting } />
        </div>
      </form>
    </div>
  </section>
};

const mapStateToProps = (state: { user: User }) => ({
  user: state.user
});

export default connect(mapStateToProps, { ...modalActions })(CreatePostFormContainer)