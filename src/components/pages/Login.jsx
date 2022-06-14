import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'

const { REACT_APP_PASOS_USER, REACT_APP_PASOS_PASS, REACT_APP_PASOS_LOGGED } = process.env

const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen -mt-20 bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/logo512.png"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingresar al panel de administración</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <Formik
                            initialValues={{
                                user: "",
                                password: "",
                            }}
                            validationSchema={
                                Yup.object().shape({
                                    user: Yup.string().required("Campo obligatorio"),
                                    password: Yup.string().required("Campo obligatorio"),
                                })}
                            onSubmit={
                                (values, { resetForm }) => {
                                    const { user, password } = values
                                    resetForm()

                                    if (user === REACT_APP_PASOS_USER && password === REACT_APP_PASOS_PASS) {
                                        localStorage.setItem("logged", REACT_APP_PASOS_LOGGED)
                                        navigate("/")
                                    } else {
                                        //Alert Provisorio ¿]Usamos sweet alert?
                                        alert("Usuario o contraseña incorrectos")
                                    }
                                }}
                        >
                            <Form className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Usuario
                                    </label>
                                    <Field name="user" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    <ErrorMessage name="user" component="div" className="text-red-600 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Contraseña
                                    </label>
                                    <Field type="password" name="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                                </div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Ingresar</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login