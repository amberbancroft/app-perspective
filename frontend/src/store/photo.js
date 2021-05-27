// Imports
import { csrfFetch } from "./csrf";

// variable declaration
const LOAD = 'photos/LOAD';
const PROFILE = 'photos/PROFILE';
const LOADING = 'photo/LOADING';

// actions
export const load = photos => ({
        type: LOAD,
        photos,
});

export const profile = userPhotos => ({
  type: PROFILE,
  userPhotos,
});

export const loadSinglePhoto = photo => ({
  type: LOADING,
  photo,
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
    // console.log("user photo list here", userPhotos);
    dispatch(profile(userPhotos));
  }
};

export const getPhoto = (photoId) => async dispatch => {
  const response = await csrfFetch(`/api/photos/${photoId}`);

  if (response.ok) {
    const photoData = await response.json();
    console.log("single photo", photoData);
    dispatch(loadSinglePhoto(photoData));
  }
};


// Reducer- updates the current state
export default function photoReducer(state = {}, action){
    switch (action.type) {
      case LOAD: {
            const allPhotos = {...state};
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

      case LOADING: {
        const singlePhoto = {...state};
        singlePhoto[action.photo.id] = action.photo;
        return singlePhoto
      }

        default:
          return state;
    } 
};