import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from './basic'

storiesOf("React-datasheet", module)
  .add("basic", () => <BasicSample />)