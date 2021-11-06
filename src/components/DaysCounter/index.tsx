import React, { useState } from 'react';
import LANG from 'lanuage/en';
import { StyledSpan, StyledSpanWraper } from './styles';

interface Props {
  // eslint-disable-next-line react/require-default-props
  initialValue?: number;
}

const DaysCounter = ({ initialValue = 0 }: Props) => {
  const [sickDays] = useState(initialValue);
  const [vacationDays] = useState(initialValue);
  const sick = sickDays;
  const vacation = vacationDays;

  //
  return (
    <>
      <StyledSpanWraper>
        <StyledSpan>
          {sick}
          {' '}
          {LANG.sickLeave}
        </StyledSpan>
        <StyledSpan>
          {vacation}
          {' '}
          {LANG.vacationDay}
        </StyledSpan>
      </StyledSpanWraper>
    </>
  );
};

export default DaysCounter;
