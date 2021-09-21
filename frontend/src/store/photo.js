// Imports
import { csrfFetch } from "./csrf";

// variable declaration
const LOAD = 'photos/LOAD';
const PROFILE = 'photos/PROFILE';
const LOADING = 'photo/LOADING';
const EDITING = 'photo/EDITING';
const DELETING = 'photo/DELETING';
const ADDING = 'photo/ADDING';

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

export const loadSinglePhotoForEdit = photo => ({
  type: EDITING,
  photo,
});

export const deletePhoto = photo => ({
  type: DELETING,
  photo,
});

export const addPhoto = photo => ({
  type: ADDING,
  photo,
});

// Thunks
export const getPhotos = () => async dispatch => {
    const response = await csrfFetch(`/api/home`);
  
    if (response.ok) {
      const photos = await response.json();
      dispatch(load(photos));
    }
};

export const getUserPhotos = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}`);

  if (response.ok) {
    const userPhotos = await response.json();
    dispatch(profile(userPhotos));
  }
};

export const getPhoto = (photoId) => async dispatch => {
  const response = await csrfFetch(`/api/photos/${photoId}`);

  if (response.ok) {
    const photoData = await response.json();
    dispatch(loadSinglePhoto(photoData));
  }
};

export const getPhotoForEdit = (photo) => async dispatch => {
  const response = await csrfFetch(`/api/photos/${photo.photoId}/edit`, {
    method: "PUT",
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(photo)
  });

    if (response.ok) {
      const title = await response.json();
      dispatch(loadSinglePhotoForEdit(title));
    }
};

export const deleteSinglePhoto = (photoId) => async dispatch => {
  const response = await csrfFetch(`/api/photos/${photoId}/delete`, {
    method: "DELETE"
  });

  if (response.ok) {
    dispatch(deletePhoto(photoId));
  }
};

export const addSinglePhoto = (newPhoto) => async dispatch => {
  const { userId, title, imgUrl } = newPhoto;
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("title", title);
  formData.append("imgUrl", imgUrl);

  const res = await csrfFetch(`/api/photos/new`, {
    method: 'POST',
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  });

  const photo = await res.json();
  dispatch(addPhoto(photo));
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

      case EDITING: {
        const title = {...state};
        title[action.photo.id] = action.photo;
        return title
      }

      case DELETING: {
        const photo = {...state};
        delete photo[action.photo]
        // photo[action.photo.id] = action.photo;
        // this returns the previous state before the photo was deleted
        return photo
      }

      case ADDING: {
        const singlePhoto = {...state};
        singlePhoto[action.photo.id] = action.photo;
        return singlePhoto
      }

      default:
        return state;
    } 
};