import React from 'react';
import { storiesOf } from '@storybook/react';

import CollectionSample from './collections'
import GridSample from './grid'

storiesOf('react-virtualized', module)
  .add('collection', () => (
    <CollectionSample />
  ))
  .add('grid', () => (
    <GridSample />
  ))


