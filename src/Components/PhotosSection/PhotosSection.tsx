import React from 'react';
import Masonry from 'react-masonry-css';
import {
    PhotosContainer,
    ImageWrapper,
    Image,
    DeleteIcon
} from './PhotosSection.styles';
import { Photo } from '../../Modules/API/types';

type PhotosSectionProps = {
    photos: Photo[];
    onPhotoClick: (id: number) => void;
    onDeletePhoto?: (id: number) => void;
    isSearch?: boolean;
};

const getRandomSize = (): 'tall' | 'medium' | 'short' => {
    const sizes = ['tall', 'medium', 'short'] as const;
    return sizes[Math.floor(Math.random() * sizes.length)];
};

export const PhotosSection: React.FC<PhotosSectionProps> = ({ photos, onPhotoClick, onDeletePhoto, isSearch = true }) => {
    return (
        <PhotosContainer>
            <Masonry
                breakpointCols={3}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {photos.map(photo => (
                    <ImageWrapper key={photo.id}>
                        <Image
                            src={photo.src.large}
                            alt={photo.alt || 'Photo'}
                            size={getRandomSize()}
                            onClick={() => onPhotoClick(photo.id)}
                        />
                        {!isSearch && (
                            <DeleteIcon
                                src="/pictures/icons/deleteSmall.svg"
                                alt="Delete"
                                onClick={() => onDeletePhoto?.(photo.id)}
                            />
                        )}
                    </ImageWrapper>
                ))}
            </Masonry>
        </PhotosContainer>
    );
};
