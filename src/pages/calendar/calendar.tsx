import React, { FC } from 'react';
import DateCalendar from 'components/Calendar';
import ActionButton from 'components/ActionButton';
import DateCascader from 'components/Cascade/index';
import { ButtonWrap, DateCalendarForm, DateFormBottom } from './styles';

const Calendar: FC = () => (
  <DateCalendarForm>
    <DateCalendar />
    <DateFormBottom>
      <DateCascader />
      <ButtonWrap>
        <ActionButton
          block
          type="default"
          shape="round"
          size="middle"
          onClick={() => console.log('submit')}
        >
          Submit
        </ActionButton>
      </ButtonWrap>
    </DateFormBottom>
  </DateCalendarForm>
);

export default Calendar;
