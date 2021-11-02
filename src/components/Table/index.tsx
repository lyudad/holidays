import React from 'react';

import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Month',
    dataIndex: 'month',
    key: 'month',
    render: (text) => <a>{text}</a>,
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
    render: (type) => (
      <>
        {type.map((type) => (
          <Tag key={tag}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
];

const data = [
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
];

function Table({ colums, data }) {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default Table;
