import React, { useState, KeyboardEvent } from 'react';
import {
    SearchContainer,
    Input,
    Icon
} from './SearchInput.styles';

type SearchInputProps = {
    onSearch: (value: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(value.trim());
        }
    };

    const handleClick = () => {
        onSearch(value.trim());
    };

    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Icon src="/pictures/icons/search.svg" alt="search" onClick={handleClick} />
        </SearchContainer>
    );
};
