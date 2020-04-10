import React from "react"
import { FormikProps } from "formik"
import { css } from "aphrodite/no-important"
import stylesInput from "../Input/InputStyles"
import { optionItem } from './select.config'

export const Select = (props: FormikProps<any>) => {
  const {
    handleChange,
    handleBlur
  } = props
  return <section className={css( stylesInput.wrapper )}>
    <p className={css( stylesInput.paragraph )}>Тип:</p>
    <select className={css(stylesInput.input)} name="isType" id="isType" onChange={ handleChange } onBlur={ handleBlur }>
      { optionItem.map((item, index) => {
        return <option key={ index } className={ css(stylesInput.option) } value={ item.value }>{ item.title }</option>
      })}
    </select>
  </section>
}