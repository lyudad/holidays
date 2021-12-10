import React from 'react';
import LANG from 'language/en';
import { StyledSpan, StyledSpanWraper } from './styles';

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
