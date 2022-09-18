import React, { memo } from 'react';
import Button from '../Button/Button';
import PropTypes from "prop-types";
import "./Card.scss"

import { setIsModalActivelAC, addModalPropsAC } from '../../store/modal/actionCreators';
import { addToCartAC, setCartCountAC } from '../../store/cart/actionCreators';
import { addToFavoriteAC } from '../../store/favorite/actionCreators';

import { useDispatch } from 'react-redux';





const Card = (props) => {

    const dispatch = useDispatch()

    const { card, isFavorite } = props;
    const { header, price, article, src, color } = card

    const addToCart = () => {
        dispatch(addToCartAC(card));
        dispatch(setIsModalActivelAC(false));
        dispatch(setCartCountAC())
    }

    const cancel = () => {
        dispatch(setIsModalActivelAC(false))
    }

    const openModal = () => {
        dispatch(setIsModalActivelAC(true));
        dispatch(addModalPropsAC(modalProps));
    }

    const actionForModal =
        <>
            <Button handleClick={() => { addToCart() }} >Add to cart </Button>
            <Button handleClick={() => { cancel() }} >Cancel</Button>
        </>


    const modalProps = {
        title: `Add to cart ${header}`,
        closeButton: true,
        actions: actionForModal
    }






    return (
        <li className='card' >
            <h2 className='card__header'>{header}</h2>
            <img src={src} alt={header} width={250} height={250} />
            <div className="card__info">
                <span className='card__prise' >{price}</span>
                <span className='card__article' >art:{article}</span>
                <span className='card__color' style={{ backgroundColor: color }}></span>
                <svg onClick={() => {
                    dispatch(addToFavoriteAC(article))
                }} className={isFavorite ? "card__favorite-svg--on" : "card__favorite-svg--off"}
                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill='#ffaa00'
                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
            </div>
            <Button handleClick={openModal} >Add to Cart</Button>
        </li>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool,

}
Card.defaultProps = {
    isFavorite: false,
}

export default memo(Card)


