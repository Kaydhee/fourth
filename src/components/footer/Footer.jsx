import React from 'react';
import './footer.css';

import {
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='footer'>
			<section className='container footer__container'>
				<div className='footer__left'>
					<div className='logo'>
						<h2>four-th</h2>
					</div>

					<div className='text__box'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
							excepturi hic quas, esse quaerat.
						</p>
					</div>

					<div className='social__icons'>
						<FaFacebook className='social__icon' />
						<FaLinkedin className='social__icon' />
						<FaTwitter className='social__icon' />
						<FaInstagramSquare className='social__icon' />
					</div>
				</div>

				<div className='footer__right'>
					<ul>
						<h4>Online Shopping</h4>
						<li>New collection</li>
						<li>Trending</li>
						<li>Regular</li>
						<li>Accessories</li>
						<li>Gen Z</li>
					</ul>

					<ul>
						<h4>Client Services</h4>
						<li>My Account</li>
						<li>Blg</li>
						<li>About Us</li>
						<li>Contact Us</li>
						<li>FAQs</li>
					</ul>

					<ul>
						<h4>Information</h4>
						<li>Privacy Policy</li>
						<li>Delivery</li>
						<li>Payments</li>
						<li>Exchange</li>
						<li>Coupons</li>
					</ul>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
