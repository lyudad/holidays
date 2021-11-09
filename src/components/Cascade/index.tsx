/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
import { Cascader } from 'antd';
import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { DateCasc } from './styles';

const Vacation = [
  {
    value: 'vacation',
    label: 'vacation',
  }];
const Sick_leave = [
  {
    value: 'sick_leave',
    label: 'Sick_leave',
  },
];
const Options = { Vacation, Sick_leave };

function onChange(value: any) {
  console.log(value);
}

const DateCascader:FC = () => (
  <DateCasc>
    <Cascader options={Options} onChange={onChange} />
  </DateCasc>
);
  
export default DateCascader;
