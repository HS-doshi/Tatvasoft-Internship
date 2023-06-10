import { useFormik } from 'formik'
import React from 'react'
import { basicSchema } from './Schemas';
// import '../App.css'

const onSubmit = async (values, actions) => {
    console.log("Form Values : ", values);
    console.log("Actions : ", actions);
    console.log("Submitted Successfully!");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const RegistrationForm = () => {

    const { values, errors, isSubmitting, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            role: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    // console.log(errors);


    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label htmlFor='fname'>First Name</label>
            <input
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                id='fname' type='name' placeholder='Enter Your First Name'
                className={errors.fname && touched.fname ? "input-error" : ""} />

            {errors.fname && touched.fname && <p className='error'>{errors.fname}</p>}
            <label htmlFor='lname'>Last Name</label>
            <input
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                id='lname' type='name' placeholder='Enter Your Last Name'
                className={errors.lname && touched.lname ? "input-error" : ""} />

            {errors.lname && touched.lname && <p className='error'>{errors.lname}</p>}

            <label htmlFor='email'>Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id='email' type='email' placeholder='Enter Your Email'
                className={errors.email && touched.email ? "input-error" : ""} />

            {errors.email && touched.email && <p className='error'>{errors.email}</p>}

            <label htmlFor="role">Role</label>
            <select
                id="role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.role && touched.role ? "input-error" : ""}
            >
                <option value="">Choose One Option</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>

            {errors.role && touched.role && <p className="error">{errors.role}</p>}
            <label htmlFor='password'>Password</label>
            <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id='password' type='password' placeholder='Enter Your Password'
                className={errors.password && touched.password ? "input-error" : ""} />

            {errors.password && touched.password && <p className='error'>{errors.password}</p>}

            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                id='confirmPassword' type='password' placeholder='Enter Your Confirm Password'
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} />

            {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

            <button disabled={isSubmitting} type='submit' onClick={() => { alert("Submittted Successfully!") }}>Submit</button>
        </form>
    )
}

export default RegistrationForm