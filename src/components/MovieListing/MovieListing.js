import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import Slider from 'react-slick'
import { Settings } from '../../common/settings'

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderShows = ''
    let renderMovies = ''

    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    )

    renderShows = shows.Response === 'True' ? (
        shows.Search.map((series, index) => {
            return <MovieCard key={index} data={series} />
        })
    ) : (
        <div className="movies-error">
            <h3>{shows.Error}</h3>
        </div>
    )

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing