import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik } from 'formik';

const Create = (props) => {
  const Form = props.form;
  return (
    <div>
      <Formik
       initialValues={props.initialValues}
       onSubmit={(values, action) => {
         props.create({
           data: {
             ...props.dataProccesor(values),
           },
         })
       }}
       render={({
                  values,
                  errors,
                  touched,
                  handleChange,
                  setValues,
                  setFieldValue,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,

                }) => (
         <Form
           {...props}
           isLoading={props.isLoading}
           values={values}
           create={props.create}
           setFieldValue={setFieldValue}
           errors={errors}
           handleChange={handleChange}
           setValues={setValues}
           handleSubmit={handleSubmit}
         />
       )}
      />
    </div>
  )
};

Create.defaultProps = {
  dataProccesor: data => data,
}
export default Create;
