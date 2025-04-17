import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../Components/Header/Header';

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'Components/Header',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
