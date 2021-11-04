import { FC } from 'react';
import { Table, Row, Col } from 'antd';
// import { Table} from './styles';

const dataSource = [
  {
    key: '1',
    user: 'Mike',
    dates: '04/11/21',
    types: 'vacation',
    actions: 'approve',
  },
  {
    key: '2',
    name: 'John',
    dates: '05/11/21',
    types: 'vacation',
    actions: 'approve',
  },
];

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

const Dash: FC = () => (
  <Row>
    <Col>
      <Table columns={columns} dataSource={dataSource} />
    </Col>
  </Row>
);

export default Dash;
