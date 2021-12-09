import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSection, Message, Button } from './styles';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <StyledSection>
      <Message> Здесь нет ничего... </Message>
      <Button onClick={goBack}>Назад</Button>
    </StyledSection>
  );
};

export default NotFoundPage;
