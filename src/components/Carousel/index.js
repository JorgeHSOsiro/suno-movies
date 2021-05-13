import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { fetchUpcoming } from '../../services/moviesApi';

import styles from './carousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardCarousel } from '../CardCarousel';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsChevronRight
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '35px',
        height: '40px',
        color: 'white',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsChevronLeft
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '35px',
        height: '40px',
        color: 'white',
      }}
      onClick={onClick}
    />
  );
}

export function Carousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUpcoming()
      .then((result) => result.json())
      .then((data) => {
        console.log(data.results)
        setMovies(data.results);
      });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <CardCarousel
            id={movie.id}
            thumb={movie.poster_path}
            title={movie.title}
            category={movie.genre_ids}
            rate={movie.vote_average}
          />
        ))}
      </Slider>
    </div>
  );
}
