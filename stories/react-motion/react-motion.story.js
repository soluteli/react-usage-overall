import React from 'react';
import BaisicMotionSample from './basic';
import StaggeredMotion from './StaggeredMotion';
import TransitionMotion from './TransitionMotion';

export default {
  title: 'react-motion',
};

export const Basic = () => <BaisicMotionSample />;
export const StaggeredMotionStory = () => <StaggeredMotion />;
export const TransitionMotionStory = () => <TransitionMotion />;


