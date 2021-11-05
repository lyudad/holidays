import React, { FC } from 'react';
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';
// import { StyledButton, StyledRangePicker, } from "./styles";

const { RangePicker } = DatePicker;

const DateCalendar: FC = () => (
  <>
    <RangePicker />
    {/* <RangePicker showTime />
      <RangePicker picker="week" />
      <RangePicker picker="month" />
      <RangePicker picker="year" /> */}
    {/* <Cascader options={options} onChange={onChange} placeholder="Please select" /> */}
    <Button type="primary">Submit Button</Button>
  </>
);

export default DateCalendar;
