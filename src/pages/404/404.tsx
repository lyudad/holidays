import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledSection, Message, Button } from './styles';

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
