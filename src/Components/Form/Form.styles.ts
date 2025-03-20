import styled from '@emotion/styled';

export const FormContainer = styled.div`
    width: 100%;
    max-width: 343px;
    padding: 24px;
    border: 2px solid #15ff00;
    border-radius: 11px;
    background-color: rgba(0, 0, 0, 0.43);
    display: flex;
    flex-direction: column;
    margin: 0;
`;

export const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-align: center;
    margin: 0;
`;

export const InputsWrapper =  styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0 25px 0;
    gap: 8px;
`;

export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: white;
    margin-top: 10px;
`;

export const Input = styled.input`
    padding: 12px 20px;
    border: none;
    border-radius: 18px;
    background-color: #EFFFEE;
    outline: none;
`;
