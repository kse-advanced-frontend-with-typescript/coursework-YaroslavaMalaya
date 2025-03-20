import React from 'react';
import {
    ButtonContainer,
    ButtonText
} from './Button.styles';

type ButtonProps = {
    text: string;
    primary?: boolean;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, primary = false, onClick }) => {
    return (
        <ButtonContainer primary={primary} onClick={onClick}>
            <ButtonText>{text}</ButtonText>
        </ButtonContainer>
    );
};
