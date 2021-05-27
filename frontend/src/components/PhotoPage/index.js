// Importing
import React from 'react';
import "./PhotoPage.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/photo';
import { useParams } from "react-router-dom";

// ProfilePage component 
function PhotoPage(){
	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
    const { photoId } = useParams();
	const photo = useSelector(state => state.photos[photoId]);
    // use what is defined with in the index.js in the store for reducer

    // const photoClick = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    //     history.push(`/photos/${photoId}`);
    // }
   
	
	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();
	// const history = useHistory();
	
	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(getPhoto(photoId));
	}, [dispatch, photoId]);


	return (
		<>
        <div className='control-bar'>
            <h2 id='header'>{photo?.title}</h2>
            <div className='button-container'>
                <button className="control-bar-button"> Edit </button>
                <button className="control-bar-button"> Delete </button>
            </div>
        </div>
        <div className='img-container-2'>
            <img className="solo-photo" src={photo?.imgUrl} alt={`${photo?.title}`}/>
        </div>
		</>
	);
};
  
// Exporting
export default PhotoPage;