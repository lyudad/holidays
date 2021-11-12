import styled from 'styled-components';

export const DateCalendarForm = styled.div`
  width: clamp(320px, 100%, 1200px);
  margin: 0 auto;
  height: 100vh;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  width: clamp(160px, 50%, 320px);
  flex-basis: 40px;
  display: inline-block;
  align-self: flex-end;
  margin-left: 100px;
  margin-rigth: auto;
 
`;

export const DateFormBottom = styled.div`
  width: clamp(160px, 50%, 320px);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
