// CreateUser.js file
import { useState } from "react";
import { createUser } from "../../store/session";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [image, setImage] = useState(null);
  // for multuple file upload
  //   const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(createUser({ username, email, password, repeatPassword})) //image 
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
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
      <form className="form" onSubmit={handleSubmit}>

        <ul>
          {errors.length > 0 && errors.map((error) => <div key={error}>{error}</div>)}
        </ul>

        <i className="fas fa-camera-retro" id='cameraImage2'></i>
        <h2 id='welcome'>Sign Up</h2>

        <div className="loginInput">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="loginInput">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="loginInput">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="loginInput">
          <input
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        {/* TikTok Notes for repeat password form */}
        {/* <div className="loginInput">
          <input
            type='password'
            placeholder='Repeat Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
          ></input>
        </div> */}


        {/* <div className="loginInput"> */}
        {/* <label>
            <input type="file" onChange={updateFile} />
          </label> */}
        {/* <label>
            Multiple Upload
            <input
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
        {/* </div> */}
        <button id='logIn-btn' type="submit">Create User</button>
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