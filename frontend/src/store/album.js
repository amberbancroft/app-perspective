// Imports
import { csrfFetch } from "./csrf";

// variable declaration
const PROFILE = 'albums/PROFILE';
const LOADING = 'albums/LOADING';
const EDITING = 'albums/EDITING';
const DELETING = 'albums/DELETING';
const ADDING = 'albums/ADDING';

// actions
export const profile = userAlbums => ({
    type: PROFILE,
    userAlbums,
});

export const loadSingleAlbum = album => ({
    type: LOADING,
    album,
});

export const loadSingleAlbumForEdit = album => ({
  type: EDITING,
  album,
});

export const deleteAlbum = album => ({
  type: DELETING,
  album,
});

export const createAlbum = album => ({
  type: ADDING,
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
    //   console.log("single album", albumData);
      dispatch(loadSingleAlbum(albumData));
    }
};

export const getAlbumForEdit = (album) => async dispatch => {
  const response = await csrfFetch(`/api/albums/${album.albumId}/edit`, {
    method: "PUT",
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(album)
  });

    if (response.ok) {
      const title = await response.json();
      const description = await response.json();
      dispatch(loadSingleAlbumForEdit(title, description));
    }
};

export const deleteAlbumz = (albumId) => async dispatch => {
  const response = await csrfFetch(`/api/albums/${albumId}/delete`, {
    method: "DELETE"
  });

  if (response.ok) {
    dispatch(deleteAlbum(albumId));
  }
};

export const createNewAlbum = (newAlbum) => async dispatch => {

  const res = await csrfFetch(`/api/albums/new`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAlbum),
  });

  if (res.ok) {
  const album = await res.json();
  dispatch(createAlbum(album));
  }
};

// Reducer- updates the current state
export default function albumReducer(state = {}, action){
    switch (action.type) {
        case PROFILE: {
            const allUserAlbums = {...state};
            // Normalizing object here
            action.userAlbums.forEach(album => {
                allUserAlbums[album.id] = album;
            });
            return allUserAlbums
        }

        case LOADING: {
          return {...state, ...action.album}
            // const singleAlbum = {...state};
            // singleAlbum[action.album.id] = action.album;
            // return singleAlbum
        }

        case EDITING: {
          return {...state, ...action.album};
          // title[action.photo.id] = action.photo;
          // return title
        }

        case DELETING: {
          const album = {...state};
          delete album[action.album]
          // photo[action.photo.id] = action.photo;
          // this returns the previous state before the photo was deleted
          return album
        }

        case ADDING: {
          return {...state, ...action.album};
          // const singlePhoto = {...state};
          // singlePhoto[action.photo.id] = action.photo;
          // return singlePhoto
        }

        default:
            return state;
        } 
};