import styled from '@emotion/styled';

export const CollectionContainer = styled.div`
    width: 100%;
    max-width: 343px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: white;
    margin: 0;
`;

export const DeleteButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    
    &:hover {
        opacity: 0.7;
    }
`;

export const TrashIcon = styled.img`
    width: 24px;
    height: 24px;
`;
