import React from 'react';
import
{
  Form, Input, Button,
} from 'antd';
import LANG from 'language/en';
import { useAppSelector } from 'utils/hooks';
import { SUPER_ADMIN_ROLE } from 'utils/texts-constants';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddUserForm = () => {
  const [form] = Form.useForm();
  const role: string = useAppSelector((state) => state.user.userData.role);
  const showRole = (role === SUPER_ADMIN_ROLE);
  const onFinish = (values:string) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name={LANG['first-name']}
        label={LANG['first-name']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={LANG['last-name']}
        label={LANG['last-name']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={LANG.email}
        label={LANG.email}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      { showRole && (
      <Form.Item
        name={LANG.role}
        label={LANG.role}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder={`${LANG.hr} or ${LANG.employee}`} />
      </Form.Item>
      )}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUserForm;
