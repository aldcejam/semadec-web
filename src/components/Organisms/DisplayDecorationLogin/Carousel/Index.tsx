import { StyledCarousel } from "./Styled"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { DateIllustration } from '../../../../../public/carousel-illustrations/DateIllustration';

const Carousel = () => {
    return (
        <StyledCarousel>
            <Splide
                options={{
                    rewind: false,
                    arrows: false,
                    gap: '1rem',
                    height: '350px',
                }}>
                <SplideSlide className='item-slide'>
                    <DateIllustration />
                </SplideSlide>
                <SplideSlide className='item-slide'>
                    <DateIllustration />
                </SplideSlide>
                <SplideSlide className='item-slide'>
                    <DateIllustration />
                </SplideSlide>
            </Splide>
        </StyledCarousel>
    )
}

export default Carousel