import { useState } from 'react';
import { createUser } from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../LoginFormPage/LoginForm.css';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [image, setImage] = useState(null);
  // for multuple file upload
  //   const [images, setImages] = useState([])
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(createUser({ username, email, password }))
      .then(() => {
        setUsername('');
        setEmail('');
        setPassword('');
        // setImage(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  // const updateFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) setImage(file);
  // };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setImages(files);
  //   };

  return (
    <div className='form-container'>

      <form className='form' onSubmit= { handleSubmit } >

        <i className='fas fa-camera-retro' id='cameraImage2' />
        <h2 className='modal--title'> Sign Up </h2>

        <div className='loginInput'>
          <input
            type='text'
            className='input--container'
            placeholder='Username'
            value={username}
            onChange= { (e) => setUsername(e.target.value) }
            required
          />
        </div>

        <div id='user-email' className='loginInput'>
          <input
            type='email'
            className='input--container'
            placeholder='Email'
            value={email}
            onChange= { (e) => setEmail(e.target.value) }
            required
          />
        </div>

        <div className='loginInput'>
          <input
            type='password'
            className='input--container'
            placeholder='Password'
            value= { password }
            onChange= { (e) => setPassword(e.target.value) }
            required
          />
        </div>

        {/* <div className='loginInput'>
          <input
            type='password'
            className='input--container'
            placeholder='Confirm Password'
            value= { password }
            onChange= { (e) => setPassword(e.target.value) }
            required
          />
        </div> */}

        {/* <div className='loginInput'>
          <input className='input--container' type='file' onChange= { updateFile } />
        </div> */}

        {/* <label>
            Multiple Upload
            <input
              type="file"
              multiple
              onChange={updateFiles} />
        </label> */}

        <div className= 'modal--form--errors'>  
          { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
        </div>

        <button className='submit-btn' type='submit'> Create User </button>

      </form>
      {/* <div>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CreateUser;