import React from 'react'
import Image1 from '../assets/image-1.jpg'
import Image2 from '../assets/image-2.jpg'
import Image3 from '../assets/image-3.jpg'
import Image4 from '../assets/image-4.jpg'
import Image5 from '../assets/image-5.jpg'
import Image6 from '../assets/image-6.jpg'

const Destinations = () => {
    return (
		<>
			<section className="destinations">
				<h3>We offers currently everyday to the city </h3>
				<div className="grid">
					<div>
						<img src={Image1} alt="view1" />
						<h4>Fly to Seoul today!</h4>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam
						</p>
					</div>

					<div>
						<img src={Image2} alt="veiw2" />
						<h4>Explore the city!</h4>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam
						</p>
					</div>

					<div>
						<img src={Image3} alt="veiw3" />
						<h4>Take rest at neon Temple</h4>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam
						</p>
					</div>
					<div>
						<img src={Image4} alt="view1" />
						<h4>Walk around lightening palastgarden</h4>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam
						</p>
					</div>

					<div>
						<img src={Image5} alt="veiw2" />
						<h4>Outlook form the bridge to nightveiw</h4>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam
						</p>
					</div>

					<div>
						<img src={Image6} alt="veiw3" />
						<h4>Enjoy the sunrisning mood for nextday</h4>
						<p>
							Lorem ipsum dolor sit amet, consetetur sadipscing
							elitr, sed diam nonumy eirmod tempor invidunt ut
							labore et dolore magna aliquyam
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Destinations
