import styled from 'styled-components';
import { textPrimary } from 'utils/css-constants';

export const StyledWraper = styled.div`
display: flex;
justify-content: space-evenly;
margin: 20px`;

export const StyledSpan = styled.span`
${textPrimary};
font-size: 26px;`;

export const StyledButton = styled.div`
display: flex;    
justify-content: flex-end;
padding: 0 10% 0 0;
`;
// export default {
//   StyledWraper,
//   StyledSpan,
// };
