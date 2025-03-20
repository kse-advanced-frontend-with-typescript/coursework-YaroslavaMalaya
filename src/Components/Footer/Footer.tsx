import React from 'react';
import {
    FooterContainer,
    LeftSide,
    Center,
    Text,
    RightSide,
    Icon
} from './Footer.styles';
import { Logo } from '../Logo/Logo';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <LeftSide>
                <Logo />
            </LeftSide>

            <Center>
                <Text>privacy policy</Text>
                <Text>2025</Text>
            </Center>

            <RightSide>
                <a href="https://www.tiktok.com/uk-UA/" target="_blank" rel="noopener noreferrer">
                    <Icon src="/pictures/icons/tiktok.svg" alt="TikTok icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <Icon src="/pictures/icons/inst.svg" alt="Instagram icon" />
                </a>
            </RightSide>
        </FooterContainer>
    );
};
