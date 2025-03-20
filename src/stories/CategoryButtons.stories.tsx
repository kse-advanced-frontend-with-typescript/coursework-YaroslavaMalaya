import type { Meta, StoryObj } from '@storybook/react';
import { CategoryButtons } from '../Components/CategoryButtons/CategoryButtons';

const meta: Meta<typeof CategoryButtons> = {
    component: CategoryButtons,
    title: 'Components/CategoryButtons',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onCategorySelect: (category: string) => {
            alert(`Selected: ${category}`);
        },
    },
};
