/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { Table } from 'antd';
import FormTable from './styles';

type Props = {};

const DashTable: React.FunctionComponent<Props> = () => {
  const data = [
  {
    key: '1',
    user: 'User1',
    dates: '05/11/21',
    types: 'vacation',
    actions: 'approve',
  },
  {
    key: '2',
    user: 'User2',
    dates: '05/11/21',
    types: 'vacation',
    actions: 'approve',
  },
  {
    key: '3',
    user: 'User3',
    dates: '05/11/21',
    types: 'vacation',
    actions: 'approve',
  }];

const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    filters: [
      {
        text: 'User1',
        value: 'User1',
      },
      {
        text: 'User2',
        value: 'User2',
      },
      {
        text: 'User3',
        value: 'User3',
      },
    ],
  },
  {
    title: 'Dates',
    dataIndex: 'dates',
    key: 'dates',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
     filters: [
      {
        text: 'vacation',
        value: 'vacation',
      },
      {
        text: 'sick_leave',
        value: 'sick_leave',
      },
    ],
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
     filters: [
      {
        text: 'approve',
        value: 'approve',
      },
      {
        text: 'decline',
        value: 'decline',
      },
      {
        text: 'edit',
        value: 'edit',
      },
    ],
  },
];

  function onChange(filters: any) {
   // eslint-disable-next-line no-console
  console.log('params', filters);
}
  return (
    <FormTable>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </FormTable>

  );
};

export default DashTable;
