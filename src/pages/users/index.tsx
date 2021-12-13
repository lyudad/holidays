import React, { FC } from 'react';
import ActionButton from 'components/ActionButton';
import { ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import UserMenu from 'components/userMenu';
import { mockUserPageTableColumns, mockUserPageTableData } from 'utils/mocks/mock-user-page-table-data';
import {
  StyledPage, StyledMain, ButtonWrap, ContentWrap, StyledTable,
} from './styles';

const UsersPage: FC = () => (
  <StyledPage>
    <UserMenu />

    <StyledMain>
      <ButtonWrap>
        <ActionButton
          block
          type="default"
          shape="round"
          size="large"
        // eslint-disable-next-line no-console
          onClick={() => console.log('add another user cb')}
        >
          {ADD_USER_BUTTON_TEXT}
        </ActionButton>
      </ButtonWrap>
      <ContentWrap>
        <StyledTable
          bordered
          rowKey={(record: any) => record.key}
          dataSource={mockUserPageTableData}
          columns={mockUserPageTableColumns}
          pagination={{
            hideOnSinglePage: true,
          }}
        />
      </ContentWrap>
    </StyledMain>
  </StyledPage>
);

export default UsersPage;
