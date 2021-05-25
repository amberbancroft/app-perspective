const LOAD = 'photos/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const getPhotos = () => async dispatch => {
    const response = await fetch(`/api/home`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
            const allPhotos = {};
                action.list.forEach(photo => {
                    allPhotos[photo.id] = photo;
            });
            return {
                ...allPhotos,
                ...state,
                list: sortList(action.list),
            };
        }
        default:
        return state;
    } 
};