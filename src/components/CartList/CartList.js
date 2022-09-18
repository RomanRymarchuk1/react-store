import React, { memo } from 'react';
import CartItem from '../CartItem/CartItem';
import PropTypes from "prop-types";

import "./CartList.scss"



const CartList = (props) => {

    const { cart } = props

    return (

        <section>
            <ul className='cart-list'>
                {cart.map(({ article, src, count, header }) => <CartItem key={article} article={article} src={src} header={header} count={count} />)}
            </ul>
        </section>

    );
}

CartList.propTypes = {
    cart: PropTypes.array.isRequired,
};


export default memo(CartList);
