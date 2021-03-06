// Importing
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbum, deleteAlbumz } from '../../store/album';
import { useParams, useHistory, Link } from 'react-router-dom';
import './album.css';


function GettingDataToLoad( { photoId } ){
	const { albumId } = useParams();
	// const userId = useSelector(state => state.session.user);

	const dispatch = useDispatch();
	const history = useHistory();
	
    const editClick = (e) => {
        e.preventDefault();
        history.push(`/albums/${albumId}/edit`);
    }

    // Helping function for delete
	const deleteHelperFunction = (e) => {
		e.preventDefault();
		dispatch(deleteAlbumz(albumId));
		history.push(`/home`);
	}

	return (
		<>
			<div>
				<h2 className='header'> Album Photos </h2>
				<button className='control-bar-button' onClick= { editClick }> Edit </button>
                <button className='control-bar-button' onClick= { deleteHelperFunction }> Delete </button>
			</div>

			<div className='slider'>
				{Object.values(photoId)?.map((albumPhotoArray,i) => {
					return (
						<div key={i} className='slides'>
							<Link to={`/photos/${albumPhotoArray.id}`}>
								<img 
									id={`slides-${albumPhotoArray.id}`} 
									src= { albumPhotoArray.imgUrl } 
									alt= { `${albumPhotoArray.title}` } 
									height="300px" width="400px"/>
							</Link>
						</div>
					)
				})}
			</div>
		</>
	)
} 

function AlbumPage(){
    const { albumId } = useParams();
	const photoId = useSelector(state => state.albums.photos);
	
	const dispatch = useDispatch();

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