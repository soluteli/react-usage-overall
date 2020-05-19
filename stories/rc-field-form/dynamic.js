import React from 'react';
import Form, { Field } from 'rc-field-form';

import { Switch, Input } from 'antd';


// rc-field-form 性能优化 https://www.npmjs.com/package/rc-field-form
const CustomizeInput = (props) => {
  console.log('props', props)
  const canShow = props.form.getFieldValue('name_show')
  return canShow ? (
    <div style={{ padding: 10 }}>
      <Input {...props} />
    </div>
  ) : null
}

function DynamicForm () {

  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        initialValues={{
          name_show: false,
          name: '',
        }}
        onFinish={values => {
          console.log('change:', values);
        }}
      >

        <Field name="name_show" value={true}>
          <Switch />
        </Field>


        <Field name="name" dependencies={['name_show']}>
          <CustomizeInput form={form} />
        </Field>

      </Form>
      <button onClick={() => form.submit()}>submit</button>
    </>

  );
}

export default DynamicForm;