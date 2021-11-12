import React, { FC } from 'react';
import DashTable from 'components/AdminDashboard/index';
import { DashForm } from './styles';

const AdminDash: FC = () => (
  <DashForm>
    <DashTable />
  </DashForm>
);

export default AdminDash;