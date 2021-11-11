/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { DatePicker } from 'antd';
import {
  textPrimary,
} from 'utils/css-constants';

export const DateForm = styled(DatePicker)`
display: block;
margin-left: 0;
margin-rigth: auto;
margin-top: 0;
width: 1200;
 ${textPrimary};
`;
