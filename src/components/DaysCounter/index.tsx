import React from 'react';
import LANG from 'lanuage/en';
import { StyledSpan, StyledSpanWraper } from './styles';

// получает целого юзера или ID и по нему забирает данные о количестве sickDays и vacationDays
// type State = {
//   sickDays: number;
//   vacationDays: number;
// };
interface Props {
  sickDays: number;
  vacationDays: number;
}

const DaysCounter = ({ sickDays, vacationDays }: Props) => (
  <>
    <StyledSpanWraper>
      <StyledSpan>
        {sickDays === 1 ? `${sickDays} ${LANG.sickLeave}` : `${sickDays} ${LANG.sickLeaves}`}
      </StyledSpan>
      <StyledSpan>
        { vacationDays === 1 ? `${vacationDays} ${LANG.vacationDay}` : `${vacationDays} ${LANG.vacationDays}` }
      </StyledSpan>
    </StyledSpanWraper>
  </>
);

export default DaysCounter;
