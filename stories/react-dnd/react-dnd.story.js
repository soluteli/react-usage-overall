import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from './basic'
import DraggableTree from './draggableTree'

storiesOf("React-dnd", module)
  .add("draggableTree", () => <DraggableTree />)
  // .add("basic", () => <BasicSample />)