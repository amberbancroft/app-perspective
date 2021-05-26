// Importing
import React from 'react';
import "./ProfilePage.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../store/photo';
import { useParams } from "react-router-dom";

// ProfilePage component 
function ProfilePage(){
	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
	const userPhotosList = useSelector(state => state.photos);
	// const user = useSelector(state => state.session.user.id);
    const { userId } = useParams();
	
	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();
	// const history = useHistory();
	
	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(getUserPhotos(userId));
	}, [dispatch, userId]);


	return (
		<div className="img-list-container">
			{Object.values(userPhotosList)?.map(photo => {
				return (
					<div className='img-container'>
					    <img className="individual-photo" src={photo.imgUrl} alt={`${photo.title}`} height="300px" width="400px"/>
					    <p className="titles">{photo.title}</p>
					</div>
				)
			})}
		</div>
	);
};
  
// Exporting
export default ProfilePage;