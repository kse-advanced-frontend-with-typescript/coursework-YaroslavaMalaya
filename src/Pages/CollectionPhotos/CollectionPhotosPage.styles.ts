import styled from '@emotion/styled';

export const CollectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #161616;
    width: 100%;
    padding: 26px 30px 0 30px;
    min-height: 100vh;
    gap: 22px;
`;

export const ContentWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    flex: 1;
`;

export const BackWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: flex-start;
`;

export const FooterWrapper = styled.div`
    width: 100%;
    max-width: 390px;
`;

export const Description = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 300;
    color: white;
    text-align: start;
    margin: 0;
`;
