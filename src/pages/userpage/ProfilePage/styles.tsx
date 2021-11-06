import styled from 'styled-components';
import { textPrimary } from 'utils/css-constants';

export const StyledPage = styled.div`
width:100%;
display:flex;
margin: 0;
`;

export const StyledContent = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
`;
export const StyledInfoSection = styled.section`
width:100%;
display: flex;
flex-wrap: wrap;
pading: 20, 10;
`;

export const StyledInputWraper = styled.div`
width:100%;
display: flex;
justify-content: space-evenly;
margin-top: 40px`;
export const StyledSpanWraper = styled.div`
width:100%;
display: flex;
justify-content: space-evenly;
margin: 20px`;

export const StyledSpan = styled.span`
${textPrimary};
font-size: 20px;
margin:0, auto, 10,  auto;`;

export const StyledButton = styled.div`
heigh: 200px;
display: flex;
flex-direction: column;  
align-items: stretch;
margin-left: auto;
margin-right: 10%;
`;

export const TableWraper = styled.div`
display: block;
width:100%;
margin: 20px;`;
