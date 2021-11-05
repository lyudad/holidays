import React, { useState } from 'react';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import LANG from 'lanuage/en';
import { StyledWraper, StyledSpan, StyledButton } from 'components/ProfilePage/styles';
// import Table from 'components/Table';
// import TableTest from 'components/Table/TableTest';

// interface IColums{
//   title: string,
//   dataIndex: string,
//   key: string,
//   render: ()=>void,
// }
// interface IData{
//   key: string,
//   name: string,
//   dates: string,
//   status:string,
//   type: string,
// }
// const [sickDays, setsickDays] = useState({});
// const [vacationDays, setVacationDays] = useState({});

// setsickDays();
// setVacationDays();

// interface Props <T>{
//   content: T;
// }
// interface State {
//   text: string;
// }

function ProfilePage() {
  // const { colums }: IColums = TableTest.colums;
  // const { data } = TableTest;
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
  // временные заглушки
  const sickDays = 1;
  const vacationDays = 1;
  return (
    <>
      <section>
        <StyledWraper>
          <InputComponent
            name="firstName"
            type="text"
            onChange={handleInputChange}
            value={firstName}
            plaseholder={LANG['first-name']}
          />
          <InputComponent
            name="SecondName"
            type="text"
            value={SecondName}
            onChange={handleInputChange}
            plaseholder={LANG['last-name']}
          />
        </StyledWraper>
        <StyledWraper>
          <StyledSpan>
            {`${sickDays} sick leave`}
          </StyledSpan>
          <StyledSpan>{`${vacationDays} vacation days`}</StyledSpan>
        </StyledWraper>
        <StyledButton>
          <ActionButton>Add</ActionButton>
        </StyledButton>
      </section>
      {/* <div>
        <Table columns={colums} dataSource={data} />
      </div> */}
    </>
  );
}

export default ProfilePage;
