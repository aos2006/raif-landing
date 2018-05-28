
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import s from './Order.css'
import Container from 'components/Container'
import Section from 'components/Section'
import { Formik } from 'formik'
import Title from 'components/Title'
import Select from 'react-select'
import Arrow from './arrow.svg'
import { connect } from 'react-redux'
import * as actions from './actions'
import Validator from 'modules/Validator'
import Loader from './loader.svg'
import Api from 'modules/Api';
import { toast } from 'react-toastify';
import PhoneMask from "inputmask/dist/inputmask/inputmask.phone.extensions";
import EmailMask from 'inputmask'
import 'inputmask/dist/inputmask/phone-codes/phone-ru.js'
import { Upload, Button, Icon, Checkbox } from 'antd';
import 'antd/lib/upload/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/checkbox/style/index.css';


const schema = Validator.object().shape({
  fio: Validator.string().required('Обязательное поле'),
  email: Validator.string().email('Некорректный email').required('Обязательное поле'),
  phone: Validator.string().phone('Некорректный телефон').required('Обязательное поле'),
  city: Validator.string().required('Обязательное поле'),
  projectName: Validator.string().required('Обязательное поле'),
  projectState: Validator.string().required('Обязательное поле'),
  projectVector: Validator.string().required('Обязательное поле'),
  presentation: Validator.string().url('Некорректный url').required('Обязательное поле'),
  additionalLink: Validator.string().url('Некорректный url').required('Обязательное поле'),
  files: Validator.array().required('Файл обязателен'),
  rulesAccept: Validator.boolean().oneOf([true], 'Необходимо согласиться'),
})

const Tooltiped = Component => class Tooptip extends React.PureComponent {
  render () {
    return (
      <div className={s.tooltipContainer}>
        <div className={cx([
          s.tooltip,
          {
            [s.showTooltip]: this.props.show,
          }
        ])}>
          {this.props.error}
        </div>
        <Component
          {...this.props}
        />
      </div>
    )
  }
}

const Input = props => <input {...props} />
const Area = props => <textarea {...props} />

const TooltipedInput = Tooltiped(Input)
const TooltipedSelect = Tooltiped(Select)
const TooltipedArea = Tooltiped(Area)
const TooltipedButton = Tooltiped(Button)
const TooltipedCheckbox = Tooltiped(Checkbox);

