import React from 'react';
import './product.css';

import { AiOutlineShopping } from 'react-icons/ai';

const Card = ({ product }) => {
	console.log(product);
	return (
		<li className='card'>
			<div className='img__box'>
				<img
					src={product.image}
					alt='product image'
				/>
			</div>

			<div className='other__contents'>
				<span>{product.description}</span>

				<div className='inner__content'>
					<strong> $ {product.price} </strong>
					<button>
						<AiOutlineShopping />
					</button>
				</div>
			</div>
		</li>
	);
};

export default Card;
