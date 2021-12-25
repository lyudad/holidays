import styled from 'styled-components';
import { Button, Select } from 'antd';

const CalendarBlock = styled.div`
    width: calc(100%);
    height: calc(100%);
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: auto;
    position: relative;
    padding: 20px;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
`;

const SubmitButton = styled(Button)`
    margin-left: 10px;
`;

const SelectBlock = styled(Select)`
    width: 120px;
`;

const HeaderBlock = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export {
  SubmitButton,
  CalendarBlock,
  SelectBlock,
  HeaderBlock,
};
