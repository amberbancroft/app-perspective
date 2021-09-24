// Importing
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumForEdit, deleteAlbumz } from '../../store/album';
import { useHistory, useParams } from 'react-router-dom';
import './EditAlbum.css';

function EditAlbum() {

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
        dispatch(getAlbumForEdit({ title, description, albumId }));
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

                <form onSubmit= { UpdateHelperFunction } >

                    <h2 id='header'> { album?.title } </h2>

                    <div className='button-container'>
                        <button className='control-bar-button' type='submit'> Save </button>
                        <button className='control-bar-button' onClick= { deleteHelperFunction }> Delete </button>
                    </div>

                    <div className='loginInput'>
                        <input
                            type='text'
                            placeholder='New Title'
                            value= { title }
                            onChange= { (e) => setTitle(e.target.value) }
                            required
                        />
                    </div>

                    <div className='loginInput'>
                        <input
                            type='text'
                            placeholder='New Description'
                            value= { description }
                            onChange= { (e) => setDescription(e.target.value) }
                            required
                        />
                    </div>

                </form>

            </div>

            {/* <div className='img-container-2'> */}
                {/* <img className="solo-photo" src={album?.imgUrl} alt={`${album?.title}`}/> */}
            {/* </div> */}
        </>
    )
}

export default EditAlbum;