import React, { FC, useState } from 'react';
import ActionButton from 'components/ActionButton';
import { ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import UserMenu from 'components/userMenu';
import { mockUserPageTableColumns, mockUserPageTableData } from 'utils/mocks/mock-user-page-table-data';
import { Modal } from 'antd';
import LANG from 'language/en';
import AddUserForm from 'components/AddUserForm';
import {
  StyledPage, StyledMain, ButtonWrap, ContentWrap, StyledTable,
} from './styles';

const UsersPage: FC = () => {
  const [visible, setVisible] = useState(false);
  // const handelClick = (e) => {
  //   setShowModal(true);
  // };

  return (
    <StyledPage>
      <UserMenu />
      <StyledMain>
        <div id="modal-root" />
        <ButtonWrap>
          <ActionButton
            block
            type="default"
            shape="round"
            size="large"
            onClick={() => setVisible(true)}
          >
            {ADD_USER_BUTTON_TEXT}
          </ActionButton>
          <Modal
            title={LANG.addNewUser}
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={500}
          >
            <AddUserForm />
          </Modal>
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
};

export default UsersPage;
