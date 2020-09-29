import { configureStore } from '@reduxjs/toolkit';
import WeatherReducer from '../reducers/reducer_weather';
import ReduxPromise from 'redux-promise';

export default configureStore({
  reducer: {
    weather: WeatherReducer,
  },
  middleware: [ReduxPromise],
});
