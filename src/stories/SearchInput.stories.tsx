import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../Components/SearchInput/SearchInput';

const meta: Meta<typeof SearchInput> = {
    component: SearchInput,
    title: 'Components/SearchInput',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSearch: (value) => alert(`You searched for: ${value}`),
    },
};
