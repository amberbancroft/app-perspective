// Importing
import React, { useState } from 'react';
import { createNewAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './newAlbum.css';

function NewAlbum() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createNewAlbum({ userId: user.id, title, description }))
    history.push('/home');
  };

  //   const updateFile = (e) => {
  //     const file = e.target.files[0];
  //     if (file) setImgUrl(file);
  //   };

  return (
    <div className='form-container'>

      <form className='form' onSubmit={handleSubmit} >

        <i className='fas fa-camera-retro' id='cameraImage2' />
        <h2 id='welcome'> Express Yourself </h2>

        <div>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <input
            type='description'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          {/* <input type="file"  placeholder="Image URL" onChange={updateFile} /> */}
        </div>

        <button type='submit'> Post Album </button>

      </form>

    </div>
  );
};

export default NewAlbum;