import React from 'react';
import BasicDemo from './basic';
import RenderPropsDemo from './render-props';
import DynamicDemo from './dynamic';

export default {
  title: 'rc-field-form',
};

export const Basic = () => <BasicDemo />;
export const RenderProps = () => <RenderPropsDemo />;
export const Dynamic = () => <DynamicDemo />;
