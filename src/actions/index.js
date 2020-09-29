import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const response = axios.get(url); // Promise

  console.log('promise response=', response);
  return {
    type: FETCH_WEATHER,
    payload: response, // if Promise, stop the action entirely; if promise resolved, dispatch action as the same type, with the payload equal to resolved
  };
};

/*
ReduxPromise returns a promise as the payload when an action is dispatched, and then the ReduxPromise middleware works to resolve that promise and pass the result to the reducer.

ReduxThunk, on the other hand, forces the action creator to hold off on actually dispatching the action object to the reducers until dispatch is called.
*/
