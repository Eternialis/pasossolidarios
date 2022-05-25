import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

const Sumate = () => {
    return (
        <>
            <h2>Formá parte de Pasos Solidarios</h2>
            <Formik
                initialValues={{
                    nombre: "",
                    mail: "",
                    telefono: "",
                    mensaje: "",
                }}
                validationSchema={
                    Yup.object().shape({
                        nombre: Yup.string().required("Campo obligatorio"),
                        mail: Yup.string().email("Formato de email inválido").required("Campo obligatorio"),
                        telefono: Yup.string().required("Campo obligatorio"),
                        mensaje: Yup.string().required("Campo obligatorio"),
                    })}
                onSubmit={
                    (values) => {
                        const { nombre, mail, telefono, mensaje } = values

                        console.log(values)
                    }}
            >
                <Form>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Field name="nombre" />
                        <ErrorMessage name="nombre" component="div" className="errorMessage" />
                    </div>
                    <div>
                        <label htmlFor="mail">Email</label>
                        <Field name="mail" />
                        <ErrorMessage name="mail" component="div" className="errorMessage" />
                    </div>
                    <div>
                        <label htmlFor="telefono">Teléfono</label>
                        <Field name="telefono" />
                        <ErrorMessage name="telefono" component="div" className="errorMessage" />
                    </div>
                    <div>
                        <label htmlFor="mensaje">Contanos cómo te gustaría colaborar</label>
                        <Field name="mensaje" as="textarea" />
                        <ErrorMessage name="mensaje" component="div" className="errorMessage" />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    )
}

export default Sumate