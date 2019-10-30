import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from '../samples/react-dnd/basic'

storiesOf("React-dnd", module)
  .add("basic", () => <BasicSample />)