import React from 'react'
import './Login2.css'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


const onSubmit = async (values, actions) => {
    console.log("Login Values is : ", values);
    console.log("Actions : ", actions);
    console.log("Submitted Successfully!");

    alert("Login Successfully!");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};


const Login2 = () => {
    const navigate = useNavigate();

    const { values, errors, isSubmitting, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
    })
    const handleClick = () => {
        navigate('/register')
    }

    return (
        <div className='container'>
            <div className='wrapper'>
                <ol>
                    <li>
                        <p>Home</p>
                    </li>

                    <li>
                        <p> <span class="icon">&gt;</span> </p>
                    </li>

                    <li>
                        <p className='login23'>Login</p>
                    </li>
                </ol>
            </div>
            <div className='Account'>
                <h1 className='header'>Login or Create Account</h1>
                <hr className='redline' />
                <div className='newcustomer'>
                    <h2 className='newcus'>New Customer</h2>
                    <hr></hr>
                    <h5 className='regi'>Registration is free and easy.</h5>
                    <ul className='points'>
                        <li>Faster checkout.</li>
                        <li>Save Multiple Shipping address.</li>
                        <li>View and track orders and more.</li>
                    </ul>
                    <button type='submit' className='registerbtn' onClick={handleClick}><b>Create an Account</b></button>
                </div>
                <div className='register'>
                    <h2 className='regicusto'>Registered Customers</h2>
                    <hr></hr>
                    <h5 className='senten'>If you have an account with us, Please Log in.</h5>
                    <form onSubmit={handleSubmit}>
                        <div className='textfield'>

                            <p>Email Address *</p>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='email' type='email' name='email'
                                required
                                className={errors.email && touched.email ? "input-error" : ""}
                            />
                            {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                        </div>
                        <div className='textfield'>
                            <p>Password *</p>
                            <input
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='password' type='password' name='password'
                                required
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                                className={errors.password && touched.password ? "input-error" : ""}
                            />
                            {errors.password && touched.password && <p className='error'>{errors.password}</p>}

                        </div>
                        <button type='submit' className='loginbtn' disabled={isSubmitting} ><b>Login</b></button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login2

