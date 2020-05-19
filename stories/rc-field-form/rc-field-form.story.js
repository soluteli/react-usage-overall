import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicDemo from './basic'
import RenderPropsDemo from './render-props'
import DynamicDemo from './dynamic'

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

