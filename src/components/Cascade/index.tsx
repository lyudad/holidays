/* eslint-disable no-console */
import { Cascader } from 'antd';
import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { DateCasc } from './styles';

// export const DateCascader: FC = () => {
//   const [state, setState] = useState({ value: '' });

//   const handleChange = (event: ChangeEvent<{ value: string }>) => {
//     setState({ value: event?.currentTarget?.value });
//   };
//   return (
//     <DateCasc>
//       <Cascader onChange={handleChange} />
//       <p>{ state?.value}</p>
//     </DateCasc>
//   );
// };
const options = [
  {
    value: 'vacation',
    label: 'vacation',
  },
  {
    value: 'sick_leave',
    label: 'Sick_leave',
  },
];

function onChange(value: any) {
  console.log(value);
}

const DateCascader: FC = () => (
  <DateCasc>
    <Cascader options={options} onChange={onChange} />
  </DateCasc>
);

export default DateCascader;
