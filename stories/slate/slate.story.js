import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from './basic'
import PluginSample from './plugins'
import HtmlSample from './html'
import HighlightSample from './code-highlight'

storiesOf('slate', module)
  .add('basic', () => (
    <BasicSample />
  ))
  .add('plugin', () => (
    <PluginSample />
  ))
  .add('html', () => (
    <HtmlSample />
  ))
  .add('highlight', () => (
    <HighlightSample />
  ))
