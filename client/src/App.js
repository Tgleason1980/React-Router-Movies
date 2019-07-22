import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Link } from 'react-router-dom';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Link to='/movies/{id}'> <Route exact path="/" component={MovieList} /></Link>
      <Route exact path="/movies/:id" component={Movie} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
