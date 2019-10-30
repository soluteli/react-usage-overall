import React from 'react';
import { storiesOf } from '@storybook/react';

import BaisicSample from '../samples/react-measure/basic'


storiesOf('react-measure', module)
  .add('basic', () => (
    <BaisicSample />
  ))


