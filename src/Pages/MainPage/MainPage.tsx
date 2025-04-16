import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../Components/Logo/Logo';
import { Slider } from '../../Components/SliderSection/Slider';
import { Footer } from '../../Components/Footer/Footer';
import { Button } from '../../Components/ActiveButton/Button';
import {
    MainContainer,
    WelcomeSection,
    Title,
    Text,
    ExampleSection,
    ExampleTitle,
    CallToActionSection,
    ContentWrapper,
    LoginWrapper,
    LoginText,
    CollectionsImage
} from './MainPage.styles';

export const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const sliderImages = [
        '/pictures/photos/example1.png',
        '/pictures/photos/example2.png',
        '/pictures/photos/example3.png',
        '/pictures/photos/example4.png',
        '/pictures/photos/example5.png',
        '/pictures/photos/example6.png'
    ];

    return (
        <MainContainer>
            <WelcomeSection>
                <Logo />
                <Title>FIND YOUR <span>PERFECT</span> PHOTO!</Title>
                <Button
                    text="Search"
                    primary={true}
                    onClick={() => navigate('/search')}
                />
                <Text>Type in a word related to your photo search and get amazing results.</Text>
            </WelcomeSection>

            <ExampleSection>
                <ExampleTitle>EXAMPLE FOR &quot;NATURE&quot; SEARCH</ExampleTitle>
                <Slider images={sliderImages} />
            </ExampleSection>

            <CallToActionSection>
                <ContentWrapper>
                <LoginWrapper>
                    <LoginText><span>LOG IN</span> FOR CREATING YOUR OWN COLLECTIONS</LoginText>
                    <Button
                        text="Log in"
                        onClick={() => navigate('/login')}
                    />
                </LoginWrapper>
                <CollectionsImage src="/pictures/collections.png" alt="Collections example" />
                </ContentWrapper>
            </CallToActionSection>
            <Footer />
        </MainContainer>
    );
};
