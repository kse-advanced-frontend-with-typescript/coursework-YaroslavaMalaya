import React, {useContext, useEffect, useRef, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import { initPhotoAPI } from '../../Modules/API';
import { Photo } from '../../Modules/API/types';
import { User, Collection } from '../../Modules/user/databaseTypes';
import { Header } from '../../Components/Header/Header';
import { BackNavigate } from '../../Components/BackNavigate/BackNavigate';
import { Footer } from '../../Components/Footer/Footer';
import { CollectionTitle } from '../../Components/CollectionTitle/CollectionTitle';
import { PhotosSection } from '../../Components/PhotosSection/PhotosSection';
import {
    CollectionContainer,
    ContentWrapper,
    Description,
    BackWrapper,
    FooterWrapper,
} from './CollectionPhotosPage.styles';

export const CollectionPhotosPage: React.FC = () => {
    const navigate = useNavigate();
    const { collectionId } = useParams();
    const { userAPI, setUser } = useContext(AppContext);
    const [ photos, setPhotos ] = useState<Photo[]>([]);
    const [ collection, setCollection ] = useState<Collection | null>(null);
    const loadedRef = useRef(false);
    const loadedCollectionRef = useRef(false);
    const api = initPhotoAPI(fetch);

    useEffect(() => {
        if (loadedRef.current) return;

        const token = userAPI.restoreToken();
        if (!token) {
            navigate('/login');
            return;
        }

        userAPI.getUserInfo(token)
            .then((user) => {
                setUser(user);
                const foundCollection = (user as User).collections.find(
                    (collection) => collection._id === collectionId
                );
                if (!foundCollection) {
                    navigate('/collections');
                    return;
                }
                setCollection(foundCollection);
            })
            .catch(() => navigate('/login'));

        loadedRef.current = true;
    }, []);

    useEffect(() => {
        if (loadedCollectionRef.current) return;
        if (!collection) return;

        const fetchPhotos = async () => {
            try {
                const fetchedPhotos = await Promise.all(
                    (collection as Collection).photosId.map(photoId => api.getPhotoById(Number(photoId)))
                );
                setPhotos(fetchedPhotos);
            } catch (err) {
                console.error('Error fetching photos', err);
            }
        };

        fetchPhotos();
        loadedCollectionRef.current = true;
    }, [collection]);

    if (!collection) return null;

    const handleDeletePhoto = () => {
        alert('This functionality will be added later, since it wasn\'t included in MVP.');
    };

    const handleDeleteCollection = () => {
        alert('This functionality will be added later, since it wasn\'t included in MVP.');
    };

    const handlePhotoClick = (id: number) => {
        navigate(`/search/${id}`);
    };

    return (
        <CollectionContainer>
            <ContentWrapper>
                <Header />
                <BackWrapper>
                    <BackNavigate label="Back to collections" onClick={() => navigate('/collections')} />
                </BackWrapper>

                <CollectionTitle name={collection.name} onDelete={handleDeleteCollection} />
                <Description>{collection.description || 'No description provided'}</Description>

                <PhotosSection
                    photos={photos}
                    onPhotoClick={handlePhotoClick}
                    onDeletePhoto={handleDeletePhoto}
                    isSearch={false}
                />
            </ContentWrapper>

            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </CollectionContainer>
    );
};
