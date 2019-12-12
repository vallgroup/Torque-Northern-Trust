import { API_REQUEST } from "../actions/api";

const API_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:8000/wp-json";

export const api = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    const { method, url, payload, onSuccess, onError } = action.meta;

    fetch(API_URL + url, { method })
      .then(results => results.json())
      .then(response => {
        onSuccess(response);
      })
      .catch(error => onError(error));
  }
};
