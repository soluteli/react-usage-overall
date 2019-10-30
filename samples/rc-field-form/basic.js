import React from 'react'
import Form, { Field } from 'rc-field-form';
 
const Input = (props) => {
  return <input {...props} />;
};

const CustomizeInput = ({ value = '', ...props }) => {
  console.log('props', props.k, props)
  return (
    <div style={{ padding: 10 }}>
      <Input style={{ outline: 'none' }} value={value} {...props} />
    </div>
  );
}

function BasicDemo () {
  return (
    <Form
      onFinish={values => {
        console.log('Finish:', values);
      }}
    >
      <Field name="username">
        <CustomizeInput k='1' placeholder="Username" />
      </Field>
      <Field name="password">
        <CustomizeInput k='2' placeholder="Password" />
      </Field>
      <Field name="mine">
        {(control, meta, context) => {
          console.log('control', control, meta, context)
          return <CustomizeInput {...control} k='3' placeholder="mine" />
        }}
        
      </Field>
    
      <button>Submit</button>
    </Form>
  )
}
 
export default BasicDemo;