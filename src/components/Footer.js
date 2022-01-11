import React from "react";
import {
	FaFacebookSquare,
	FaInstagram,
	FaYoutube,
	FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<ul>
				<li>
					<button>Home</button>
				</li>
				<li>
					<button>Privacy Policy</button>
				</li>
			</ul>
			<div class="social-icons">
				<FaFacebookSquare to="" />
				<FaInstagram to="" />
				<FaYoutube />
				<FaLinkedin />
			</div>

			<ul>
				<li>
					<button>Book your travel</button>
				</li>
				<li>
					<button>Giveaway</button>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
