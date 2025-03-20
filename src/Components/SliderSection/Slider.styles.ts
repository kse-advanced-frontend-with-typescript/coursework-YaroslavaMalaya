import styled from '@emotion/styled';

export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 7px;
    margin: 0;
`;

export const SliderContainer = styled.div`
    overflow: hidden;
    width: 100%;
    max-width: 380px; 
    padding-bottom: 14px;
`;

export const SlidesTrack = styled.div<{ translateX: number }>`
    display: flex;
    transition: transform 0.5s ease;
    transform: translateX(${({ translateX }) => translateX}px);
    gap: 5px;
`;

export const Slide = styled.div`
    flex-shrink: 0;
    width: 123px;
    height: 165px;
    border-radius: 11px;
    box-shadow: 0 7px 9.2px rgba(0, 0, 0, 0.43);
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const ArrowsDotsWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 14px;
`;

export const Arrow = styled.button`
    background: transparent;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export const ArrowIcon = styled.img`
    width: 18px;
    height: 18px;
`;

export const DotsContainer = styled.div`
    display: flex;
    gap: 7px;
`;

export const Dot = styled.div<{ active: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#15FF00' : '#2A2E2A')};
    cursor: pointer;
    transition: background-color 0.3s ease;
`;
