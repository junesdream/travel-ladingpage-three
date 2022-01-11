import React from 'react'
import './Showcase.css'
import Frontvideo from '../assets/front.mp4'

const Showcase = () => {
    return (
		<>
			<video src={Frontvideo} autoPlay loop muted />
			<section className="showcase">
				<div className="overlay">
					<h1>Seoul Ligthening Travel </h1>
					<p>Book your travel for the amazing hours! </p>
				</div>
			</section>
		</>
	);
}

export default Showcase
