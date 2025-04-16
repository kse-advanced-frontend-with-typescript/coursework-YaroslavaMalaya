import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { initPhotoAPI } from '../../Modules/API';
import { PhotoDetails as PhotoDetailsType } from '../../Modules/API/types';
import { Header } from '../../Components/Header/Header';
import { BackNavigate } from '../../Components/BackNavigate/BackNavigate';
import { PhotoDetails } from '../../Components/PhotoDetails/PhotoDetails';
import { Footer } from '../../Components/Footer/Footer';
import {
    DetailsContainer,
    ContentWrapper,
    BackWrapper,
    FooterWrapper
} from './PhotoDetailsPage.styles';

export const PhotoDetailsPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ photo, setPhoto ] = useState<PhotoDetailsType | null>(null);
    const photoAPI = initPhotoAPI(fetch);

    useEffect(() => {
        if (id) {
            photoAPI.getPhotoById(Number(id))
                .then(setPhoto)
                .catch((err) => console.error('Failed to fetch photo details:', err));
        }
    }, [id, photoAPI]);

    const handleAdd = () => {
        navigate(`/add-photo/${photo?.id.toString()}`);
    };

    const handleBack = () => {
        navigate('/search');
    };

    if (!photo) return null;

    return (
        <DetailsContainer>
            <ContentWrapper>
                <Header />
                <BackWrapper>
                    <BackNavigate label="Back to search" onClick={handleBack} />
                </BackWrapper>

                <PhotoDetails
                    id={photo.id}
                    imageUrl={photo.src.large}
                    author={photo.photographer}
                    pexelsUrl={photo.photographer_url}
                    description={photo.alt ?? 'No description'}
                    onAdd={handleAdd}
                />
            </ContentWrapper>
            <FooterWrapper>
            <Footer />
            </FooterWrapper>
        </DetailsContainer>
    );
};
