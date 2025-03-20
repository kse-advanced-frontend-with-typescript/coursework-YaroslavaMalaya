import React from 'react';
import { Container, AccountIcon } from './Header.styles';
import { Logo } from '../Logo/Logo';

export const Header: React.FC = () => {
    return (
        <Container>
            <Logo />
            <AccountIcon src="/pictures/icons/account.svg" alt="Account icon" />
        </Container>
    );
};
