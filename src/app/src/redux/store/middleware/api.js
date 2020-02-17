import { API_REQUEST } from "../actions/api";

const domain = `http://northerntrust.torquelaunchdev.com/wp-json`
// const domain = `http://localhost:8000/wp-json`

const API_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : domain;

export const api = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;

    fetch(API_URL + url, { method })
      .then(results => results.json())
      .then(response => {
        onSuccess(response);
      })
      .catch(error => onError(error));
  }
};
