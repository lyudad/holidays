import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled.div`
width:25%;
height: 30px;`;

export default StyledInput;

export const StyledNotification = styled.p`
font-size: 12px;
color: red;
margin: 0;
padding: 0;
:hover : {
    color: red;
}
`;

export const StyledInputAnt = styled(Input)`
:active : {
    border: none;
}
// :focus{
// border: 3px solid red;
// box-shadow: 1px 1px 2px 0 blue;
// }

outline: none;
:hover : {
    border: 1px solid red;
}
`;
