import styled from 'styled-components';
import { textPrimary } from 'utils/css-constants';

export const StyledSpanWraper = styled.div`
width:100%;
display: flex;
justify-content: space-evenly;
margin: 20px`;

export const StyledSpan = styled.span`
${textPrimary};
font-size: 20px;
margin:0, auto, 10,  auto;`;
