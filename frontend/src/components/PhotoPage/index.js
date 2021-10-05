// Importing
import React from 'react';
import './PhotoPage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto, deleteSinglePhoto} from '../../store/photo';
import { useParams, useHistory } from 'react-router-dom';


function PhotoPage(){
	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
    const { photoId } = useParams();
	const photo = useSelector(state => state.photos[photoId]);
    // const sessionUser = useSelector(state => state.session.user);
    // use what is defined with in the index.js in the store for reducer

	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();
	const history = useHistory();
	
    const photoClick = (e) => {
        e.preventDefault();
        // dispatch(sessionActions.logout());
        history.push(`/photos/${photoId}/edit`);
    }

    // Helping function for delete
	const deleteHelperFunction = (e) => {
		e.preventDefault();
		dispatch(deleteSinglePhoto(photo.id));
		history.push(`/home`);
	}

	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(getPhoto(photoId));
	}, [dispatch, photoId]);


	return (
		<>
			<div className='img-container-2'>
				<img className='solo-photo' src= { photo?.imgUrl } alt= { `${photo?.title}` }/>
			</div>
			
			<div className='edit--photo--container'>
				<h2 className='edit--container'> { photo?.title } </h2>

				<button className='control-bar-button' onClick= { photoClick } > Edit </button>
				<button className='control-bar-button' onClick= { deleteHelperFunction }> Delete </button>
			</div>
		</>
	);
};
  
export default PhotoPage;