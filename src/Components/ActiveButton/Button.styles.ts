import styled from '@emotion/styled';

type StyledButtonProps = {
    primary: boolean;
};

export const ButtonContainer = styled.button<StyledButtonProps>`
    padding: 5px 27px;
    border-radius: 43px;
    border: 2px solid;
    cursor: pointer;
    background-color: ${({ primary }) => (primary ? 'rgba(42, 46, 42, 0.22)' : 'rgba(22, 22, 22)')};
    border-color: ${({ primary }) => (primary ? 'rgba(21, 255, 0)' : 'rgba(219, 255, 215)')};
    color: ${({ primary }) => (primary ? 'rgba(21, 255, 0)' : 'rgba(219, 255, 215)')};
    
    &:hover {
        opacity: 0.9;
    }
`;

export const ButtonText =  styled.p`
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
`;