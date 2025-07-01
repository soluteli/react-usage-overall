import React from 'react';
import MyFormItemSample from './form/my-form-item';
import SimpleSelect from './select/simple-select';
import VSelect from './select/antd-virtual-list';

export default {
  title: 'Antd-form',
};

export const CustomFormItem = () => <MyFormItemSample />;
export const SimpleSelectStory = () => <SimpleSelect />;
export const VirtualScrollSelect = () => <VSelect />;

