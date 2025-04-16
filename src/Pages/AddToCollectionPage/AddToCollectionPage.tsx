import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context';
import { User } from '../../Modules/user/databaseTypes';
import { Header } from '../../Components/Header/Header';
import { BackNavigate } from '../../Components/BackNavigate/BackNavigate';
import { Collections } from '../../Components/Collections/Collections';
import { Footer } from '../../Components/Footer/Footer';
import { Form } from '../../Components/Form/Form';
import {
    AddContainer,
    ContentWrapper,
    BackWrapper,
    FooterWrapper
} from './AddToCollectionPage.styles';

export const AddToCollectionPage: React.FC = () => {
    const navigate = useNavigate();
    const { photoId } = useParams();
    const { user, userAPI, setUser } = useContext(AppContext);

    useEffect(() => {
        const token = userAPI.restoreToken();
        if (!token) {
            navigate('/login');
            return;
        }

        userAPI.getUserInfo(token)
            .then((user) => {
                setUser(user);
            })
            .catch(() => navigate('/login'));
    }, [navigate, setUser, userAPI]);

    const handleBack = () => {
        navigate('/search');
    };

    const handleChoose = async (collectionId: string) => {
        if (!photoId) return;

        try {
            await userAPI.addPhotoToCollection(collectionId, String(photoId));
            navigate(`/collection/${collectionId}`);
        } catch {
            alert('Something went wrong while adding the photo. Try again later.');
        }
    };

    const handleCreate = async ({ firstInput, secondInput }: { firstInput: string; secondInput: string }) => {
        if (!photoId) return;

        try {
            const newCollection = await userAPI.createCollection(firstInput, secondInput);
            await userAPI.addPhotoToCollection(newCollection._id, String(photoId));
            navigate(`/collection/${newCollection._id}`);
        } catch {
            alert('Something went wrong while creating the collection and adding photo. Try again later.');
        }
    };

    if (!user) return null;

    const collections = (user as User).collections.map((collection) => ({
        id: collection._id!,
        name: collection.name,
    }));

    return (
        <AddContainer>
            <ContentWrapper>
                <Header />
                <BackWrapper>
                    <BackNavigate label="Back to search" onClick={handleBack} />
                </BackWrapper>
                <Collections collections={collections} onChoose={handleChoose} />
                <Form formName="createCollection" onSubmit={handleCreate} />
            </ContentWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </AddContainer>
    );
};
