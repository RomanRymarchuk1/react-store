import React, { memo } from 'react';
import Button from '../Button/Button';
import PropTypes from "prop-types";

import "./CartItem.scss"

import { dicrementAC, incrementAC, removeFromCartAC, setCartCountAC } from '../../store/cart/actionCreators';
import { addModalPropsAC, setIsModalActivelAC } from '../../store/modal/actionCreators';
import { useDispatch } from 'react-redux';




const CartItem = (props) => {

    const dispatch = useDispatch()

    const { article, src, header, count, } = props

    const removeFromCart = () => {
        dispatch(removeFromCartAC(article));
        dispatch(setIsModalActivelAC(false));
        dispatch(setCartCountAC());
    }

    const cancel = () => {
        dispatch(setIsModalActivelAC(false))
    }

    const openModal = () => {
        dispatch(addModalPropsAC(modalProps))
        dispatch(setCartCountAC)
        dispatch(setIsModalActivelAC(true))
    }

    const actionsForModal =
        <>
            <Button handleClick={() => { removeFromCart() }}>Delete</Button>
            <Button handleClick={() => { cancel() }}>Cancel</Button>
        </>

    const modalProps = {
        title: `Delete ${header} from cart?`,
        closeButton: true,
        actions: actionsForModal,
    }

    return (

        <li className='cart__item' >
            <img src={src} alt={header} width='100' height={100} />
            <h2 className='cart__header' >{header}</h2>
            <span className='cart__count' >{count}</span>
            <Button handleClick={() => { dispatch(incrementAC(article)); dispatch(setCartCountAC()) }} >+</Button>
            <Button handleClick={() => { dispatch(dicrementAC(article)); dispatch(setCartCountAC()) }}>-</Button>
            <Button handleClick={() => { openModal() }}>DEL</Button>
        </li>


    );
}

CartItem.propTypes = {
    article: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,

};


export default memo(CartItem);
