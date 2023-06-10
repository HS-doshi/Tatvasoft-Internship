import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please Enter Valid Email").required("Required"),
    fname: yup.string().required("Required"),
    lname: yup.string().required("Required"),

    password: yup.string().min(5).matches(passwordRules, { message: "Please Create Strong password & atleast 5 character" }).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match with your previous password!").required("Required"),
});

export const registredSchema = yup.object().shape({
    username: yup.string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    jobType: yup.string()
        .oneOf(["Developer", "Tech Lead", "Designer", "Other"], "Invalid Job Type")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of service")

})