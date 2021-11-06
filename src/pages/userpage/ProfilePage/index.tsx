import React from 'react';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import DaysCounter from 'components/DaysCounter';
import LANG from 'lanuage/en';
import {
  StyledPage,
  StyledContent,
  StyledInputWraper,
  StyledInfoSection,
  StyledButton,
  TableWraper,
} from 'pages/userpage/ProfilePage/styles';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';

const ProfilePage = () => (
  <>
    <StyledPage>
      <UserMenu />
      <StyledContent>
        <StyledInfoSection>
          <StyledInputWraper>
            <InputComponent text={LANG['first-name']} />
            <InputComponent text={LANG['last-name']} />
          </StyledInputWraper>
          <DaysCounter />
          <StyledButton>
            <ActionButton
              onClick={(): void => {
                // eslint-disable-next-line no-console
                console.log('cliked');
              }}
            >
              Add
            </ActionButton>
            {/* <ActionButton
              onClick={(): void => {
                // eslint-disable-next-line no-console
                console.log('cliked');
              }}
            >
              send password
            </ActionButton> */}
          </StyledButton>
        </StyledInfoSection>
        <TableWraper>
          <TableComponent />
        </TableWraper>
      </StyledContent>
    </StyledPage>
  </>
);

export default ProfilePage;
