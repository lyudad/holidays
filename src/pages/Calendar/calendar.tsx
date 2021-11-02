import React, { FC } from 'react';
import { Container} from './styles';
import { DatePicker} from './components/DatePicker';

const Calendar: FC = () => (
  <Container>
    <DatePicker />
  </Container>
);

export default Calendar;