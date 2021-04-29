import React from 'react';

import { InputGroupContainer, InputContainer, LabelContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <InputGroupContainer>
            <InputContainer className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ? (
                <LabelContainer className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </LabelContainer>
                )
                : null
            }
        </InputGroupContainer>
    )
}

export default FormInput