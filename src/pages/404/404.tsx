import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledSection, Message, Button } from './styles';

const NotFoundPage: FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <StyledSection>
      <Message> Здесь нет ничего... </Message>
      <Button onClick={handleClick}>Назад</Button>
    </StyledSection>
  );
};

export default NotFoundPage;
