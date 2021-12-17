import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

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
export const StyledIcon = styled(UserOutlined)`
margin-right: 3px;
`;
