import React from 'react';
import { Tag } from 'antd';

const TableTest = {
  columns: [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      render: (text: string) => <a href="./">{text}</a>,
    },
    {
      title: 'Dates',
      dataIndex: 'dates',
      key: 'dates',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      render: (type: string[]) => (
        <>
          {type.map((elem) => (
            <Tag key={elem}>
              {elem.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
  ],
  data: [
    {
      key: '1',
      name: 'June 2020',
      dates: '10-20',
      status: 'aprroved',
      type: 'vacation',
    },
    {
      key: '2',
      name: 'April 2020',
      dates: '10-20',
      status: 'aprroved',
      type: 'vacation',
    },
    {
      key: '3',
      name: 'January 2020',
      dates: '10-20',
      status: 'aprroved',
      type: 'vacation',
    },
  ],
};

export default TableTest;
