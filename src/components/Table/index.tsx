import React from 'react';
import { Table } from 'antd';
import { columnsIncome, dataIncome } from 'components/Table/constants';
// import columnsIncome from 'components/Table/constants';
type Props = {};

const TableComponent:React.FunctionComponent<Props> = () => (
  <>
    <Table columns={columnsIncome} dataSource={dataIncome} />
  </>
);

export default TableComponent;
