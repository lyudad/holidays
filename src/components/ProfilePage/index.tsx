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
// const namePlh = LANG['first-name'];

function ProfilePage() {
  // const { colums }: IColums = TableTest.colums;
  // const { data } = TableTest;

  // временные заглушки
  const sickDays = 1;
  const vacationDays = 1;
  return (
    <>
      <section>
        <StyledWraper>
          <InputComponent

            onChange={handleInputChange}

          />
          <InputComponent
            name="SecondName"
            plaseholder={LANG.lastName}
            type="text"
            value={SecondName}
            onChange={handleInputChange}
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
