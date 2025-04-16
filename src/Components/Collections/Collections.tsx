import React from 'react';
import {
    CollectionsContainer,
    Title,
    ButtonsWrapper,
    ButtonAlign,
    Message
} from './Collections.styles';
import { Button } from '../ActiveButton/Button';

type Collection = {
    id: string;
    name: string;
};

type CollectionsProps = {
    collections: Collection[];
    onChoose: (id: string) => void;
};

export const Collections: React.FC<CollectionsProps> = ({ collections, onChoose }) => {
    return (
        <CollectionsContainer>
            <Title>Choose your collection</Title>
            <ButtonsWrapper>
                {collections.length === 0 ? (
                    <Message>You do not have any collections yet</Message>
                ) : (collections.map((collection, index) => (
                    <ButtonAlign key={collection.id} alignRight={index % 2 === 1}>
                        <Button
                            text={collection.name}
                            onClick={() => onChoose(collection.id)}
                        />
                    </ButtonAlign>
                )))}
            </ButtonsWrapper>
        </CollectionsContainer>
    );
};
