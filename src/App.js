import './App.css';

import AppRoutes from './AppRoutes';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

import { getDataAC } from './store/data/actionCreators';


function App() {

    const dispatch = useDispatch()
    const modalProps = useSelector((state => state.modal.modalProps))
    const isModalActive = useSelector((state => state.modal.isModalActive))

    useEffect(() => {
        dispatch(getDataAC())
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <AppRoutes />
            {isModalActive && <Modal modalProps={modalProps} />}
        </div>
    );
}

export default App;
