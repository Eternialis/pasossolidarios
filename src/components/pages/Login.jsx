import { useNavigate } from "react-router-dom";


const { REACT_APP_PASOS_USER, REACT_APP_PASOS_PASS, REACT_APP_PASOS_LOGGED } = process.env

const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <h2>Login</h2>
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
                    (values) => {
                        const { usuario, password } = values
                        if (usuario === REACT_APP_PASOS_USER && password === REACT_APP_PASOS_PASS) {
                            localStorage.setItem("logged", REACT_APP_PASOS_LOGGED)
                            navigate("/")
                        } else {
                            alert("Usuario o contraseña incorrectos")
                        }
                    }}
            >
                <Form>
                    <div>
                        <label htmlFor="user">Usuario</label>
                        <Field name="user" />
                        <ErrorMessage name="user" component="div" className="errorMessage" />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <Field name="password" />
                        <ErrorMessage name="password" component="div" className="errorMessage" />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    )
}

export default Login