import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonProps } from 'antd';

import ActionButton from '.';

const Stories = {
  title: 'ActionButton',
  component: ActionButton,
  argTypes: {
    shape: {
      control: 'select',
      options: ['round', 'default', 'circle'],
    },
    size: {
      control: 'radio',
      options: ['large', 'middle', 'small'],
    },
    type: {
      control: 'radio',
      options: ['primary', 'ghost', 'link', 'text', 'default'],
    },
    onClick: {
      control: 'action',
    },
  },
  decorators: [
    (Story: any) => (
      <div>
        <p>Centered flex-box blocks padded by 20px both containing button:</p>
        <div style={{
          width: '320px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray',
          padding: '20px',
        }}
        >
          <Story />
        </div>
        <div style={{
          width: '160px',
          height: '60px',
          display: 'flex',
          marginTop: '24px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'brown',
          padding: '20px',
        }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default Stories as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args: ButtonProps) => (
  <ActionButton {...args} />
);

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  href: '/',
  target: '_self',
  block: true,
  type: 'default',
  size: 'large',
  children: '+',
  disabled: false,
  ghost: false,
  loading: false,
};
