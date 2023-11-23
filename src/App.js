import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = () => {
        const response = [
            {
              "Title": "The Shawshank Redemption",
              "Year": 1994,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
            },
            {
              "Title": "The Godfather",
              "Year": 1972,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
            },
            {
              "Title": "The Dark Knight",
              "Year": 2008,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
            },
            {
              "Title": "Pulp Fiction",
              "Year": 1994,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
            },
            {
              "Title": "Schindler's List",
              "Year": 1993,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
            },
            {
              "Title": "Forrest Gump",
              "Year": 1994,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
            },
            {
              "Title": "Inception",
              "Year": 2010,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
            },
            {
              "Title": "The Matrix",
              "Year": 1999,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
            },
            {
              "Title": "The Lord of the Rings: The Fellowship of the Ring",
              "Year": 2001,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg"
            },
            {
              "Title": "Fight Club",
              "Year": 1999,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
            },
            {
              "Title": "Game of Thrones",
              "Year": 2011,
              "Type": "Drama",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg"
            },
            {
              "Title": "Breaking Bad",
              "Year": 2008,
              "Type": "Drama",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg"
            },
            {
              "Title": "Stranger Things",
              "Year": 2016,
              "Type": "Drama",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
            },
            {
              "Title": "The Crown",
              "Year": 2016,
              "Type": "Drama",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1M876KPjulVwppEpldhdc8V4o68.jpg"
            },
            {
              "Title": "Black Mirror",
              "Year": 2011,
              "Type": "Drama",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg"
            },
            {
              "Title": "The Witcher",
              "Year": 2019,
              "Type": "Drama",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg"
            },
            {
              "Title": "The Avengers",
              "Year": 2012,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"
            },
            {
              "Title": "Avatar",
              "Year": 2009,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
            },
            {
              "Title": "Titanic",
              "Year": 1997,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
            },
            {
              "Title": "Jurassic Park",
              "Year": 1993,
              "Type": "Movie",
              "Poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg"
            }
          ];
        const data = response.filter(movie =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
          );
      

        setMovies(data);
    };

    useEffect(() => {
        searchMovies('');
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

            

        </div>
    );
}

export default App;