import React from 'react';
import {
    BackContainer,
    Icon,
    Text
} from './BackNavigate.styles';

type BackNavigateProps = {
    label: string;
    onClick?: () => void;
};

export const BackNavigate: React.FC<BackNavigateProps> = ({ label, onClick }) => {
    return (
        <BackContainer onClick={onClick}>
            <Icon src="/pictures/icons/arrowR.svg" alt="Back icon" />
            <Text>{label}</Text>
        </BackContainer>
    );
};
