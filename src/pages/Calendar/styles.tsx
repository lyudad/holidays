import styled from 'styled-components';
import {
  fontPrimary,
  textPrimary,
  colorPrimaryText,
} from 'utils/css-constants';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1440px;
`;
export const DatePicker = styled.p`
  ${fontPrimary};
  ${textPrimary};
  ${colorPrimaryText};
`;