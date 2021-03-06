import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AiFillStar } from 'react-icons/ai';
import { fetchMovie, fetchVideo } from '../../services/moviesApi';

import styles from './details.module.scss';
import { Link } from 'react-router-dom';
import moviesContext from '../../context/moviesContext';
import { Search } from '../../components/Search';
import { MobileOpts } from '../../components/MobileOpts';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

interface ParamTypes {
  id: string;
}

interface Genre {
  name: string;
}

interface Movie {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

interface Video {
  path: string;
  key: string;
}

export const Details = () => {
  const [movie, setMovie] = useState<Movie>();
  const [category, setCategory] = useState<Genre[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const { id } = useParams<ParamTypes>();
  const { searchActive, optActive } = useContext(moviesContext);
  
  useEffect(() => {
    fetchMovie(id)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setCategory(data.genres.map((item: any) => item.name).join(', '));
      });
    fetchVideo(id)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.results);
      });
  }, [id]);

  return (
    <div>
      {!optActive && <MobileOpts />}
      {!searchActive && <Search />}
      <div className={styles.detailsContainer}>
        <div className={styles.detailsHeader}>
          <div>
            <img
              className={styles.poster}
              src={IMG_API + movie?.poster_path}
              alt={movie?.title}
            />
          </div>
          <div className={styles.detailSecond}>
            <h1>{movie?.title}</h1>
            <div className={styles.subtitleContent}>
              <p>{category}</p>
              <div className={styles.rateContent}>
                <AiFillStar className={styles.star} />
                <p>{movie?.vote_average}</p>
              </div>
            </div>
            <h2>Sinopse</h2>
            <p>{movie?.overview}</p>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.trailerHead}>
            <h2>Trailer</h2>
          </div>
          <div className={styles.trailerContent}>
            {videos.map((video) => (
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                title={video.path}
              />
            ))}
          </div>
          <Link to="/" className={styles.btnContainer}>
            <button type="button">voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
