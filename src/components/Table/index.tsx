import React from 'react';
import { Table } from 'antd';
import CONST from 'components/Table/constants';

type Props = {};

const TableComponent:React.FunctionComponent<Props> = () => {
  const columnsIncome = [
    {
      title: CONST.month,
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: CONST.datas,
      dataIndex: 'dates',
      key: 'dates',
    },
    {
      title: CONST.status,
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: CONST.type,
      key: 'type',
      dataIndex: 'type',
    },
  ];
  const dataIncome = [{
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
      <Table columns={columnsIncome} dataSource={dataIncome} />
    </>
  );
};

export default TableComponent;
