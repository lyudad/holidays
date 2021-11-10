import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledContainer = styled.div`
display: flex;
margin-right:20px;
min-height: 100vh;
box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%),
0 6px 16px 0 rgb(0 0 0 / 8%),
0 9px 28px 8px rgb(0 0 0 / 5%);
`;

export const StyledMenu = styled(Menu)`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export default {
  StyledContainer,
  StyledMenu,
};
