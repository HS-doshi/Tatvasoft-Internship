import { Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'
import CustomInput from './CustomInput'
import { registredSchema } from './Schemas'
import CustomChechbox from './CustomCheckbox'

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const RegistredCustomers = () => {
    return (
        <Formik initialValues={{ username: "", jobType: "", accpetedTos: false }}
            validationSchema={registredSchema}
            onSubmit={onSubmit}>
            {(isSubmitting) => {
                <Form>
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter Your Username"

                    />
                    {/* <Field type='text' name='name' placeholder="Name" /> */}
                    <CustomInput
                        label="Job Type"
                        name="jobType"
                        placeholder="Please select a Job">

                        <option value="">Please Select a Job Type</option>
                        <option value="developer">Developer</option>
                        <option value="tech">Tech Lead</option>
                        <option value="designer">Designer</option>
                        <option value="other">Other</option>
                    </CustomInput>
                    <CustomChechbox type="checkbox" name="acceptedTos" />
                    <button disabled={isSubmitting} type='submit'>Submit</button>
                </Form>
            }}

        </Formik>
    )
}

export default RegistredCustomers