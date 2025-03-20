import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Components/ActiveButton/Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
    argTypes: {
        primary: { control: 'boolean' },
        text: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        text: 'Search',
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        text: 'Log in',
    },
};
