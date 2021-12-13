/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import React, { FC } from 'react';
import DashTable from 'components/AdminDashboard/index';
import { DashForm, StyledPage, StyledContent } from 'pages/dash/styles';
import UserMenu from 'components/userMenu';

const AdminDash: FC = () => (
  <>
    <StyledPage>
      <UserMenu />
      <StyledContent>
        <DashForm>
          <DashTable />
        </DashForm>
      </StyledContent>
    </StyledPage>
  </>
);

export default AdminDash;