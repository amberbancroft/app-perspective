// Importing
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoForEdit, deleteSinglePhoto} from '../../store/photo';
import { useHistory, useParams } from 'react-router-dom';
import './editPhoto.css';


function EditPhoto(){

	// gets that one only for ids
    const { photoId } = useParams();
	const photo = useSelector(state => state.photos[photoId]);

	const dispatch = useDispatch();
	const history = useHistory();
    const [title, setTitle] = useState(photo.title);

	// Cant use useEffect for an update
	const UpdateHelperFunction = (e) => {
		e.preventDefault();
		dispatch(getPhotoForEdit({title, photoId}));

		// renders at the bottom of the home page change this!
		history.push(`/home`);
		// history.push(`/photo/${photoId}`);
	}

	// Helping function for delete
	const deleteHelperFunction = (e) => {
		e.preventDefault();
		dispatch(deleteSinglePhoto(photo.id));
		history.push(`/home`);
	}


	return (
		<>
			<div className='img-container-2'>
				<img className='solo-photo' src= { photo?.imgUrl } alt= { `${photo?.title}` }/>
			</div>

			<form  className='edit--photo--container' onSubmit= { UpdateHelperFunction } >
				<input
					type='text'
					className='edit--container'
					placeholder= {`photo?.title`}
					value= { title }
					onChange= { (e) => setTitle(e.target.value) }
					required
				/>

				<button className='control-bar-button' type='submit'> Save </button>
				<button className='control-bar-button' onClick= { deleteHelperFunction } > Delete </button>
			</form>
		</>
	);
};
  
export default EditPhoto;