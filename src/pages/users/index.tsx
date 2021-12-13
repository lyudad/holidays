import React, { FC, useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { store } from 'store';
import ActionButton from 'components/ActionButton';
import UserMenu from 'components/userMenu';
import { ADD_USER_BUTTON_TEXT, SUPER_ADMIN_ROLE } from 'utils/texts-constants';
import getUserList from '../../services/api/userlistApi';
import { deleteUser, editUser, toggleUser } from './users-btn-logic';
import {
  StyledPage,
  StyledMain,
  ButtonWrap,
  ContentWrap,
  StyledTable,
  StyledActionButton,
  StyledName,
} from './styles';

interface User {
  first_name: string;
  last_name: string;
  is_blocked: boolean;
  user_id: number;
}

const UsersPage: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState<string>('');

  const superAdminTableColumns: ColumnsType<any> = [{
    title: 'Name',
    width: '50%',
    key: 'name',
    sorter: (a: User, b: User): number => a.first_name.length - b.first_name.length,
    sortDirections: ['descend', 'ascend'],

    render: ({ is_blocked, first_name, last_name }) => (
      <>
        <StyledName color={is_blocked}>{first_name}</StyledName>
        <StyledName color={is_blocked}>{last_name}</StyledName>
      </>
    ),
  },
  {
    title: 'Actions',
    width: '25%',
    render: ({ is_blocked }) => (
      <StyledActionButton color={is_blocked} type="text" size="middle" onClick={() => editUser(is_blocked)}>Edit</StyledActionButton>
    ),
  },
  {
    title: '',
    width: '25%',
    dataIndex: 'is_blocked',
    render: (is_blocked) => (
      <>
        {role === SUPER_ADMIN_ROLE ? <StyledActionButton type="text" size="middle" color={is_blocked} onClick={() => deleteUser(is_blocked)}>Delete</StyledActionButton> : <StyledActionButton type="text" size="middle" color={is_blocked} onClick={() => toggleUser(is_blocked)}>{is_blocked ? 'Block' : 'Unblock'}</StyledActionButton>}
      </>
    ),
  },
  ];
  useEffect(() => {
    const userRole = store.getState().user.userData.role;
    setRole(userRole);

    const token = {
      token: store.getState().user.token,
    };

    getUserList(token).then((data) => {
      if (data.length === 0) {
        return;
      }
      setUsers(data);
      // eslint-disable-next-line no-console
    }).catch((error) => console.log(error));
  }, []);

  return (
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
          {users.length > 0
              && (
                <StyledTable
                  bordered
                  rowKey={(record: any): number => record.user_id}
                  dataSource={users}
                  columns={superAdminTableColumns}
                  pagination={{
                    hideOnSinglePage: true,
                  }}
                />
              )}
        </ContentWrap>
      </StyledMain>
    </StyledPage>
  );
};

export default UsersPage;
