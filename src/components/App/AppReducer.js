import { resolve, reject } from 'redux-simple-promise';

const initialState = {
  directors: [],
  movies: [],
  loading: {
    isLoading: false,
    success: false,
  }
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

