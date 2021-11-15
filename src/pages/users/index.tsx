import React, { FC } from 'react';
import { IUser } from 'utils/types';
import ActionButton from 'components/ActionButton';
import { ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import { mockUserPageTableColumns, mockUserPageTableData } from 'utils/mocks/mock-user-page-table-data';
import {
  StyledMain, ButtonWrap, ContentWrap, StyledTable,
} from './styles';

const user: IUser = {
  _id: 'qwe',
  name: 'string',
  role: 'superAdmin',
};

const UsersPage: FC = () => {
  const { role } = user;
  return (
    <StyledMain>
      <ButtonWrap>
        <ActionButton
          block
          type="default"
          shape="round"
          size="large"
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
  );
};

export default UsersPage;
