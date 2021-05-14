import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { fetchUpcoming } from '../../services/moviesApi';

import './carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardCarousel } from '../CardCarousel';
import moviesContext from '../../context/moviesContext';

function SampleNextArrow(props) {
  const { size } = useContext(moviesContext);
  const { className, style, onClick } = props;
  return (
    <div>
      {size <= 360 ? (
        <BsChevronRight
          className={className}
          style={{
            ...style,
            display: 'block',
            width: '35px',
            height: '40px',
            color: 'white',
            right: '10px',
          }}
          onClick={onClick}
        />
      ) : (
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
      )}
    </div>
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
  const { size } = useContext(moviesContext);

  useEffect(() => {
    fetchUpcoming()
      .then((result) => result.json())
      .then((data) => {
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

  const settingsMobile = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {size <= 360 ? (
        <Slider {...settingsMobile}>
          {movies.map((movie) => (
            <CardCarousel
              key={movie.id}
              id={movie.id}
              thumb={movie.poster_path}
              title={movie.title}
              category={movie.genre_ids}
              rate={movie.vote_average}
            />
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>
          {movies.map((movie) => (
            <CardCarousel
              key={movie.id}
              id={movie.id}
              thumb={movie.poster_path}
              title={movie.title}
              category={movie.genre_ids}
              rate={movie.vote_average}
            />
          ))}
        </Slider>
      )}
    </>
  );
}
