import {useState, useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com?apiKey=ff1f118e';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMoveis = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data  = await response.json();

        setMovies(data.Search);        
    }

    useEffect(() => {
        searchMoveis('flash');
    }, [])

    return (
        <div className="app">
            <h1>Search Movies</h1>
            <div className="search">
                <input  
                    placeholder='Search for moveis'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMoveis(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">                
                        {
                            movies.map((movie)  => (
                                <Movie movie={movie} />
                            ))
                        }
                    </div>
                ) : (
                    <div className = "empty">
                        <h2>No record</h2>
                    </div>
                )
            }

             
        </div>
    )
}

export default App;