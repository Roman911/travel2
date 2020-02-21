import React from 'react';
import { css } from 'aphrodite/no-important';

import baseStyle from "../../../styles";
import styles from "./PostCreateStyles";
import stylesInput from "../../../Components/Input/InputStyles";
import {SectionTitle} from "../../../Components/SectionTitle/SectionTitle";

import { items } from './confige';
import { EntranceTicketItems } from './EntranceTicketConfige';
import {Input} from "../../../Components/Input/Input";
import {EntranceTicket} from "./EntranceTicket";

export const PostCreateForm = props => {
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue
  } = props;

  const form = items.map((item, index) => {
    return <Input
      key={index}
      id={item.id}
      title={item.title}
      type={item.type}
      value={values[item.id]}
      touched={touched[item.id]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  });

  const EntranceTicketForm = EntranceTicketItems.map((item, index) => {
    return <EntranceTicket
      key={ index }
      id={item.id}
      title={item.title}
      type={item.type}
      value={values[item.id]}
      touched={touched[item.id]}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  });

  return <section className={ css(baseStyle.wrapper) }>
    <SectionTitle title='Редагування' />
    <div className={css(baseStyle.boxShadow, styles.wrapper)}>
      <form onSubmit={handleSubmit}>
        <div className={ css(baseStyle.flexVFS) }>
          <div className={css(styles.wrapperBlock)}>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Тип матеріалу:</p>
              <input
                type='radio'
                name='type_material'
                value='post'
                checked={values.type_material === "post"}
                onChange={() => setFieldValue("type_material", "post")}
              />Статя
              <input
                type='radio'
                name='type_material'
                value='new'
                checked={values.type_material === "new"}
                onChange={() => setFieldValue("type_material", "new")}
              />Новина
            </div>
            <div className={css( stylesInput.wrapper )}>
              <p className={css( stylesInput.paragraph )}>Обкладинка:</p>
              <input
                id='image_loader'
                type='file'
              />
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
          <textarea
            className={css(stylesInput.input)}
            id='small_text'
            onChange={handleChange}
            onBlur={handleBlur}
            rows='2'
          />
        </div>
        <div className={css(baseStyle.flex)}>
          <div className={css( stylesInput.wrapper )}>
            <p className={css( stylesInput.paragraph )}>Широта:</p>
            <input
              className={css(stylesInput.input)}
              id='coordinateY'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={css( stylesInput.wrapper )}>
            <p className={css( stylesInput.paragraph )}>Довгота:</p>
            <input
              className={css(stylesInput.input)}
              id='coordinateX'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className={css( stylesInput.wrapper )}>
          <p className={css( stylesInput.paragraph )}>Текст:</p>
          <textarea
            className={css(stylesInput.input)}
            id='text'
            onChange={handleChange}
            onBlur={handleBlur}
            rows='8'
          />
        </div>
        <input
          type="submit"
          value="Зберегти"
          disabled={ isSubmitting }
        />
      </form>
    </div>
  </section>
};