import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';
import './style/style.css';

function App() {
  return (
    <div className="container mt-3">
      <SearchBar />
      <WeatherList />{' '}
    </div>
  );
}

export default App;
