import React, { useState } from 'react';
import InputComponent from 'components/Input';
import ActionButton from 'components/ActionButton';
import Table from 'components/Table';

function ProfilePage() {
//   const [name, setName] = useState('');
//   const [Secondname, setSecondName] = useState('');
  const [sickDays, setsickDays] = useState({});
  const [vacationDays, setvacationDays] = useState({});

  return (
    <>
      <section>
        <div>
          <InputComponent plaseholder="first name" />
          <InputComponent plaseholder="last name" />
        </div>
        <div>
          <span>
            {`${sickDays} sick leave`}
            {' '}
          </span>
          <span>{`${vacationDays} vacation days`}</span>
        </div>
        <ActionButton>Add</ActionButton>
      </section>
      <div>
              <Table props={ data }/>
      </div>
    </>
  );
}
export default ProfilePage;
