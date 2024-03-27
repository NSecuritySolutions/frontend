import { useState, useEffect, useRef } from 'react';
import colors from 'src/shared/constants/colors';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TEXT_LIMIT,
  TITLE_LIMIT,
  workExamples
} from 'src/shared/constants/texts/examples.ts';
import {
  SliderContainer,
  CardWrapper,
  CustomDot,
  ColumnTitle,
  ButtonWrapper,
  ExamplesContainer,
  ExamplesTitle,
  ExamplesText,
  ExamplesButton,
  ExamplesImg,
  IconWrapper,
  ExamplesLink
} from './styled.ts';
import { BtnLink } from 'src/shared/components/BtnLink/index.ts';
import { TWorkExamples } from 'src/shared/constants/texts/types.ts';

const ExamplesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');

  const ref = useRef();

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};

    console.log(clientWidth);

    if (clientWidth >= 1280) {
      setWidth('200px');
      setHeight('200px');
    }

    if (clientWidth > 619 && clientWidth < 1280) {
      setWidth('390px');
      setHeight('271px');
    }

    if (clientWidth < 619) {
      setWidth('240px');
      setHeight('219px');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const handleAfterChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const settings = {
    className: 'reviews-slider',
    dots: true,
    infinite: false,
    speed: 100,
    arrows: false,
    rows: 2,
    slidesPerRow: 2,

    appendDots: (dots: boolean) => <div>{dots}</div>,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          rows: 1,
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 619,
        settings: {
          rows: 1,
          slidesPerRow: 1
        }
      }
    ],
    customPaging: function (i: number) {
      let activePage = 0;
      if (window.innerWidth >= 1280) {
        activePage = Math.ceil(currentSlide / 2);
      }

      return <CustomDot $active={i === activePage} />;
    }
  };

  function truncate(str: string, maxlength: number) {
    if (str.length > maxlength) {
      return str.substring(0, maxlength - 3) + '...';
    } else {
      return str;
    }
  }

  return (
    <SliderContainer ref={ref} className="slider-container">
      <ColumnTitle>Примеры наших работ</ColumnTitle>
      <Slider {...settings} afterChange={handleAfterChange}>
        {workExamples
          .sort(
            (newDate: TWorkExamples, olderDate: TWorkExamples) =>
              new Date(olderDate.date as string).getTime() -
              new Date(newDate.date as string).getTime()
          )
          .map((item: TWorkExamples, i) => (
            <CardWrapper key={item.id}>
              {item.cardImage ? (
                <ExamplesLink href={item?.cardLink}>
                  <ExamplesImg src={item?.cardImage}></ExamplesImg>
                </ExamplesLink>
              ) : (
                <div
                  style={{
                    width: width,
                    minHeight: window.innerWidth > 1280 ? '200px' : height,
                    backgroundColor: '#fff',
                    borderRadius: '20px'
                  }}></div>
              )}
              <ExamplesContainer className="slick-slide" key={i}>
                <ExamplesTitle>
                  {truncate(item.cardTitle, TITLE_LIMIT)}
                </ExamplesTitle>

                <ExamplesText>
                  {truncate(item.cardText, TEXT_LIMIT)}
                </ExamplesText>
                <ButtonWrapper>
                  <ExamplesButton>Подробнее</ExamplesButton>

                  <IconWrapper>
                    {item.cardIcons?.map((item, i) => (
                      <img
                        key={i}
                        src={item.link}
                        alt={item.alt}
                        aria-label={item.alt}
                        title={item.alt}></img>
                    ))}
                  </IconWrapper>
                </ButtonWrapper>
              </ExamplesContainer>
            </CardWrapper>
          ))}
      </Slider>
      <ButtonWrapper>
        <BtnLink
          size="15px"
          width="1170px"
          height="44px"
          color={colors.darkPrimary}
          text="Смотреть все примеры работ"
          link="#"></BtnLink>
      </ButtonWrapper>
    </SliderContainer>
  );
};

export default ExamplesSlider;
