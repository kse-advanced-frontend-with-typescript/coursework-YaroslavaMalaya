import styled from '@emotion/styled';

export const DetailsContainer = styled.div`
    width: 100%;
    max-width: 343px;
    border: 2px solid #15FF00;
    border-radius: 11px;
    background-color: rgb(0, 0, 0, 0.43);
    overflow: hidden;
`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

export const InfoWrapper = styled.div`
    padding: 16px 19px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const TextWrapper = styled.div`
    color: white;
`;


export const Label = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
`;

export const Text = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px; 
    font-weight: 300;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;