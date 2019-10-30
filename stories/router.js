import React from 'react';
import { storiesOf } from '@storybook/react';

import RouterSample from '../samples/router'
import RouterSampleCustomLink from '../samples/router-custom-link'
import RouterSampleCodeSplit from '../samples/router-code-split'

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

