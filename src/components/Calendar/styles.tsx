import styled from 'styled-components';
import { DatePicker, Button } from 'antd';
import {
  textPrimary,
} from 'utils/css-constants';

export const DateForm = styled(DatePicker)`
display: flex;
margin-left: auto;
margin-rigth: auto;
margin-top: 40px;
width: 1200;
 ${textPrimary};
`;

export const Button = styled(Button)`
display: flex;
margin-left: auto;
margin-rigth: auto;
margin-top: 40px;
width: 60px;
 ${textPrimary};
`;
