import type { Meta, StoryObj } from '@storybook/react';
import { PhotosSection } from '../Components/PhotosSection/PhotosSection';

const meta: Meta<typeof PhotosSection> = {
    component: PhotosSection,
    title: 'Components/PhotosSection',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const examplePhotos = [
    { id: 1, url: '/pictures/photos/example1.png' },
    { id: 2, url: '/pictures/photos/example2.png' },
    { id: 3, url: '/pictures/photos/example3.png' },
    { id: 4, url: '/pictures/photos/example4.png' },
    { id: 5, url: '/pictures/photos/example5.png' },
    { id: 6, url: '/pictures/photos/example6.png' },
    { id: 7, url: '/pictures/photos/example3.png' },
    { id: 8, url: '/pictures/photos/example4.png' },
    { id: 9, url: '/pictures/photos/example5.png' },
    { id: 10, url: '/pictures/photos/example6.png' },
    { id: 11, url: '/pictures/photos/example1.png' },
    { id: 12, url: '/pictures/photos/example2.png' },
];

export const SearchPhotoSection: Story = {
    name: 'Search (no delete icons)',
    args: {
        photos: examplePhotos,
        onPhotoClick: (id: number) => alert(`Clicked photo ${id}`),
        isSearch: true,
    },
};

export const CollectionPhotoSection: Story = {
    name: 'Collection (with delete icons)',
    args: {
        photos: examplePhotos,
        onPhotoClick: (id: number) => alert(`Clicked photo ${id}`),
        onDeletePhoto: (id: number) => alert(`Deleted photo ${id}`),
        isSearch: false,
    },
};
