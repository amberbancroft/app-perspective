// Importing
import React from 'react';
import "./editPhoto.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSinglePhotoForEdit } from '../../store/photo';
import { useParams } from "react-router-dom";

// ProfilePage component 
function EditPhoto(){
	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
    const { photoId, title } = useParams();
	const photo = useSelector(state => state.photos[photoId]);
	// const title = useSelector(state => state.photos[title]);
    // use what is defined with in the index.js in the store for reducer

	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();
	// const history = useHistory();
	// const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState('');
	
	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(loadSinglePhotoForEdit(photoId));
	}, [dispatch, photoId]);

    
	return (
		<>
        <div className='control-bar'>
            <h2 id='header'>{photo?.title}</h2>
            <div className='button-container'>
                <button className="control-bar-button"> Save </button>
                <button className="control-bar-button"> Delete </button>
            </div>
			<form>
				<label>
                    New Title
                <div id="title-photo" className="loginInput">
            <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                </label>
			</form>
        </div>
        <div className='img-container-2'>
            <img className="solo-photo" src={photo?.imgUrl} alt={`${photo?.title}`}/>
        </div>
		</>
	);
};
  
// Exporting
export default EditPhoto;