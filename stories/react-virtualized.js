import React from 'react';
import { storiesOf } from '@storybook/react';

import CollectionSample from '../samples/react-virtualized/collections'
import GridSample from '../samples/react-virtualized/grid'

storiesOf('react-virtualized', module)
  .add('collection', () => (
    <CollectionSample />
  ))
  .add('grid', () => (
    <GridSample />
  ))


