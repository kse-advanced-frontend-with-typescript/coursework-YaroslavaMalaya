import React from 'react';
import {
    DetailsContainer,
    Photo,
    InfoWrapper,
    TextWrapper,
    Label,
    Text
} from './PhotoDetails.styled';
import {Button} from '../ActiveButton/Button';

type PhotoDetailsProps = {
    id: number;
    imageUrl: string;
    author: string;
    pexelsUrl: string;
    description: string;
    onAdd: (id: number) => void;
};

export const PhotoDetails: React.FC<PhotoDetailsProps> = ({ id, imageUrl, author, pexelsUrl, description, onAdd}) => {
    const username = pexelsUrl.split('/').filter(Boolean).pop();

    return (
        <DetailsContainer>
            <Photo src={imageUrl} alt={`Photo by ${author}`} />
            <InfoWrapper>
                <TextWrapper>
                    <Label>Author: </Label>
                    <Text>{author}</Text>
                </TextWrapper>
                <TextWrapper>
                    <Label>Pexels profile: </Label>
                    <Text href={pexelsUrl} target="_blank" rel="noopener noreferrer">
                            {username}
                    </Text>
                </TextWrapper>
                <TextWrapper>
                    <Label>Description: </Label>
                    <Text>{description}</Text>
                </TextWrapper>
                <Button
                    text={'Add to collection'}
                    onClick={() => onAdd(id)}
                />
            </InfoWrapper>
        </DetailsContainer>
    );
};
