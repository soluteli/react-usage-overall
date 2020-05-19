import React from 'react';
import { storiesOf } from '@storybook/react';

import RouterSample from './basic'
import RouterSampleCustomLink from './custom-link'
import RouterSampleCodeSplit from './code-split'

storiesOf('React-Router-V4', module)
  .add('basic', () => (
    <RouterSample />
  ))
  .add('customlink', () => (
    <RouterSampleCustomLink />
  ))
  .add('code-split', () => (
    <RouterSampleCodeSplit />
  ))

