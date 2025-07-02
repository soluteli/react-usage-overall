import React from 'react';
import BasicSample from './basic';
import PluginSample from './plugins';
import HtmlSample from './html';
import HighlightSample from './code-highlight';

export default {
  title: 'slate',
};

export const Basic = () => <BasicSample />;
export const Plugin = () => <PluginSample />;
export const Html = () => <HtmlSample />;
export const Highlight = () => <HighlightSample />;
