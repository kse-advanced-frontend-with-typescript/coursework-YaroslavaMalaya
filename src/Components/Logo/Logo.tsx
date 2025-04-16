import React from 'react';
import { LogoTitle } from './Logo.style';
import {useNavigate} from 'react-router-dom';

export const Logo = ()=> {
    const navigate = useNavigate();

    return (
        <LogoTitle onClick={() => navigate('/')}>Snaporia</LogoTitle>
    );
};