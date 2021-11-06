import React from 'react';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import LANG from 'lanuage/en';
import {
  StyledPage,
  StyledContent,
  StyledInputWraper,
  StyledInfoSection,
  StyledSpanWraper,
  StyledSpan,
  StyledButton,
  TableWraper,
} from 'pages/userpage/ProfilePage/styles';
import UserMenu from 'components/userMenu';
import TableComponent from 'components/Table';

function ProfilePage() {
  // временные заглушки
  const sickDays = 1;
  const vacationDays = 1;
  //
  return (
    <>
      <StyledPage>
        <UserMenu />
        <StyledContent>
          <StyledInfoSection>
            <StyledInputWraper>
              <InputComponent text={LANG['first-name']} />
              <InputComponent text={LANG['last-name']} />
            </StyledInputWraper>
            <StyledSpanWraper>
              <StyledSpan>
                {`${sickDays} sick leave`}
              </StyledSpan>
              <StyledSpan>{`${vacationDays} vacation day(s)`}</StyledSpan>
            </StyledSpanWraper>
            <StyledButton>
              <ActionButton
                onClick={(): void => {
                // eslint-disable-next-line no-console
                  console.log('cliked');
                }}
              >
                Add
              </ActionButton>
              <ActionButton
                onClick={(): void => {
                // eslint-disable-next-line no-console
                  console.log('cliked');
                }}
              >
                send password
              </ActionButton>
            </StyledButton>
          </StyledInfoSection>
          <TableWraper>
            <TableComponent />
          </TableWraper>
        </StyledContent>
      </StyledPage>
    </>
  );
}

export default ProfilePage;
