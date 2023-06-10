import { useFormik } from 'formik';
import React from 'react';
import './Register.css';

const onSubmit = async (values, actions) => {
    console.log("Registered Values : ", values);
    console.log("Actions : ", actions);
    alert("Registered Successfully!");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}
const Register = () => {

    const { values, errors, isSubmitting, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            roles: '',
            password: '',
            con_pass: '',
        },
        onSubmit,
    })
    // console.log(errors)

    return (
        <div className='register-container'>
            <form onSubmit={handleSubmit} autoComplete='off' className='register-container'>
                <div className='wrapper'>
                    <ol>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p> <span className='icon'>&gt;</span> </p>
                        </li>
                        <li>
                            <p className='login23' >Create an Account</p>
                        </li>
                    </ol>
                </div>
                <h1 className='headertitle'>Login or Create an Account</h1>
                <hr className='redline' />
                <div className='Account'>
                    <h3 className='headertitle'>Personal Information</h3>
                    <hr />
                    <p>Please enter the following information to create your account.</p>

                    <div className='personal-information'>
                        <div className='text'>

                            <p>First Name *</p>
                            <input value={values.fname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='fname' type='text'
                                name='fname'
                                required
                                className={errors.fname && touched.fname ? "input-error" : ""}
                            />
                            {errors.fname && touched.fname && <p className='error'>{errors.fname}</p>}
                        </div>
                        <div className='text'>

                            <p>Last Name *</p>
                            <input value={values.lname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='lname' type='text' name='lname'
                                required
                                className={errors.lname && touched.lname ? "input-error" : ""}
                            />
                            {errors.lname && touched.lname && <p className='error'>{errors.lname}</p>}
                        </div>
                    </div>

                    <div className='personal-information'>
                        <div className='text'>

                            <p>Email Address *</p>
                            <input value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='email' type='email' name='email'
                                required
                                className={errors.email && touched.email ? "input-error" : ""}
                            />
                            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                        </div>
                        <div className='text'>

                            <p>Roles *</p>
                            <select
                                value={values.roles}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='roles'
                                name='roles'
                                required
                                className={errors.roles && touched.roles ? 'input-error' : ''}
                            >
                                <option value=''>Select a Option</option>
                                <option value='buyer'>Buyer</option>
                                <option value='seller'>Seller</option>


                            </select>
                            {errors.roles && touched.roles && <p className='error'>{errors.roles}</p>}
                        </div>
                    </div>

                    <h3 className='headertitle'>Login Information</h3>
                    <hr />
                    <div className='personal-information'>
                        <div className='text'>

                            <p>Password *</p>
                            <input value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='password' type='password' name='password'
                                required
                                minLength={6}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                                className={errors.password && touched.password ? "input-error" : ""}
                            />
                            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                        </div>
                        <div className='text'>

                            <p>Confirm Password *</p>
                            <input value={values.con_pass}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='con_pass' type='password'
                                required
                                pattern={values.password}
                                className={errors.con_pass && touched.con_pass ? "input-error" : ""}
                            />
                            {errors.con_pass && touched.con_pass && <p className='error'>{errors.con_pass}</p>}
                        </div>
                    </div>
                    <button type='submit' disabled={isSubmitting} className='register-btn' ><b>Register</b></button>
                </div>
            </form >
        </div >
    )
}
export default Register