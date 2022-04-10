import { Formik } from "formik";
import { InputText } from "primereact/inputtext";
import { RegisterRequest } from "../models/requests/RegisterRequest.interface";
import pokeballImage from "../assests/images/Pokeball-Login.png"
import { useNavigate } from "react-router";
import { Button } from "primereact/button";
import Layout from "../components/Layout";

const Register = () => {
    const formValues = { name: "", email: "", password: "", confirmPassword: "" } as RegisterRequest;
    const navigate = useNavigate();

    const loginPass = (values: RegisterRequest) => {
        if (values.confirmPassword === values.password) {
            alert(JSON.stringify(values, null, 2));
            if (values) {
                navigate("/login");
            }
        } else {
            alert('Password and ConfirmPassword are not matched!')
            values.password = ""
            values.confirmPassword = ""
            return
        }

    }
    return (
        <>
            <Layout>
                <head>
                    <title>Register Page</title>
                </head>
                <div className="flex align-items-center justify-content-center mt-6">
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                        <div className="text-center mb-5">
                            <img src={pokeballImage} alt="" className="LoginLogo" />
                            <div className="text-900 text-3xl font-medium mb-3">Register Your Account</div>
                        </div>

                        <div>
                            <Formik
                                initialValues={formValues}
                                validate={(values) => {
                                    const errors = {} as RegisterRequest;
                                    if (!values.email) {
                                        errors.email = '*Email address is required!';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = '*Invalid email address. Please check again!';
                                    }
                                    if (!values.name) {
                                        errors.name = "*Name is required!";
                                    } else if (values.name.length > 20) {
                                        errors.name = "*Must be 20 characters or less!";
                                    }
                                    if (!values.password) {
                                        errors.password = "*Password is required!"
                                    }
                                    if (values.confirmPassword !== values.password) {
                                        errors.password = "*Passwords are not matched!"
                                    }
                                    return errors;

                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting(false);
                                    loginPass(values);
                                }}
                            >{({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
                                    <InputText id="name" className="w-full mb-3"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <h5 style={{ color: "red" }}>{errors.name && touched.name && errors.name}</h5>
                                    <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                                    <InputText id="email" className="w-full mb-3"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <h5 style={{ color: "red" }}>{errors.email && touched.email && errors.email}</h5>
                                    <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                                    <InputText id="password" className="w-full mb-3"
                                        required
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <h5 style={{ color: "red" }}>{errors.password && touched.password && errors.password}</h5>
                                    <label htmlFor="confirmpassword" className="block text-900 font-medium mb-2">Confirm Password</label>
                                    <InputText id="confirmpassword" className="w-full mb-3"
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                    />
                                    <h5 style={{ color: "red" }}>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</h5>
                                    <div className="flex align-items-center justify-content-between mb-6">
                                    </div>
                                    <Button label="Submit" icon="pi pi-check" className="w-full" disabled={isSubmitting} />
                                </form>
                            )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Register