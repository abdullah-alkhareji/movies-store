import React from "react";
// import { products } from "../products";

const MoviesItem = ({ image, name, price }) => {
	return (
		<div className='product'>
			<img className='product-image' src={image} alt={name} />
			<div className='text-container'>
				<h2 className='text'>{name}</h2>
				<h4 className='text'>{price} KD</h4>
			</div>
		</div>
	);
};

export default MoviesItem;
