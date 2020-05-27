import React from 'react';
import { storiesOf } from '@storybook/react';

import MyFormItemSample from './form/my-form-item'
import SimpleSelect from './select/simple-select'
import VSelect from './select/antd-virtual-list'

storiesOf('Antd-form', module)
  .add('自定义表单控件', () => (
    <MyFormItemSample />
  ))
  .add('单选下拉', () => (
    <SimpleSelect />
  ))
  .add('单选下拉+虚拟滚动', () => (
    <VSelect />
  ))

