import styled from '@emotion/styled';

export const PhotosContainer = styled.div`
    width: 100%;
    max-width: 343px;
    align-content: center;
    
    .masonry-grid {
        display: flex;
        width: inherit;
        margin-left: -11px;
    }
    
    .masonry-grid_column {
        padding-left: 11px;
        background-clip: padding-box;
    }
    
    .masonry-grid_column > img {
        margin-bottom: 11px;
        border-radius: 11px;
        cursor: pointer;
        display: block;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 11px;
`;

export const Image = styled.img<{ size?: string }>`
    width: 105px;
    height: ${({ size }) =>
            size === 'tall' ? '165px' : 
            size === 'medium' ? '142px' :
            size === 'short' ? '122px' : '142px'
            };
    display: block;
    border-radius: 11px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export const DeleteIcon = styled.img`
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    opacity: 0.9;
    
    &:hover {
        opacity: 1.5;
    }
`;