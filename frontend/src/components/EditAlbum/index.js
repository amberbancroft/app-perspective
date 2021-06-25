// Importing
import React, { useState } from 'react';
import "./EditAlbum.css"
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumForEdit, deleteAlbumz} from '../../store/album';
import { useHistory, useParams } from "react-router-dom";

function EditAlbum(){

    // gets that one only for ids
    const { albumId } = useParams();
    const album = useSelector(state => state.albums.singleAlbum);

    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Cant use useEffect for an update
	const UpdateHelperFunction = (e) => {
		e.preventDefault();
		dispatch(getAlbumForEdit({title, description, albumId}));
		history.push(`/home`);
	}

	// Helping function for delete
	const deleteHelperFunction = (e) => {
		e.preventDefault();
		dispatch(deleteAlbumz(album.id));
		history.push(`/home`);
	}

    return (
        <>
        <div className='control-bar'>
			<form onSubmit={UpdateHelperFunction}>
            <h2 id='header'>{album?.title}</h2>
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
                <label>
                    New Description
                <div id="title-photo" className="loginInput">
            <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                </label>
			</form>
        </div>
        <div className='img-container-2'>
            {/* <img className="solo-photo" src={album?.imgUrl} alt={`${album?.title}`}/> */}
        </div>
		</>
    )
}

// Exporting
export default EditAlbum;