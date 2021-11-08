/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Form, Input } from 'antd';

export const StyledForm = styled(Form)`
 display:flex;
 flex-direction:column;
 margin-left:auto;
 margin-right:auto;
 margin-top:100px;
 width:400px;
`;

export const StyledInput = styled(Input)`
 margin-left:50px;
 margin-right:50px;
margin-top:25px;

`;
export const StyledMessage = styled.div`
 margin-left:50px;
 margin-right: auto;
 margin-top: 10px;
`;
