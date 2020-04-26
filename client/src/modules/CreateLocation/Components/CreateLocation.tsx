import React from "react";
import { css } from "aphrodite/no-important";
import { FormikProps } from "formik";

import {Button, Input, SectionTitle } from "../../../Components";
import styles from "./CreateLocationStyles";
import baseStyle from "../../../styles";
import stylesInput from "../../../Components/Input/InputStyles";
import loginStyles from "../../../styles/loginStyles";
import {optionItem} from "../../../Components/Select/select.config";

export const Location: React.FC<FormikProps<any>> = props => {
  const {
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    values
  } = props;
  return <section className={ css(baseStyle.wrapper) }>
    <SectionTitle title='Редагування' />
    <div className={css(baseStyle.boxShadow, styles.wrapper)}>
      <form onSubmit={ handleSubmit }>
        // @ts-ignore
        <Input id='title' title='Назва локації:' type='text' value={ values.title } handleChange={ handleChange } handleBlur={ handleBlur } />
        <section className={css( stylesInput.wrapper )}>
          <p className={css( stylesInput.paragraph )}>Тип:</p>
          <select className={css(stylesInput.input)} name="isType" id="isType" onChange={ handleChange } onBlur={ handleBlur }>
            { optionItem.map((item, index) => {
              return <option key={ index } className={ css(stylesInput.option) } value={ item.value }>{ item.title }</option>
            })}
          </select>
        </section>
        // @ts-ignore
        <Input id='region' title='Область' type='text' value={ values.region } handleChange={ handleChange } handleBlur={ handleBlur } />
        // @ts-ignore
        <Input id='district' title='Район' type='text' value={ values.district } handleChange={ handleChange } handleBlur={ handleBlur } />
        // @ts-ignore
        <Input id='city' title='Населений пункт:' type='text' value={ values.city } handleChange={ handleChange } handleBlur={ handleBlur } />
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
        // @ts-ignore
        <Input id='small_text' title='Короткий опис:' type='text' value={ values.small_text } handleChange={ handleChange } handleBlur={ handleBlur } />
        <div className={ css(loginStyles.inputSub) }>
          <Button type="submit" nameBtn='Зберегти' isSubmitting={ isSubmitting } />
        </div>
      </form>
    </div>
  </section>
}