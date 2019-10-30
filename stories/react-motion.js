import React from 'react';
import { storiesOf } from '@storybook/react';

import BaisicMotionSample from '../samples/react-motion/basic'
import StaggeredMotion from '../samples/react-motion/StaggeredMotion'
import TransitionMotion from '../samples/react-motion/TransitionMotion'


storiesOf('react-motion', module)
  .add('basic', () => (
    <BaisicMotionSample />
  ))
  .add('StaggeredMotion', () => (
    <StaggeredMotion />
  ))
  .add('TransitionMotion', () => (
    <TransitionMotion />
  ))


