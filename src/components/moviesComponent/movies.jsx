import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import MoviesTable from './moviesTable'
import Genre from './genre'
import Paignation from './paignation'
import { paginate } from '../../utils/paiganate'


class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortColumn: { path: "title", order: "asc"},
    currentPage: 1,
    itemsPerPage: 4
  };

  componentDidMount() {
    const genres = [{name: 'All Genres' }, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres,
    });

  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
      movies
    });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({
     movies
    }); 
  };

  handlePageChange = page => {
    this.setState ({
      currentPage: page
    });

  };

  handleSelectedGenre = genre => {
    this.setState ({
      selectedItem: genre,
      currentPage: 1
    });

  };

  handleSort = (sortColumn) => {
    this.setState ({
      sortColumn
    });
    
  };

  render() {
    const { currentPage, itemsPerPage, movies: allMovies, genres, selectedItem, sortColumn} = this.state;
    const { length: count } = this.state.movies;
    // filter movie genres
    const filtered = selectedItem && selectedItem._id ? allMovies.filter(m => m.genre._id === selectedItem._id) : allMovies;
    // sort movies
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
    // paginate movies
    const movies = paginate(sorted, currentPage, itemsPerPage)

    if (count === 0) return <p>There are {filtered.length} movies in the database </p>;
    return (
      <Fragment>
        <p className="m-5" style={{textAlign:'center'}}> Showing {filtered.length} movies in the database</p>
        <div style={{ clear: 'both'}}>
          <div className="col-sm-4 col-md-3 sidebar" style={{float: 'left',  width: '25%'}}>
        <Genre items={genres} onGetGenre={this.handleSelectedGenre} selectedItem={selectedItem}/>
        </div>
        <div style={{float: 'right',  width: '70%'}}>
        < MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort} sortColumn={sortColumn}/>
        <Paignation itemsCount={filtered.length} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={this.handlePageChange}/>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default Movies;
