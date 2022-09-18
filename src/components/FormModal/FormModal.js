import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsFormModalActivelAC } from '../../store/formModal/actionCreators';
import CreateOrderForm from '../CreateOrderForm/CreateOrderForm';

import './FormModal.scss'


const FormModal = () => {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setIsFormModalActivelAC(false))
    }



    return (
        <>
            <div
                className='form-modal'
                onClick={(e) => {
                    if (e.target.className === "form-modal") {
                        closeModal()
                    }
                }}
            >
                <div className='form-modal__wrapper' >
                    <CreateOrderForm closeModal={closeModal} />
                </div>
            </div>
        </>);
}

export default FormModal;
