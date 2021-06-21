// Imports
import { csrfFetch } from "./csrf";

// variable declaration
const PROFILE = 'albums/PROFILE';
const LOADING = 'albums/LOADING';

// actions
export const profile = userAlbums => ({
    type: PROFILE,
    userAlbums,
});

export const loadSingleAlbum = album => ({
    type: LOADING,
    album,
});

// Thunks
export const getUserAlbums = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/albums/user/${userId}`);
  
    if (response.ok) {
      const userAlbums = await response.json();
    //   console.log("user album list here", userAlbums);
      dispatch(profile(userAlbums));
    }
};

export const getAlbum = (albumId) => async dispatch => {
    const response = await csrfFetch(`/api/albums/${albumId}`);
  
    if (response.ok) {
      const albumData = await response.json();
      // console.log("single photo", photoData);
      dispatch(loadSingleAlbum(albumData));
    }
  };

// Reducer- updates the current state
export default function albumReducer(state = {}, action){
    switch (action.type) {
        case PROFILE: {
            const allUserAlbums = {...state};
            action.userAlbums.forEach(album => {
                allUserAlbums[album.id] = album;
            });
            return allUserAlbums
        }

        case LOADING: {
            const singleAlbum = {...state};
            singleAlbum[action.album.id] = action.album;
            return singleAlbum
        }

        default:
            return state;
        } 
};