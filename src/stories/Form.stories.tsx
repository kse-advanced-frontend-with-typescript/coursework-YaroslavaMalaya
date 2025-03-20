import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../Components/Form/Form';

const meta: Meta<typeof Form> = {
    component: Form,
    title: 'Components/Form',
    tags: ['autodocs'],
    argTypes: {
        formName: {
            control: { type: 'radio' },
            options: ['login', 'createCollection'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
    args: {
        formName: 'login',
        onSubmit: (data) => {
            alert(`Login submitted:\nEmail: ${data.firstInput}\nPassword: ${data.secondInput}`);
        },
    },
};

export const CreateCollection: Story = {
    args: {
        formName: 'createCollection',
        onSubmit: (data) => {
            alert(`Collection created:\nName: ${data.firstInput}\nDescription: ${data.secondInput}`);
        },
    },
};
