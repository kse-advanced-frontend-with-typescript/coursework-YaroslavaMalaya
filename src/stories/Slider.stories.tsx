import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../Components/SliderSection/Slider';

const images = [
    '/pictures/photos/example1.png',
    '/pictures/photos/example2.png',
    '/pictures/photos/example3.png',
    '/pictures/photos/example4.png',
    '/pictures/photos/example5.png',
    '/pictures/photos/example6.png',
];

const meta: Meta<typeof Slider> = {
    component: Slider,
    title: 'Components/Slider',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        images,
    },
};
