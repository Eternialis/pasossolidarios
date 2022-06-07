import { ErrorMessage, Field, Form, Formik } from "formik"
import { noticiasCollection } from "../firestore"
import * as Yup from 'yup'
import { addDoc } from "firebase/firestore"

const Edicion = () => {

    return (
        <div>
            <h2>Crear una nueva noticia</h2>
            <Formik
                initialValues={{
                    titulo: "",
                    texto: "",
                    img: "",
                }}
                validationSchema={
                    Yup.object().shape({
                        titulo: Yup.string().min(10, "El título debe poseer entre 10 y 30 caracteres").max(30, "El título debe poseer entre 10 y 30 caracteres").required("Campo obligatorio"),
                        texto: Yup.string().min(150, "Inserte un mínimo de 150 caracteres").max(650, "Se admiten hasta 650 caracteres").required("Campo obligatorio"),
                        img: Yup.string().required("Campo obligatorio"),
                    })}
                onSubmit={
                    (values, { resetForm }) => {
                        resetForm()
                        addDoc(noticiasCollection, values)
                            .then((resultado) => {
                                alert("Se ha agregado correctamente")
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    }
                }
            >
                <Form>
                    <div>
                        <label htmlFor="titulo">Título</label>
                        <Field name="titulo" />
                        <ErrorMessage name="titulo" component="div" className="errorMessage" />
                    </div>
                    <div>
                        <label htmlFor="texto">Cuerpo</label>
                        <Field as="textarea" name="texto" />
                        <ErrorMessage name="texto" component="div" className="errorMessage" />
                    </div>
                    <div>
                        <label htmlFor="img">URL de la imagen</label>
                        <Field type="textarea" name="img" />
                        <ErrorMessage name="img" component="div" className="errorMessage" />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>

            </Formik>
        </div>
    )
}

export default Edicion