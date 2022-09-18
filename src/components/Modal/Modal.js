import React, { memo } from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';

import "./Modal.scss"

import { setIsModalActivelAC } from '../../store/modal/actionCreators';



const Modal = (props) => {

    const dispatch = useDispatch()

    const { modalProps } = props
    const { title, closeButton, actions, } = modalProps

    const closeModal = () => {
        dispatch(setIsModalActivelAC(false));

    }

    return (
        <>
            <div
                className='modal'
                onClick={(e) => {
                    if (e.target.className === "modal") {
                        closeModal()
                    }
                }}
            >
                <div className='modal__wrapper' >
                    {closeButton ? (
                        <button onClick={closeModal} className={"modal__close-btn"}>
                            &times;
                        </button>
                    ) : (
                        ""
                    )}
                    <h2 className='modal__title' >{title}</h2>
                    <p className='modal__text' >Confirm your actions</p>
                    <div className='modal__btn-container'>{actions}</div>
                </div>
            </div>
        </>)
}


Modal.propTypes = {
    modalProps: PropTypes.object.isRequired,
}

export default memo(Modal)