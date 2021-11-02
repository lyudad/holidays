import React from 'react';
import { Input, InputProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputComponent from '.';

const Stories = {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['lage', 'default', 'small'],
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ margin: '20', width: '20%' }}>
        <Story />
      </div>
    ),
  ],

};
export default Stories as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args: InputProps) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { placeholder: 'first name', prefix: <UserOutlined /> };

export const Secondary = Template.bind({});
Secondary.args = { placeholder: 'last name', prefix: <UserOutlined /> };
