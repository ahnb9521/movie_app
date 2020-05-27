import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
    state = { //object
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies: movies, isLoading: false})
    }

    componentDidMount() { //render할 때 제일 먼저 호출 (Life Cycle)
        this.getMovies();
    };

    render() { //리액트는 자동으로 class component의 render method를 실행한다.
        const {isLoading, movies} = this.state;
        return (
            <section className="container">{
                    isLoading
                        ? <div className="loader">
                              <span className="loader__text">Loading...</span>
                          </div>
                        : <div className="movie__div">
                             {movies.map(movie => (
                               <Movie
                                  key={movie.id}
                                  id={movie.id}
                                  year={movie.year}
                                  title={movie.title}
                                  summary={movie.summary}
                                  poster={movie.medium_cover_image}
                                  genres={movie.genres}
                               />
                             ))}
                          </div>
                        
                }</section>
        );
    }
}

export default App;
