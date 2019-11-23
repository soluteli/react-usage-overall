
import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorPickerSample from '../samples/color-picker'

storiesOf('颜色选择', module)
  .add('rc-color-picker', () => (
    <ColorPickerSample o />
  ))

