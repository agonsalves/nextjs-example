import { Meta, Story } from '@storybook/react';
import React from 'react';
import SocialSharing, { SocialSharingProps } from '.';

export default {
  title: 'Components/SocialSharing',
  component: SocialSharing,
} as Meta;

const Template: Story<SocialSharingProps> = args => {
  return <SocialSharing {...args} />;
};

export const SocialButtons = Template.bind({});

SocialButtons.parameters = {};
SocialButtons.args = {
  url: '',
  postTitle: '',
};
