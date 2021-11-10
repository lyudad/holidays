/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
import { Cascader } from 'antd';
import React, { FC } from 'react';
import { CascaderValueType, CascaderOptionType } from 'antd/lib/cascader';
import 'antd/dist/antd.css';
import { DateCasc } from './styles';
import { options } from './constants';

function onChange(value: CascaderValueType, selectedOptions?: CascaderOptionType[] | undefined) {
  console.log(value);
}

const DateCascader:FC = () => (
  <DateCasc>
    <Cascader options={options} onChange={onChange} />
  </DateCasc>
);
  
export default DateCascader;
