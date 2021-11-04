import React from 'react';
import { Table } from 'antd';
// import { dashTable } from './styles';
// import { dataSource } from './data';

type Props = {};

const DashTable: React.FunctionComponent<Props> = () => {
  const dataSource = [
    {
      key: '1',
      user: 'John',
      dates: '05/11/21',
      types: 'vacation',
      actions: 'approve',
    },
    {
      key: '2',
      user: 'Bill',
      dates: '05/11/21',
      types: 'vacation',
      actions: 'approve',
    },
    {
      key: '3',
      user: 'Jack',
      dates: '05/11/21',
      types: 'vacation',
      actions: 'approve',
    }];

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Dates',
      dataIndex: 'dates',
      key: 'dates',
    },
    {
      title: 'type',
      dataIndex: 'vacation',
      key: 'vacation',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  return (
    <div className="dashTable">
      <Table columns={columns} dataSource={dataSource} />
    </div>

  );
};

export default DashTable;
