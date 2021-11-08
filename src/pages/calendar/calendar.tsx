/* eslint-disable linebreak-style */
import React, { FC } from 'react';
import DateCalendar from 'components/Calendar';
import ActionButton from 'components/ActionButton';
import { ADD_USER_BUTTON_TEXT } from 'utils/texts-constants';
import { ButtonWrap, DateCalendarForm } from './styles';

const Calendar: FC = () => (
  <DateCalendarForm>
    <DateCalendar />
    <ButtonWrap>
      <ActionButton
        block
        type="default"
        shape="round"
        size="middle"
      // eslint-disable-next-line no-console
        onClick={() => console.log('submit')}
      >
        {ADD_USER_BUTTON_TEXT}
      </ActionButton>
    </ButtonWrap>
  </DateCalendarForm>
);

export default Calendar;
