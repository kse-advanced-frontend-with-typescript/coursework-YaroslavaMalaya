import React from 'react';
import { Button } from '../ActiveButton/Button';
import { CategoryContainer } from './CategoryButtons.styles';

type CategoryButtonsProps = {
    selected: string | null;
    onCategorySelect: (category: string) => void;
};

const categories = ['Nature', 'Animals', 'Food'];

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({ onCategorySelect, selected }) => {
    return (
        <CategoryContainer>
            {categories.map((category) => (
                <Button
                    key={category}
                    text={category}
                    onClick={() => onCategorySelect(category)}
                    primary={selected === category}
                />
            ))}
        </CategoryContainer>
    );
};
