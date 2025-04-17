import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Form } from '../../Components/Form/Form';
import { useNavigate } from 'react-router-dom';
import {
    LoginContainer,
    ContentWrapper,
    FooterWrapper
} from './LogInPage.styles';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const context = useContext(AppContext);

    const handleSubmit = async ({ firstInput, secondInput }: { firstInput: string; secondInput: string }) => {
        try {
            const user = await context.userAPI.login(firstInput, secondInput);
            context.setUser(user);
            navigate('/collections');
        } catch {
            alert('Login failed');
        }
    };

    return (
        <LoginContainer>
            <ContentWrapper>
                <Header />
                <Form formName="login" onSubmit={handleSubmit} />
            </ContentWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </LoginContainer>
    );
};
