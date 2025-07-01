import React from 'react';
import RouterSample from './basic';
import RouterSampleCustomLink from './custom-link';
import RouterSampleCodeSplit from './code-split';

export default {
  title: 'React-Router-V4',
};

export const Basic = () => <RouterSample />;
export const CustomLink = () => <RouterSampleCustomLink />;
export const CodeSplit = () => <RouterSampleCodeSplit />;

