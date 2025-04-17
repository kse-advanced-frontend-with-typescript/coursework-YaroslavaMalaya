import type { Meta, StoryObj } from '@storybook/react';
import { BackNavigate } from '../Components/BackNavigate/BackNavigate';

const meta: Meta<typeof BackNavigate> = {
    component: BackNavigate,
    title: 'Components/BackNavigate',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'BACK TO SEARCH',
        onClick: () => alert('Go back!'),
    },
};
