import React from 'react';
import { ButtonProps, Button } from 'antd';

const ActionButton = React.memo((props: ButtonProps) => (
  <Button {...props} />
));

export default ActionButton;
