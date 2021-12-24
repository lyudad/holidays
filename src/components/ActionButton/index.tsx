import React from 'react';
import { ButtonProps, Button } from 'antd';

const ActionButton = (props: ButtonProps) => (
  <Button {...props} />
);
// const ActionButton = React.forwardRef((props: ButtonProps, ref): any => {
//   <Button {...props} ref={ref} />;
// });

export default ActionButton;
