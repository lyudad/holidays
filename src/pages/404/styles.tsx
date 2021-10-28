import styled from 'styled-components';
import {
  fontPrimary,
  colorPrimaryText,
  textPrimary,
  textSecondary,
} from 'utils/css-constants';

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export const Message = styled.p`
  ${fontPrimary};
  ${textPrimary};
  ${colorPrimaryText};
`;

export const Button = styled.button`
  ${fontPrimary};
  ${textSecondary};
  ${colorPrimaryText};
  width: 120px;
  border: solid thin #000;
  border-radius: 20px;
`;
