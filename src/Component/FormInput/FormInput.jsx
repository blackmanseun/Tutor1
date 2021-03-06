import React from 'react'

const FormInput =({label, handleChange, ...otherProps}) =>(
    <div className="group">
    <input className="form-input" onChange={handleChange} placeholder={label} {...otherProps} required />
    {
        label?
        (<label className={`${otherProps.value.length? 'shrink': ''} form-input-label`}>
            {label}
        </label>): null
    }
    </div>
)
export default FormInput