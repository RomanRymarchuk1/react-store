import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const CustomInput = (props) => {

    const [field, meta] = useField(props);
    const { type, placeholder, lable } = props;
    return (
        <>

            <label>
                {lable}
                <input
                    type={type}
                    placeholder={placeholder}
                    {...field}
                />
            </label>
            {!!meta.error && meta.touched && <span className="error">{meta.error}</span>}
        </>
    )

}

CustomInput.propTypes = {
    lable: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};
CustomInput.defaultProps = {
    type: 'text',
    placeholder: '',
};

export default CustomInput;