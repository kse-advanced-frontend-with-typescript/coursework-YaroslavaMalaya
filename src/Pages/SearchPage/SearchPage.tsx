import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initPhotoAPI } from '../../Modules/API';
import { Photo } from '../../Modules/API/types';
import { Header } from '../../Components/Header/Header';
import { SearchInput } from '../../Components/SearchInput/SearchInput';
import { CategoryButtons } from '../../Components/CategoryButtons/CategoryButtons';
import { PhotosSection } from '../../Components/PhotosSection/PhotosSection';
import {
    SearchContainer,
    ContentWrapper
} from './SearchPage.styles';

export const SearchPage: React.FC = () => {
    const navigate = useNavigate();
    const [ photos, setPhotos ] = useState<Photo[]>([]);
    const [ selectedCategory, setSelectedCategory ] = useState<string | null>(null);
    const photoAPI = initPhotoAPI(fetch);

    const handleSearch = async (query: string) => {
        if (!query) return;
        try {
            const results = await photoAPI.searchPhotos(query);
            setPhotos(results);
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    const handleInputClick = (value: string) => {
        setSelectedCategory(null);
        handleSearch(value);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        handleSearch(category);
    };

    const handlePhotoClick = (id: number) => {
        navigate(`/search/${id}`);
    };

    useEffect(() => {
        handleSearch('aesthetic');
    });

    return (
        <SearchContainer>
            <Header />
            <ContentWrapper>
                <SearchInput onSearch={handleInputClick} />
                <CategoryButtons selected={selectedCategory} onCategorySelect={handleCategoryClick} />
                <PhotosSection photos={photos} onPhotoClick={handlePhotoClick} />
            </ContentWrapper>
        </SearchContainer>
    );
};
