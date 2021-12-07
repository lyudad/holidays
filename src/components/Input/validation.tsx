import * as yup from 'yup';

const validation = {
  firstName: yup.string().matches(/^([^0-9]*)$/, 'First Name should not contain numbers').min(2, 'First Name must be longer').max(10, 'First Name must be shorter'),
  lastName: yup.string().matches(/^([^0-9]*)$/, 'Last Name should not contain numbers').min(2, 'Last Name must be longer').max(10, 'Last name must be shorter'),
  email: yup.string().email().min(4, 'Email must be longer').max(30, 'Email must be shorter'),
};
const schema = yup.object(validation).required();

export default schema;
