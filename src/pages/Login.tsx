import { Button } from "primereact/button"
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout"
import pokeballImage from "../assests/images/Pokeball-Login.png"
import { useState } from "react";
import { LoginRequest } from "../models/requests/LoginRequest.interface";
import { Formik } from "formik";

const Login = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const navigate = useNavigate();
    const formValues = { email: "", password: "" } as LoginRequest;

    const loginPass = (values: LoginRequest) => {
        alert(JSON.stringify(values, null, 2));
        if (values) {
            navigate("/about");
        }
    }
    return (
        <Layout>
            <div className="flex align-items-center justify-content-center mt-6">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src={pokeballImage} alt="" className="LoginLogo" />
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <Link to="/register" className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</Link>
                    </div>

                    <div>
                        <Formik
                            initialValues={formValues}
                            validate={(values) => {
                                const errors = {} as LoginRequest;
                                if (!values.email) {
                                    errors.email = 'Email address is required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address. Please check again!';
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
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                                <div className="flex align-items-center justify-content-between mb-6">
                                    <div className="flex align-items-center">
                                        <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                        <label htmlFor="rememberme">Remember me</label>
                                    </div>
                                </div>
                                <Button label="Sign In" icon="pi pi-user" className="w-full" disabled={isSubmitting}>
                                </Button>
                            </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login


