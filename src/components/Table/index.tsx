import React from 'react';
import { Table } from 'antd';
import { columnsIncome, dataIncome } from 'components/Table/constants';

const TableComponent = () => (
  <>
    <Table columns={columnsIncome} dataSource={dataIncome} />
  </>
);

export default TableComponent;
