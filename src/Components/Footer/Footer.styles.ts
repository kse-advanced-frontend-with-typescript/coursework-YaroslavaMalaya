import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 28px;
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
`;

export const Text = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 7px;
    font-weight: 200;
    color: white;
    margin: 2px 0;
`;

export const RightSide = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;
