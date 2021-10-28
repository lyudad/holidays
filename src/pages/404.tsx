import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const Message = styled.p`
  font-family: inherit;
  font-size: 36px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 120px;
  border: solid thin #000;
  border-radius: 20px;
  color: inherit;
`;

const NotFoundPage: FC = () => {
  const history = useHistory();
  return (
    <StyledSection>
      <Message> Здесь нет ничего... </Message>
      <Button onClick={() => history.goBack()}>Назад</Button>
    </StyledSection>
  );
};

export default NotFoundPage;
