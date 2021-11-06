import React from 'react';
import { Table } from 'antd';

type Props = {};

const TableComponent:React.FunctionComponent<Props> = () => {
  // const { data, columns } = TableTest;
  const columnsIncome = [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
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
    },
  ];
  const data = [{
    key: '1',
    month: 'June 2020',
    dates: '10-20',
    status: 'aprroved',
    type: 'vacation',
  },
  {
    key: '2',
    month: 'April 2020',
    dates: '10-20',
    status: 'aprroved',
    type: 'vacation',
  },
  {
    key: '3',
    month: 'January 2020',
    dates: '10-20',
    status: 'aprroved',
    type: 'vacation',
  }];
  return (
    <>
      <Table columns={columnsIncome} dataSource={data} />
    </>
  );
};

export default TableComponent;
