import React from 'react';
import './product.css';
import Card from './Card';

import option from '../../assets/option1.jpg';
import option2 from '../../assets/option2.jpg';
import option3 from '../../assets/option3.jpg';

const products = [
	{
		id: 1,
		description: 'female suit',
		color: 'black',
		price: 30,
		image: option,
	},

	{
		id: 2,
		description: 'male hoodie',
		color: 'striped black',
		price: 50,
		image: option2,
	},

	{
		id: 3,
		description: 'winter coat',
		color: 'brown',
		price: 90,
		image: option3,
	},
];

const Product = () => {
	return (
		<section className='product__section'>
			<h2>YOU MAY ALSO LIKE</h2>
			<ul className='container product__container'>
				{products.map((product) => (
					<Card
						key={product.id}
						product={product}
					/>
				))}
			</ul>
		</section>
	);
};

export default Product;
