/* eslint-disable linebreak-style */
import React, { FC } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { DateForm } from './styles';

const { RangePicker } = DatePicker;

const DateCalendar: FC = () => (
  <DateForm>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" />
  </DateForm>
);

export default DateCalendar;
