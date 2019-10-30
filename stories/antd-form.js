import React from 'react';
import { storiesOf } from '@storybook/react';

import MyFormItemSample from '../samples/antd/form/my-form-item'

storiesOf('Antd-form', module)
  .add('自定义表单控件', () => (
    <MyFormItemSample />
  ))

