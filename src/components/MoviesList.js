import React from "react";
import { products } from "../products";
import MoviesItem from "./MoviesItem";

const MoviesList = () => {
	return (
		<div className='product-container'>
			{products.map(product => (
				<MoviesItem
					name={product.name}
					image={product.image}
					price={product.price}
				/>
			))}

			{/* <MoviesItem
				name={products[0].name}
				image={products[0].image}
				price={products[0].price}
			/>
			<MoviesItem
				name={products[1].name}
				image={products[1].image}
				price={products[1].price}
			/> */}
		</div>
	);
};

export default MoviesList;
