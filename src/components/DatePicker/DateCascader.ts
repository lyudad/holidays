import { Cascader } from 'antd';

const options = [
  {
    value: 'vacation',
    label: 'vacation',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'sick_leave',
    label: 'sick_leave',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

const DateCascader = () => {
    return (
  <Cascader className="DateCascader" options={options} onChange={onChange} placeholder="Please select" />,
  mountNode,
);

export default DateCascader;