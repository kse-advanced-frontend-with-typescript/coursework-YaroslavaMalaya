import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router';
import { AppContext } from './context';
import { MainPage } from './Pages/MainPage/MainPage';
import { SearchPage } from './Pages/SearchPage/SearchPage';
import { PhotoDetailsPage } from './Pages/PhotoDetailsPage/PhotoDetailsPage';
import { LoginPage } from './Pages/LogInPage/LogInPage';
import { CollectionsPage } from './Pages/CollectionsPage/CollectionsPage';
import { AddToCollectionPage } from './Pages/AddToCollectionPage/AddToCollectionPage';
import { CollectionPhotosPage } from './Pages/CollectionPhotos/CollectionPhotosPage';
import { initUserAPI } from './Modules/user/initUserAPI';
import { User } from './Modules/user/databaseTypes';

export const App: React.FC = () => {
    const [ user, setUser ] = useState<User | null>(null);
    const userAPI = initUserAPI(fetch);

    const cleanUser = () => {
        setUser(null);
        userAPI.cleanToken();
    };

    useEffect(() => {
        const token = userAPI.restoreToken();
        if (token) {
            userAPI.getUserInfo(token)
                .then(setUser)
                .catch(console.error);
        }
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser, cleanUser, userAPI }}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/search/:id" element={<PhotoDetailsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/add-photo/:photoId" element={<AddToCollectionPage />} />
                <Route path="/collection/:collectionId" element={<CollectionPhotosPage />} />
            </Routes>
        </AppContext.Provider>
    );
};
