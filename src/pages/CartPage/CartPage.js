import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import FormModal from '../../components/FormModal/FormModal';

import CartList from '../../components/CartList/CartList';
import { setIsFormModalActivelAC } from '../../store/formModal/actionCreators';

const CartPage = () => {

    const cart = useSelector((state => state.cart.cart), shallowEqual)

    const isFormModalActive = useSelector(state => state.formModal.isModalActive)
    const dispatch = useDispatch()

    if (cart.length) {

        return (
            <>
                <CartList cart={cart} />
                <Button handleClick={() => dispatch(setIsFormModalActivelAC(true))} >Create an order</Button>
                {isFormModalActive && <FormModal />
                }
            </>
        )

    }

    return <h1>Cart is clean</h1>
}

export default CartPage;
