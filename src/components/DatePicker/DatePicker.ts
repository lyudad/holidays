import { DatePicker, Space } from 'antd';
import s from "./DatePicker.module.css";
const { RangePicker } = DatePicker;

const Calendar =() => {
    return (
  <Space className="Space_Date" direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" />
  </Space>,
  mountNode,
);

export default Calendar;