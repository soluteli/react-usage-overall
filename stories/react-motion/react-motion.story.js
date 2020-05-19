import React from 'react';
import { storiesOf } from '@storybook/react';

import BaisicMotionSample from './basic'
import StaggeredMotion from './StaggeredMotion'
import TransitionMotion from './TransitionMotion'


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


