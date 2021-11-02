import React, { FC } from 'react';
import ActionButton from 'components/ActionButton';
import { ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import { mockUserPageTableColumns, mockUserPageTableData } from 'utils/mocks/mock-user-page-table-data';
import {
  StyledMain, ButtonWrap, ContentWrap, StyledTable,
} from './styles';

const UsersPage: FC = () => (
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
        dataSource={mockUserPageTableData}
        columns={mockUserPageTableColumns}
      />
    </ContentWrap>
  </StyledMain>
);

export default UsersPage;
