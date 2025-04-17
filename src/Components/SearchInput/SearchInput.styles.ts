import styled from '@emotion/styled';

export const SearchContainer = styled.div`
    width: 100%;
    max-width: 343px;
    display: flex;
    align-items: center;
    border: 1.5px solid #15FF00;
    border-radius: 999px;
    padding: 8px 16px;
    background-color: transparent;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    color: #E8FFE6;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    flex: 1;

    &::placeholder {
        color: #E8FFE6;
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;
