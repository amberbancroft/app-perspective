// Imports
import { csrfFetch } from "./csrf";

// variable declaration
const PROFILE = 'albums/PROFILE';

// actions
export const profile = userAlbums => ({
    type: PROFILE,
    userAlbums,
});

// Thunks
export const getUserAlbums = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}`);
  
    if (response.ok) {
      const userAlbums = await response.json();
      console.log("user album list here", userAlbums);
      dispatch(profile(userAlbums));
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

        default:
            return state;
        } 
};