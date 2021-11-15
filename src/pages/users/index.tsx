/* eslint-disable linebreak-style */
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector} from 'utils/hooks';
import ActionButton from 'components/ActionButton';
import { ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import { mockUserPageTableColumns, mockUserPageTableData } from 'utils/mocks/mock-user-page-table-data';
import {
  StyledMain, ButtonWrap, ContentWrap, StyledTable,
} from './styles';

const UsersPage: FC = () => {
  const {users} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <StyledMain>
      <ButtonWrap>
        <ActionButton
          block
          type="default"
          shape="round"
          size="large"
          onClick={() => dispatch(users())}
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
  );
};

export default UsersPage;
