// Imports
import { csrfFetch } from "./csrf";

// variable declaration
const LOAD = 'photos/LOAD';
const PROFILE = 'photos/PROFILE';

// actions
export const load = photos => ({
        type: LOAD,
        photos,
});

export const profile = userPhotos => ({
  type: PROFILE,
  userPhotos,
});

// Thunks
export const getPhotos = () => async dispatch => {
    const response = await csrfFetch(`/api/home`);
  
    if (response.ok) {
      const photos = await response.json();
      // console.log("list here", photos);
      dispatch(load(photos));
    }
};

export const getUserPhotos = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}`);

  if (response.ok) {
    const userPhotos = await response.json();
    console.log("user photo list here", userPhotos);
    dispatch(profile(userPhotos));
  }
};


// Reducer- updates the current state
export default function photoReducer(state = {}, action){
    switch (action.type) {
      case LOAD: {
            const allPhotos = {};
            action.photos.photoArray.forEach(photo => {
                allPhotos[photo.id] = photo;
            });
            return allPhotos
      }

      case PROFILE: {
        const allUserPhotos = {...state};
        action.userPhotos.forEach(photo => {
          allUserPhotos[photo.id] = photo;
        });
        return allUserPhotos
      }

        default:
            return state;
    } 
};