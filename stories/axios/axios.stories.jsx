import React from 'react';
import { AxiosInterceptorDemo, AxiosInterceptorRequestErrorDemo } from './interceptors';

export default {
  title: 'Axios',
};

export const InterceptorOrder = () => <AxiosInterceptorDemo />;
export const InterceptorRequestErrorOrder = () => <AxiosInterceptorRequestErrorDemo />;
