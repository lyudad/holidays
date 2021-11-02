import styled from 'styled-components';
import React from 'react';

const StyledMaine = styled.main`
width:100%;
max-width: 1440px;
display:flex;
`;

export const StyledWraper = styled.div`
width:80%;
`;

export default function Maine({ children }:any) {
  return (
    <StyledMaine>
      {children}
    </StyledMaine>
  );
}
