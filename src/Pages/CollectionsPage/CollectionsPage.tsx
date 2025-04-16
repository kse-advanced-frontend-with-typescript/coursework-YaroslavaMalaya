import React, {useContext, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';
import { User } from '../../Modules/user/databaseTypes';
import { Header } from '../../Components/Header/Header';
import { BackNavigate } from '../../Components/BackNavigate/BackNavigate';
import { Footer } from '../../Components/Footer/Footer';
import { Collections } from '../../Components/Collections/Collections';
import {
    CollectionsContainer,
    ContentWrapper,
    BackWrapper,
    FooterWrapper
} from './CollectionsPage.styles';

export const CollectionsPage: React.FC = () => {
    const navigate = useNavigate();
    const { user, userAPI, setUser } = useContext(AppContext);
    const loadedRef = useRef(false);

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
            })
            .catch(() => navigate('/login'));

        loadedRef.current = true;
    }, []);

    if (!user) return null;

    const handleChoose = (id: string) => {
        navigate(`/collection/${id}`);
    };

    const collections = (user as User).collections.map((collection) => ({
        id: collection._id ?? collection.name,
        name: collection.name,
    }));

    const handleBack = () => {
        navigate('/search');
    };

    return (
        <CollectionsContainer>
            <ContentWrapper>
                <Header />
                <BackWrapper>
                    <BackNavigate label="Back to search" onClick={handleBack} />
                </BackWrapper>
                <Collections collections={collections} onChoose={handleChoose} />
            </ContentWrapper>

            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </CollectionsContainer>
    );
};
