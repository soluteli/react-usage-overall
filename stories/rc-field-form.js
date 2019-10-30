import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicDemo from '../samples/rc-field-form/basic'
import RenderPropsDemo from '../samples/rc-field-form/render-props'
import DynamicDemo from '../samples/rc-field-form/dynamic'

storiesOf('rc-field-form', module)
  .add('basic', () => (
    <BasicDemo />
  ))
  .add('render props', () => (
    <RenderPropsDemo />
  ))
  .add('dynamic', () => (
    <DynamicDemo />
  ))

