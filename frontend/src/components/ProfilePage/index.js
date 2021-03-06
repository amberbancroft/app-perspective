// Importing
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../store/photo';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserAlbums } from '../../store/album';
import './ProfilePage.css';


function ProfilePage() {
	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
	const userPhotosList = useSelector(state => state.photos);
	const userAlbumsList = useSelector(state => state.albums);

	const { userId } = useParams();

	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();

	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(getUserPhotos(userId));
		dispatch(getUserAlbums(userId));
	}, [dispatch, userId]);


	return (
		<>
			{/* <h2 className="header">{`${userId}`}</h2> */}
			<h2 className='header'> Photos </h2>

			<div className='slider'>
				{Object.values(userPhotosList)?.map((photo, i) => {
					return (
						<div key= { i } className='slides'>
							<Link to={`/photos/${photo.id}`}>
								<img 
									id={`slides-${photo.id}`} 
									src={photo.imgUrl} 
									alt={`${photo.title}`} 
									height='300px' width='400px' 
								/>
							</Link>
							{/* <p className="titles">{photo.title}</p> */}
						</div>
					)
				})}
			</div>

			<h2 className='header'>Albums</h2>

			<div className='slider'>
				{Object.values(userAlbumsList)?.map((album, i) => {
					return (
						<div key= { i } className='slides'>
							<Link to={`/albums/${album.id}`}>
								<img 
									id={`slides-${album.id}`} 
									src={Object.values((album.Photos))[0].imgUrl} 
									alt={`${album.title}`} 
									height='300px' width='400px' 
								/>
							</Link>
							{/* <p className="titles">{album.title}</p> */}
						</div>
					)
				})}
			</div>
		</>
	);
};

export default ProfilePage;