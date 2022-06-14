import { ErrorMessage, Field, Form, Formik } from "formik"
import { noticiasCollection } from "../firestore"
import * as Yup from 'yup'
import { addDoc } from "firebase/firestore"

const Edicion = () => {

    return (
        <>

            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl font-bold leading-6 text-gray-900">Crear una nueva noticia</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Ésta noticia no podrá ser editada, ni eliminada.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

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
                                            img: Yup.string().url("La URL de la imagen no es válida"),
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
                                    <Form className="space-y-8">
                                        <div>
                                            <label htmlFor="titulo">Título</label>
                                            <Field name="titulo" placeholder='Campaña solidaria en' className="shadow-sm focus:ring-blue-500 p-2 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                                            <ErrorMessage name="titulo" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="texto">Cuerpo</label>
                                            <Field as="textarea" name="texto" placeholder='En el día de la fecha hemos visitado...' className="shadow-sm focus:ring-blue-500 p-2 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                                            <ErrorMessage name="texto" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="img">URL de la imagen</label>
                                            <Field type="textarea" name="img" className="shadow-sm focus:ring-blue-500 p-2 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                                            <ErrorMessage name="img" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Publicar
                                        </button>
                                    </Form>

                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edicion