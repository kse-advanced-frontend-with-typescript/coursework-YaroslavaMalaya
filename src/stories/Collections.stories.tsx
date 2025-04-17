import type { Meta, StoryObj } from '@storybook/react';
import { Collections } from '../Components/Collections/Collections';

const meta: Meta<typeof Collections> = {
    component: Collections,
    title: 'Components/Collections',
    tags: ['autodocs'],
    argTypes: {
        collections: {
            description: 'Array of collections to display',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        collections: [
            { id: 'nature1223', name: 'Nature aesthetics' },
            { id: 'makeup1223', name: 'Makeup and hair ideas' },
            { id: 'bedroom1212', name: 'Bedroom design' },
        ],
        onChoose: (id) => alert(`Navigate to ${id}`),
    },
};
