import React from 'react';
import {
    CollectionContainer,
    Title,
    DeleteButton,
    TrashIcon
} from './CollectionTitle.styles';

type CollectionTitleProps = {
    name: string;
    onDelete?: () => void;
};

export const CollectionTitle: React.FC<CollectionTitleProps> = ({ name, onDelete }) => {
    return (
        <CollectionContainer>
            <Title>{name}</Title>
            <DeleteButton onClick={onDelete}>
                <TrashIcon src="/pictures/icons/deleteBig.svg" alt="Delete icon" />
            </DeleteButton>
        </CollectionContainer>
    );
};
