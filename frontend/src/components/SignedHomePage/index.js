// Importing
import React from 'react';
import "./HomePage.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photo';
import { useHistory } from 'react-router-dom';

// Home component 
function Home(){

	const dispatch = useDispatch();
	const history = useHistory();

	const [title, setTitle] = useState('');
	const [imgUrl, setImgUrl] = useState('');

	useEffect(() => {
		dispatch(getPhotos());
	}, [dispatch]);

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		// const payload = {
		//   no,
		//   attack,
		//   defense,
		//   imageUrl,
		//   name,
		//   type,
		//   move1,
		//   move2,
		//   moves: [move1, move2],
		// };
	
		let createdPokemon;
		if (createdPokemon) {
		  history.push(`/pokemon/${createdPokemon.id}`);
		  hideForm();
		}
	};

	return (
		<div className="img-list">
		</div>
	);
};
  
// Exporting
export default Home;