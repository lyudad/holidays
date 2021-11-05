import React from 'react';

import { Table } from 'antd';

interface IColums{
  title: string,
  dataIndex: string,
  key: string,
  render: ()=>void,
}
// const columns: IColums[] = [
//   {
//     title: 'Month',
//     dataIndex: 'month',
//     key: 'month',
//     render: (text:string) => <a href="#">{text}</a>,
//   },
//   {
//     title: 'Dates',
//     dataIndex: 'dates',
//     key: 'dates',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//   },
//   {
//     title: 'Type',
//     key: 'type',
//     dataIndex: 'type',
//     render: (type: string[]) => (
//       <>
//         {type.map((elem) => (
//           <Tag key={elem}>
//             {elem.toUpperCase()}
//           </Tag>
//         ))}
//       </>
//     ),
//   },
// ];
interface IData{
  key: string,
  name: string,
  dates: string,
  status:string,
  type: string,
}

// const data: IData[] = [
//   {
//     key: '1',
//     name: 'June 2020',
//     dates: '10-20',
//     status: 'aprroved',
//     type: 'vacation',
//   },
//   {
//     key: '2',
//     name: 'April 2020',
//     dates: '10-20',
//     status: 'aprroved',
//     type: 'vacation',
//   },
//   {
//     key: '3',
//     name: 'January 2020',
//     dates: '10-20',
//     status: 'aprroved',
//     type: 'vacation',
//   },
// ];

function TableComponent(colums: IColums[], data: IData[]) {
  return (
    <>
      {/* <Table columns={colums} dataSource={data} /> */}
      <h1> i am a table</h1>
    </>
  );
}

export default TableComponent;
