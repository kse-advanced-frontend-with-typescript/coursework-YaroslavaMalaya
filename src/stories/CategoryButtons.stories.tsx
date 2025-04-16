import type { Meta, StoryObj } from '@storybook/react';
import { CategoryButtons } from '../Components/CategoryButtons/CategoryButtons';

const meta: Meta<typeof CategoryButtons> = {
    component: CategoryButtons,
    title: 'Components/CategoryButtons',
    tags: ['autodocs'],
    argTypes: {
        selected: {
            control: 'select',
            options: [null, 'Nature', 'Animals', 'Food'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selected: null,
        onCategorySelect: (category: string) => {
            alert(`Selected: ${category}`);
        },
    },
};
