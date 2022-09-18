import React, { memo } from 'react';
import Button from '../Button/Button';
import { Form, Formik } from 'formik';
import CustomInput from '../CustomInput/CustomInput';
import * as yup from 'yup'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { cleanCartAC, setCartCountAC } from '../../store/cart/actionCreators';



const CreateOrderForm = ({ closeModal }) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart, shallowEqual)

    const initialValues = {
        name: '',
        lastname: '',
        age: '',
        adress: '',
        phone: '',
    }

    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(4, 'Min 4 characters')
            .required('This filed is required'),

        lastname: yup.string()
            .min(4, 'Min 4 characters')
            .required('This filed is required'),


        age: yup.number()
            .min(8, 'Age should be greater than 8')
            .max(100, 'Age should be lesser than 110')
            .required('This filed is required'),


        adress: yup.string()
            .required('This filed is required'),

        phone: yup.number()
            .required('This input is required'),

    });

    const handleSubmit = (values) => {
        console.log(cart);
        console.log(values);
        dispatch(cleanCartAC())
        dispatch(setCartCountAC())
        closeModal()
    }

    return (

        <>
            <h1>Create an order</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >
                {({ isValid, dirty }) => {
                    return (
                        <Form>
                            <CustomInput lable="Name:" type="text" name="name" placeholder="Name" />
                            <CustomInput lable="Lastname:" type="text" name="lastname" placeholder="Lastname" />
                            <CustomInput lable="Age:" type="text" name="age" placeholder="Age" />
                            <CustomInput lable="Adress:" type="text" name="adress" placeholder="Adress" />
                            <CustomInput lable="Phone:" type="text" name="phone" placeholder="Phone" />

                            <Button type="submit" disabled={!isValid || !dirty} >Submit</Button>
                        </Form>)
                }}

            </Formik>
        </>
    );

}



export default memo(CreateOrderForm);
