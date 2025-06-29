import React from 'react';
import { storiesOf } from '@storybook/react';
import {AxiosInterceptorDemo, AxiosInterceptorRequestErrorDemo} from './interceptors'

storiesOf('Axios', module)
  .add('拦截器执行顺序', () => (
    <AxiosInterceptorDemo />
  ))
  .add('拦截器 Request Error 执行顺序', () => (
    <AxiosInterceptorRequestErrorDemo />
  ))

