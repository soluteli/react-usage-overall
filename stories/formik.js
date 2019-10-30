import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from '../samples/formik/basic'
import BasicSample1 from '../samples/formik/basic1'

storiesOf("Formik", module)
  .add("basic", () => <BasicSample />)
  .add("basic1", () => <BasicSample1 />)
