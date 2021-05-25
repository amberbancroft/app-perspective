import { csrfFetch } from "./csrf";

// variable declaration
const LOAD = 'photos/LOAD';

// action
export const load = photos => ({
        type: LOAD,
        photos,
});

// Thunk
export const getPhotos = () => async dispatch => {
    const response = await csrfFetch(`/api/home`);
  
    if (response.ok) {
      const photos = await response.json();
    //   console.log("list here", photos);
      dispatch(load(photos));
    }
};
const initialState = {};
// Reducer- updates the current state
export default function photoReducer(state = initialState, action){
    switch (action.type) {
      case LOAD: {
            const allPhotos = {};
            action.photos.photoArray.forEach(photo => {
                allPhotos[photo.id] = photo;
            });
            return allPhotos
                // ...state,
            // };
        }
        default:
            return state;
    } 
};