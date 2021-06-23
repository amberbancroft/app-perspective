// Importing
import React, { useState } from 'react';
import "./album.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAlbum, deleteSinglePhoto} from '../../store/album';
import { getAlbum } from '../../store/album';
// import { useParams, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

// ProfilePage component
function GettingDataToLoad({photoId}){
	return (
		<>
			<h2 className="header">Album Photos</h2>
			<div className="slider">
				{Object.values(photoId)?.map((albumPhotoArray,i) => {
					return (
						<div key={i} className='slides'>
							<Link to={`/photos/${albumPhotoArray.id}`}>
								<img id={`slides-${albumPhotoArray.id}`} src={albumPhotoArray.imgUrl} alt={`${albumPhotoArray.title}`} height="300px" width="400px"/>
							</Link>
						</div>
					)
				})}
			</div>
		</>
	)
} 

function AlbumPage(){
	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
    const { albumId } = useParams();
    // const userPhotosList = useSelector(state => state.photos);
	// const userAlbum = useSelector(state => state.albums);
	// const album = useSelector(state => state.albums);
	const photoId = useSelector(state => state.albums.photos);
	
    // const sessionUser = useSelector(state => state.session.user);
    // use what is defined with in the index.js in the store for reducer

	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();
	// const history = useHistory();
	
    // const photoClick = (e) => {
    //     e.preventDefault();
    //     history.push(`/albums/${albumId}/edit`);
    // }

    // // Helping function for delete
	// const deleteHelperFunction = (e) => {
	// 	e.preventDefault();
	// 	dispatch(deleteSinglePhoto(photo.id));
	// 	history.push(`/home`);
	// }

	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(getAlbum(albumId));
	}, [dispatch, albumId]);

	if(photoId !== undefined){
		return (
			<>
				<GettingDataToLoad photoId={photoId}/>
			</>
		);
	}
	else {
		return null
	}

};
  
// Exporting
export default AlbumPage;