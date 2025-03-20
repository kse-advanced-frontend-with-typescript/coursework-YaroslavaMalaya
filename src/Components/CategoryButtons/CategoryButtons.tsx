import React, { useState } from 'react';
import { Button } from '../ActiveButton/Button';
import { CategoryContainer } from './CategoryButtons.styles';

type CategoryButtonsProps = {
    onCategorySelect: (category: string) => void;
};

const categories = ['Nature', 'Animals', 'Food'];

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({ onCategorySelect }) => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (category: string) => {
        setSelected(category);
        onCategorySelect(category);
    };

    return (
        <CategoryContainer>
            {categories.map((category) => (
                <Button
                    key={category}
                    text={category}
                    onClick={() => handleSelect(category)}
                    primary={selected === category}
                />
            ))}
        </CategoryContainer>
    );
};
