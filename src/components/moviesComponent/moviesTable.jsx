import React, { Component } from 'react';
import Like from './like'

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn}
    if (sortColumn.path === path) {
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    }
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  
  render() { 
    const { movies, onLike, onDelete  } = this.props
    return ( 
      <table className="table m-2">
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")} style={{cursor: "pointer"}} scope="col">Title</th>
              <th onClick={() => this.raiseSort("genre.name")} scope="col" style={{cursor: "pointer"}} >Genre</th>
              <th onClick={() => this.raiseSort("numberInStock")} scope="col" style={{cursor: "pointer"}} >Stock</th>
              <th onClick={() => this.raiseSort("dailyRentalRate")} scope="col" style={{cursor: "pointer"}} >Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          {/* try this out */}
          <tbody>
            {movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like onLike={() => onLike(movie) } liked={movie.liked}/>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
     );
  }
}

export default MoviesTable;