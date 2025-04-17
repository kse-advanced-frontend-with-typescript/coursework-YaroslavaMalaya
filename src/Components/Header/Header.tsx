import React, {useContext} from 'react';
import { Container, AccountIcon } from './Header.styles';
import { Logo } from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context';

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useContext(AppContext);

    const handleClick = () => {
        if (user) {
            navigate('/collections');
        } else {
            navigate('/login');
        }
    };

    return (
        <Container>
            <Logo />
            <AccountIcon src="/pictures/icons/account.svg"
                         alt="Account icon"
                         onClick={handleClick}
            />
        </Container>
    );
};