class Order extends React.PureComponent {
  componentDidMount() {
  	  const mskPhone = new PhoneMask('phoneru');
    const mskEmail = new EmailMask('email');
  	 mskPhone.mask(document.getElementById('phone'));
  	 mskEmail.mask(document.getElementById('email'))
  }
  render () {
    return (
      <div className={s.root} id='order'>
        <Section classes={{ root: s.section }}>
          <Container noHidden>
            <Formik
              validationSchema={schema}
              onSubmit={(values,
                         { setSubmitting, setErrors, resetForm }) => {
                Api.actions.api({ url: 'http://api.deworkacy.ru/api/dwy/form/business-form/raif',
                  params: {
                    method: 'post',
                    body: {
                      fio: values.fio,
                      city: values.city,
                      email: values.email,
                      projectName: values.projectName,
                      phone: values.phone,
                      projectStage: values.projectState,
                      projectDirections: values.projectVector,
                      shortDescription: values.descr,
                      presentationFile: values.presentation,
                      additionalAttachments: values.additionalLink,
                      files: values.files,
                    }
                  } })
                 .then(data => {
                   toast.success('Заявка успешно отправлена', {
                     position: toast.POSITION_TOP_RIGHT,
                   });
                   setSubmitting(false);
                   resetForm();
                 })
                 .catch(err => {
                   setSubmitting(false);
                   toast.error('Произошла ошибка, свяжитесь с нами', {
                     position: toast.POSITION_TOP_RIGHT,
                   });
                 })
              }}
              initialValues={{
                fio: '',
                email: '',
                phone: '',
                city: '',
                projectName: '',
                projectState: '',
                projectVector: '',
                descr: '',
                presentation: '',
                additionalLink: '',
                files: [],
                rulesAccept: false,
              }}
              render={({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         setFieldValue,
                         handleSubmit,
                         isSubmitting,
                       }) => {
                console.log(errors)
                return (
                  <div className={s.row}>
                    <form onSubmit={handleSubmit} className={s.form} autoComplete={false}>
                      <Title medium italic classes={{ root: s.title }}>
                        Анкета участника
                      </Title>
                      <section className={s.formSection}>
                        <h4 className={s.subtitle}>
                          Данные участника
                        </h4>
                        <TooltipedInput
                          show={errors.fio}
                          error={errors.fio}
                          placeholder='ФИО*'
                          name='fio'
                          onChange={handleChange}
                          className={s.input}
                          value={values.fio}
                        />
                        <TooltipedInput
                          id="email"
                          error={errors.email}
                          show={errors.email}
                          className={s.input}
                          placeholder='Электронный Адрес*'
                          name='email'
                          onChange={handleChange}
                          value={values.email}
                        />
                        <TooltipedInput
                          id="phone"
                          show={errors.phone}
                          error={errors.phone}
                          name='phone'
                          className={s.input}
                          placeholder='Номер телефона*'
                          onChange={handleChange}
                          value={values.phone}
                        />
                        <TooltipedInput
                          error={errors.city}
                          show={errors.city}
                          className={s.input}
                          placeholder='Город*'
                          name='city'
                          onChange={handleChange}
                          value={values.city}
                        />
                      </section>
                      <section className={s.formSection}>
                        <h4 className={s.subtitle}>
                          Данные о проекте
                        </h4>
                        <TooltipedInput
                          show={errors.projectName}
                          error={errors.projectName}
                          placeholder='Название проекта*'
                          name='projectName'
                          onChange={handleChange}
                          className={s.input}
                          value={values.projectName}
                        />
                        <TooltipedSelect
                          show={errors.projectState}
                          error={errors.projectState}
                          value={values.projectState}
                          clearable={false}
                          className='rselect'
                          placeholder='Стадия проекта*'
                          arrowRenderer={() => <Arrow />}
                          name='projectState'
                          onChange={(val) => setFieldValue('projectState', val.value)}
                          options={[
                            { value: 'Идея', label: 'Идея' },
                            { value: 'Готов Прототип', label: 'Готов Прототип' },
                            { value: 'Пилотное производство', label: 'Пилотное производство' },
                            {
                              value: 'Серийное производство/активные продажи',
                              label: 'Серийное производство/активные продажи'
                            },
                          ]}
                        />
                        <TooltipedSelect
                          error={errors.projectVector}
                          show={errors.projectVector}
                          value={values.projectVector}
                          clearable={false}
                          className='rselect'
                          placeholder='Направление проекта*'
                          arrowRenderer={() => <Arrow />}
                          name='projectState'
                          onChange={(val) => setFieldValue('projectVector', val.value)}
                          options={[
                            { value: 'Advanced Analytics', label: 'Advanced Analytics' },
                            { value: 'Regtech', label: 'Regtech' },
                            { value: 'Corporate Business Solutions', label: 'Corporate Business Solutions' },
                            { value: 'Investment Trading', label: 'Investment Trading' },
                            { value: 'Customer Experience and Services', label: 'Customer Experience and Services' },
                            { value: 'Non-banking Services', label: 'Non-banking Services' },
                          ]}
                        />
                        <TooltipedArea
                          show={false}
                          onChange={handleChange}
                          name='descr'
                          placeholder='Краткое описание проекта (не больше 500 символов)'
                          maxLength={500}
                          className={cx([
                            s.input,
                            s.area,
                          ])}
                        />
                        <TooltipedInput
                          error={errors.presentation}
                          show={errors.presentation}
                          placeholder='Ссылка на презентацию проекта*'
                          name='presentation'
                          onChange={handleChange}
                          className={s.input}
                          value={values.presentation}
                        />
                        <Upload
                          action="http://api.deworkacy.ru/fileStorage/upload/file"
                          onChange={data => {
                            if (data.file.response) {
                              setFieldValue('files', values.files.concat(data.file.response.fileStorageElement.id))
                            }
                          }}
                        >
                          <TooltipedButton
                            error={errors.files}
                            show={errors.files}
                          >
                            <Icon type="upload"/> Загрузить презентацию
                          </TooltipedButton>
                        </Upload>
                        <TooltipedInput
                          show={errors.additionalLink}
                          error={errors.additionalLink}
                          placeholder='Ссылка на дополнительные приложения'
                          name='additionalLink'
                          onChange={handleChange}
                          className={s.input}
                          value={values.additionalLink}
                        />
                        <TooltipedCheckbox
                          value={values.rulesAccept}
                          onChange={ev => {
                            setFieldValue('rulesAccept', !values.rulesAccept)
                          }}
                          show={errors.rulesAccept}
                          error={errors.rulesAccept}
                        >
                          <a href="/инормация для участия.pdf" target="_blank">Согласен с правилами участия</a>
                        </TooltipedCheckbox>
                      </section>
                    </form>
                    <button type='submit' disabled={isSubmitting} className={s.submit} onClick={handleSubmit}>
                      {isSubmitting ? <Loader /> : <span>Зарегистрироваться</span>}
                    </button>
                  </div>

                )
              }}
            />
          </Container>
        </Section>
      </div>
    )
  }
}

export default connect(null, { sendForm: actions.sendForm })(Order)
