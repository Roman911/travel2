import React from "react";
import { css } from "aphrodite/no-important";
import { FormikProps } from "formik";
import baseStyle from "../../../styles";
import { Button, SectionTitle, MiInput, Input } from "../../../Components";
import { EntranceTicket } from "./EntranceTicket";
import { MainText } from "./MainText";
import styles from "./CreatePostStyles";
import stylesInput from "../../../Components/Input/InputStyles";
import loginStyles from "../../../styles/loginStyles";
import { items } from './confige';
import { EntranceTicketItems } from './EntranceTicketConfige';

export const CreatePost = (props: FormikProps<any>) => {
  const {
    handleSubmit,
    values,
    touched,
    handleChange,
    handleBlur,
    isSubmitting
  } = props;

  const form = items.map((item, index) => {
    return <Input key={ index } id={ item.id } title={ item.title } type={ item.type } value={ values[item.id] }
      // @ts-ignore
                  touched={ touched[item.id] } handleChange={ handleChange } handleBlur={ handleBlur }/>
  });

  const EntranceTicketForm = EntranceTicketItems.map((item, index) => {
    return <EntranceTicket key={ index } id={ item.id } title={ item.title } type={ item.type } value={values[item.id]}
      // @ts-ignore
                           touched={touched[item.id]}
                           handleChange={ handleChange } handleBlur={handleBlur}/>
  });
  
  return <section className={ css(baseStyle.wrapper) }>
    <SectionTitle title='Редагування' />
    <div className={css(baseStyle.boxShadow, styles.wrapper)}>
      <form onSubmit={ handleSubmit }>
        <div className={ css(baseStyle.flexVFS) }>
          <div className={css(styles.wrapperBlock)}>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Тип матеріалу:</p>
              <MiInput
                // @ts-ignore
                values={ values } handleChange={ handleChange } handleBlur={ handleBlur } id='post' name="type_material" type="radio" value='post' tittle='Стаття' />
              <MiInput
                // @ts-ignore
                values={ values } handleChange={ handleChange } handleBlur={ handleBlur } id='new' name="type_material" type="radio" value='new' tittle='Новина' />
              <input id='tittle' type="text"/>
            </div>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Обкладинка:</p>
              <input id='image_loader' type='file'/>
            </div>
            { form }
          </div>
          <div className={ css(styles.container) }>
            <p className={css( stylesInput.paragraph, styles.text )}>Вхідний Квиток</p>
            { EntranceTicketForm }
          </div>
        </div>
        <div className={css( stylesInput.wrapper )}>
          <p className={css( stylesInput.paragraph )}>Короткий опис:</p>
          <textarea className={css(stylesInput.input)} id='small_text' onChange={handleChange} onBlur={handleBlur} />
        </div>
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
        <MainText
          // @ts-ignore
          handleChange={ handleChange } handleBlur={ handleBlur } />
        <div className={ css(loginStyles.inputSub) }>
          <Button type="submit" nameBtn='Зберегти' isSubmitting={ isSubmitting } handleClick={ null } />
        </div>
      </form>
    </div>
  </section>
};