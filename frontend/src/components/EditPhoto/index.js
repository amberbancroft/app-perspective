// Importing
import React, { useState } from 'react';
import "./editPhoto.css"
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoForEdit, deleteSinglePhoto} from '../../store/photo';
import { useHistory, useParams } from "react-router-dom";


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
		history.push(`/home`);
	}

	const deleteHelperFunction = (e) => {
		e.preventDefault();
		dispatch(deleteSinglePhoto({ photoId }));
		history.push(`/home`);
	}


	return (
		<>
        <div className='control-bar'>
			<form onSubmit={UpdateHelperFunction}>
            <h2 id='header'>{photo?.title}</h2>
            <div className='button-container'>
                <button type='submit' className="control-bar-button"> Save </button>
                <button className="control-bar-button" onClick={deleteHelperFunction}> Delete </button>
            </div>
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