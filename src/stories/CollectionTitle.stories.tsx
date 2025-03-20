import type { Meta, StoryObj } from '@storybook/react';
import { CollectionTitle } from '../Components/CollectionTitle/CollectionTitle';

const meta: Meta<typeof CollectionTitle> = {
    title: 'Components/CollectionTitle',
    component: CollectionTitle,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'Nature aesthetics',
        onDelete: () => alert('Deleted collection'),
    },
};
