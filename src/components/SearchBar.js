import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actions';

// controlled component -- has state
const SearchBar = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault(); // don't submit the form

    console.log(term);

    // We need to go and fetch weather data
    // https://openweathermap.org/forecast5

    dispatch(fetchWeather(term));

    // clean up the form
    setTerm('');
  };

  return (
    <form onSubmit={onFormSubmit} className="input-group">
      <input
        type="text"
        placeholder="Get a five-date forecast in your favorite cities"
        className="form-control"
        value={term}
        onChange={onInputChange}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
};

export default SearchBar;
