import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import StyledInput from 'components/Input/styles';
// type Ifoo = () => HTMLElement;
const InputComponent = () => (
  const [firstName, setName] = useState('');
const [SecondName, setSecondName] = useState('');
  
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case firstName:
        setName(value);
        break;
      case SecondName:
        setSecondName(value);
        break;
      default:
    }
  };
  <StyledInput>
    <Input
      placeholder={placeholder}
      value={firstName}
      name={LANG['first-name']}
      plaseholder={LANG['first-name']}
      type="text"
      prefix={<UserOutlined />}
    />
  </StyledInput>
);

export default InputComponent;
