import { useFormik } from 'formik'
import React from 'react'

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_pass: "",
}

function Login() {
    const { values, handleSubmit } = useFormik({
        initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }

    })
    return (
        <div>
            <h2>Login or create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-block'>
                    <label htmlFor='name' className='input-label'>Name</label>
                    <input type='text' placeholder='Enter Your Name' autoComplete='off' value={values.name} />
                </div>
                <div className='input-block'>
                    <label htmlFor='email' className='input-label'>Email</label>
                    <input type='email' placeholder='Email' autoComplete='off' value={values.email} />
                </div>
                <div className='input-block'>
                    <label htmlFor='password' className='input-label'>Password</label>
                    <input type='password' placeholder='Password' autoComplete='off' value={values.password} />
                </div>
                <div className='input-block'>
                    <label htmlFor='confirm_pass' className='input-label'>confirm Password</label>
                    <input type='password' placeholder='Confirm Password' autoComplete='off' value={values.confirm_pass} />
                </div>
            </form>
        </div>
    )
}

export default Login