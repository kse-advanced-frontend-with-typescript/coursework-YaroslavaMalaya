import styled from '@emotion/styled';

export const CollectionsContainer = styled.div`
    width: 100%;
    max-width: 343px;
    background-color: rgb(0, 0, 0, 0.43);
    border: 2px solid #15FF00;
    border-radius: 11px;
    padding: 22px;
`;

export const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-align: center;
    margin: 0;
`;

export const ButtonsWrapper = styled.div`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;
`;

export const ButtonAlign = styled.div<{ alignRight?: boolean }>`
    align-self: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
`;

export const Message = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: rgba(191, 250, 186, 0.47);
    text-align: center;
    margin: 0;
`;