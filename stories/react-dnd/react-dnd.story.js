import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from './basic'

storiesOf("React-dnd", module)
  .add("basic", () => <BasicSample />)