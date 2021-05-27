// Importing
import React from 'react';
import "./HomePage.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photo';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// Home component 
function Home(){

	// Call the reducer to get the most current state
	// connects the backend to the front end
	// importing the reducer
	const photosList = useSelector(state => state.photos);
	// const firstPhoto = photosList[1].imgUrl;
	// console.log(photosList[1].imgUrl);
	
	
	// call built in hooks to redirect and sends the updates
	const dispatch = useDispatch();
	// const history = useHistory();
	
	// is basically an event listener that waits for the page to load
	// call for the updated information using dispatch
	useEffect(() => {
		dispatch(getPhotos());
	}, [dispatch]);


	return (
		<>
		<h2 className="header">Dare To Explore</h2>
		<div className="img-list-container">
			{Object.values(photosList).map(photo => {
				return (
					<div className='img-container'>
						<Link to={`photos/${photo.id}`}>
							<img className="individual-photo" src={photo.imgUrl} alt={`${photo.title}`} height="300px" width="400px"/>
						</Link>
						<p className="titles">{photo.title}</p>
					</div>
				)
			})}
		</div>
		</>
	);
};
  
// Exporting
export default Home;