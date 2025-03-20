import type { Meta, StoryObj } from '@storybook/react';
import { PhotoDetails } from '../Components/PhotoDetails/PhotoDetails';

const meta: Meta<typeof PhotoDetails> = {
    component: PhotoDetails,
    title: 'Components/PhotoDetails',
    tags: ['autodocs'],
    argTypes: {
        id: {
            description: 'Unique ID of the photo',
            control: { type: 'number' },
        },
        imageUrl: {
            control: { type: 'text' },
        },
        author: {
            control: { type: 'text' },
        },
        pexelsUrl: {
            control: { type: 'text' },
        },
        description: {
            control: { type: 'text' },
        },
    },
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: 2014422,
        imageUrl: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        author: 'Joey Farina',
        pexelsUrl: 'https://www.pexels.com/@joey',
        description: 'A scenic landscape featuring a moss-covered or grassy mountain ridge with a river flowing through a gorge and a small waterfall.',
        onAdd: (id) => alert(`You wil add ${id} photo to collection`),
    },
};
