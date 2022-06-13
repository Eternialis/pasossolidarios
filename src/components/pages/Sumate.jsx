import { ErrorMessage, Field, Form, Formik } from "formik"
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import * as Yup from 'yup'

const Sumate = () => {
    return (
        <>
            <div className="relative bg-white min">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 min-h-screen">
                    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Sumate!</h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                Si te interesa ser parte de Pasos Solidarios, podes llenar este formulario y nosotros nos comunicaremos con vos.
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">3513232566</span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">solidariospasos@gmail.com</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto lg:max-w-none">

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
                                        <Field name="nombre" placeholder="Nombre Completo" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-300 rounded-md" />
                                        <ErrorMessage name="nombre" component="div" className="text-red-600 text-sm" />
                                    </div>
                                    <div className="mt-4">
                                        <Field name="mail" placeholder="Email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-2 border-gray-300 rounded-md" />
                                        <ErrorMessage name="mail" component="div" className="text-red-600 text-sm" />
                                    </div>
                                    <div className="mt-4">
                                        <Field name="telefono" placeholder="Teléfono" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 border-2 focus:border-blue-500 border-gray-300 rounded-md" />
                                        <ErrorMessage name="telefono" component="div" className="text-red-600 text-sm" />
                                    </div>
                                    <div className="mt-4">
                                        <Field name="mensaje" as="textarea" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500  focus:border-blue-500 border border-gray-300 rounded-md"
                                            placeholder="Contanos cómo te gustaría colaborar" />
                                        <ErrorMessage name="mensaje" component="div" className="text-red-600 text-sm" />
                                    </div>
                                    <button className="inline-flex mt-4 justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">Enviar</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sumate