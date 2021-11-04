// import { FC } from 'react';
import { Table } from 'antd';
import { dashTable } from './styles';
import { dataSource } from './data';

const data = [
  {
    key: '2',
    user: 'John',
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

const Dash = () => (
  <div className="dashTable">
    <Table columns={columns} dataSource={data} />
  </div>

);
export default Dash;
