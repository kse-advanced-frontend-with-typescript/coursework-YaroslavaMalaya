import React, { useState, useCallback, useMemo } from 'react';
import {
    Arrow,
    ArrowsDotsWrapper,
    Dot,
    DotsContainer,
    Slide,
    SlideImage,
    SliderContainer,
    SliderWrapper,
    SlidesTrack,
    ArrowIcon
} from './Slider.styles';

type SliderProps = {
    images: string[];
};

export const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3;
    const slideWidth = 123 + 5;
    const maxIndex = images.length - visibleCount;

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    const slides = useMemo(() =>
        images.map((img, i) => (
            <Slide key={i}>
                <SlideImage src={img} alt={`Slide ${i + 1}`} />
            </Slide>
        )), [images]
    );

    const dots = useMemo(() =>
        Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Dot key={i} active={i === currentIndex} onClick={() => goToSlide(i)} />
        )), [currentIndex, maxIndex, goToSlide]
    );

    return (
        <SliderWrapper>
            <SliderContainer>
                <SlidesTrack translateX={-currentIndex * slideWidth}>
                    {slides}
                </SlidesTrack>
            </SliderContainer>

            <ArrowsDotsWrapper>
                <Arrow onClick={prevSlide}>
                    <ArrowIcon src="/pictures/icons/arrowR.svg" alt="Previous" />
                </Arrow>
                <DotsContainer>{dots}</DotsContainer>
                <Arrow onClick={nextSlide}>
                    <ArrowIcon src="/pictures/icons/arrowL.svg" alt="Next" />
                </Arrow>
            </ArrowsDotsWrapper>
        </SliderWrapper>
    );
};
