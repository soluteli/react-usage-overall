import React from 'react';
import { storiesOf } from '@storybook/react';

import MyFormItemSample from './form/my-form-item'

storiesOf('Antd-form', module)
  .add('自定义表单控件', () => (
    <MyFormItemSample />
  ))

