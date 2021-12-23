import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styled from 'styled-components';

export const StyledWrapInput = styled.div`
width:360px;
height: 30px;`;

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
export const StyledInput = styled(Input)`
&::-webkit-input-placeholder {
    color: "red";
  }
`;
