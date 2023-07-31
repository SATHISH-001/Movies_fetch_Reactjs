import { useEffect, useState } from 'react';
import './App.css';
import { MovieImage, MoviePlot, MovieTitle, MovieContainer, MovieListContainer, SearchInput, SearchInputContainer, SearchIcon } from './Style';

const API_URL = `http://www.omdbapi.com/?apikey=f9467ffc&i=`;

const MOVIE_IDS = [
  'tt3896198',
  'tt1285016',
  'tt4154756',
  'tt0133093',
  'tt0468569',
  'tt0816692',
  'tt0080684',
  'tt0167260',
  'tt0110912',
  'tt0167261',
  'tt0109830',
  'tt0111161',
  'tt0068646',
  'tt0071562',
  'tt1345836',
  'tt0088763',
  'tt0082971',
  'tt0120338',
  'tt0361748'
];

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const movieDataArray = await Promise.all(
        MOVIE_IDS.map(id => fetch(`${API_URL}${id}`).then(response => response.json()))
      );
      setMovies(movieDataArray);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Filter movies based on searchQuery
    const filtered = movies.filter(movie => movie.Title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  return (
    <div>
      <SearchInputContainer>
        <SearchIcon className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchInputContainer>
      <MovieListContainer>
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movieData => (
            <MovieContainer key={movieData.imdbID} title={movieData.Title}>
              <MovieTitle>{movieData.Title}</MovieTitle>
              <MoviePlot>{movieData.Plot}</MoviePlot>
              <MovieImage src={movieData.Poster} alt={movieData.Title} />
              <p>Year: {movieData.Year}</p>
              <p>Rated: {movieData.Rated}</p>
            </MovieContainer>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </MovieListContainer>
    </div>
  );
}

export default App;
