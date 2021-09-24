// Importing
import React from 'react';
import './newPhoto.css';
import { useState } from 'react';
import { addSinglePhoto } from '../../store/photo';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

  function NewPhoto () {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory(); 
  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addSinglePhoto({ userId: user.id, title, imgUrl }))
    history.push('/home');
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImgUrl(file);
  };

  return (
    <div className='form-container'>

      <form className='form' onSubmit= { handleSubmit } >

        <i className='fas fa-camera-retro' id='cameraImage2'/>
        <h2 id='welcome'> Express Yourself </h2>

        <div className='loginInput'>
          <input
              type='text'
              className='input--container'
              placeholder='Title'
              value= { title }
              onChange= { (e) => setTitle(e.target.value) }
          />
        </div> 
        
        <div className='loginInput'>
         <input 
            type='file' 
            className='input--container' 
            onChange= { updateFile } 
          />
        </div>

        {/* <div className= 'modal--form--errors'>  
            { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
        </div> */}

        <button className='submit-btn' type='submit'> Post Photo </button>

      </form>
      <div>
        {/* {user && (
          <div>
            <h1>{user.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default NewPhoto;