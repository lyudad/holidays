import ActionButton from 'components/ActionButton';
import styled from 'styled-components';

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
padding: 20, 10;
`;

export const StyledInputWrapper = styled.div`
width:100%;
height: 50px;
display: flex;
align-items: flex-start;
justify-content: space-around;
margin-top: 40px`;

export const StyledButton = styled.div`
heigh: 200px;
display: flex;
flex-direction: column;  
align-items: stretch;
margin-left: auto;
margin-right: 10%;
`;

export const TableWrapper = styled.div`
display: block;
width:100%;
margin: 20px;
`;

export const StyledWrapInput = styled.div`
display: block;
height: 52px;
width:25%;
`;
export const StyledNotification = styled.p`
font-size: 12px;
color: red;
margin: 0;
padding: 0;
`;
export const StyledBtnAddPass = styled(ActionButton)`
margin-top: 10px;
`;
