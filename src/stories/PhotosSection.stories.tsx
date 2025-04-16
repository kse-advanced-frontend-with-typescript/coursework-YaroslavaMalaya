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
    { id: 1, src: { large: '/pictures/photos/example1.png' }, alt: 'Example 1' },
    { id: 2, src: { large: '/pictures/photos/example2.png' }, alt: 'Example 2' },
    { id: 3, src: { large: '/pictures/photos/example3.png' }, alt: 'Example 3' },
    { id: 4, src: { large: '/pictures/photos/example4.png' }, alt: 'Example 4' },
    { id: 5, src: { large: '/pictures/photos/example5.png' }, alt: 'Example 5' },
    { id: 6, src: { large: '/pictures/photos/example6.png' }, alt: 'Example 6' },
    { id: 7, src: { large: '/pictures/photos/example3.png' }, alt: 'Example 7' },
    { id: 8, src: { large: '/pictures/photos/example4.png' }, alt: 'Example 8' },
    { id: 9, src: { large: '/pictures/photos/example5.png' }, alt: 'Example 9' },
    { id: 10, src: { large: '/pictures/photos/example6.png' }, alt: 'Example 10' },
    { id: 11, src: { large: '/pictures/photos/example1.png' }, alt: 'Example 11' },
    { id: 12, src: { large: '/pictures/photos/example2.png' }, alt: 'Example 12' },
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
