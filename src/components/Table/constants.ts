const CONST = {
  month: 'Month',
  datas: 'Datas',
  status: 'Status',
  type: 'Type',
};

export const columnsIncome = [
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

export const dataIncome = [{
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

export default {
  columnsIncome,
  dataIncome,
};
