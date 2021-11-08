import React, { useState, FC } from 'react';
import LANG from 'lanuage/en';
import { StyledSpan, StyledSpanWraper } from './styles';

// получает целого юзера или ID и по нему забирает данные о количестве sickDays и vacationDays

const DaysCounter: FC = () => {
  const [sickDays] = useState(5);
  const [vacationDays] = useState(15);

  return (
    <>
      <StyledSpanWraper>
        <StyledSpan>
          {`${sickDays} ${LANG.sickLeave}`}
        </StyledSpan>
        <StyledSpan>
          {`${vacationDays} ${LANG.vacationDay}` }
        </StyledSpan>
      </StyledSpanWraper>
    </>
  );
};

export default DaysCounter;
