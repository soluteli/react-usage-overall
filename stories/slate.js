import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicSample from '../samples/slate/basic'
import PluginSample from '../samples/slate/plugins'
import HtmlSample from '../samples/slate/html'
import HighlightSample from '../samples/slate/code-highlight'

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
