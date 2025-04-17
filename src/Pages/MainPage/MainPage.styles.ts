import styled from '@emotion/styled';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    width: 100%;
`;

export const WelcomeSection = styled.section`
    background-image: url('/pictures/photos/background.png');
    background-size: cover;
    background-position: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 34px;
    text-align: center;
    margin: 0;
`;

export const Title = styled.h1`
    margin: 85px 0 42px 0;
    font-size: 24px;
    font-weight: 800;
    color: white;

    span {
        color: #15FF00;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    color: white;
    padding: 42px 60px 56px 60px;
`;

export const ExampleSection = styled.section`
    width: 100%;
    padding-top: 10px;
    background-color: #1D2020;
`;

export const ExampleTitle = styled.h2`
    font-size: 13px;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-bottom: 21px;
`;

export const CallToActionSection = styled.section`
    background-color: #171919;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    gap: 14px;
    padding: 15px 20px;
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
`;

export const LoginText = styled.p`
    font-size: 26px;
    font-weight: 600;
    color: white;

    span {
        color: #15FF00;
    }
`;

export const CollectionsImage = styled.img`
    width: 173px;
    height: 140px;
    object-fit: cover;
`;
