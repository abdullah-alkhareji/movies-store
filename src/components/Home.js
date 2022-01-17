import React from "react";

const Home = () => {
	return (
		<div style={{ width: "100%", height: "100%" }}>
			<img
				className={"shop-image"}
				src='https://images.squarespace-cdn.com/content/v1/5425e769e4b0f1b39f8abfd9/1412358459724-T1VCX04ZZUTBQV03JH0K/movies.jpg'
				alt='Movies Store'
			/>
			<h1 className='text'>Movies Store</h1>
			<h4 className='text'>All amaizing movies you can watch</h4>
		</div>
	);
};

export default Home;
