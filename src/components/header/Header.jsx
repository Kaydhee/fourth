import React from 'react';
import Nav from '../nav/Nav';
import Hero from '../Hero/Hero';
import Product from '../products/Product';
import Footer from '../footer/Footer';

const Header = () => {
	return (
		<header className='header'>
			<Nav />
			<div className='header__container'>
				<Hero />
				<Product />
				<Footer />
			</div>
		</header>
	);
};

export default Header;
