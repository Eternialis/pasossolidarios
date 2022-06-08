import { CameraIcon } from '@heroicons/react/solid'
import nosotros from '../assets/img/nosotros.JPG'

const Nosotros = () => {
    return (
        <section id='nosotros' className="bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pasos Solidarios</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Sobre nosotros
                        </h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        <svg
                            className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <img
                                        className="rounded-lg shadow-lg object-cover object-center"
                                        src={nosotros}
                                        alt="Whitney leaning against a railing on a downtown street"
                                        width={1184}
                                        height={1376}
                                    />
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-2">Punto Solidario - Zona Rural de Monte Cristo</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <p className="text-lg text-gray-600">
                                Somos un grupo que trabaja apoyando a organizaciones sociales, merenderos y comedores de Córdoba, aportando recursos que contribuyan a:
                            </p>
                        </div>
                        <div className="text-lg text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                            <p>
                                Cubrir necesidades alimentarias de niñas y niños asistentes, ayudar a mejorar espacios e impulsar el desarrollo de sus capacidades para la autogestión.
                            </p>
                            <p>
                                Las necesidades de estas comunidades se fueron profundizando con la pandemia; a los niños y niñas se sumaron sus familias, se complejizó fuertemente la entrega de la ayuda, pero nada de esto impidió que PASOS SOLIDARIOS siguiera trabajando y aportando.
                                Alimentos, leches especiales, medicamentos, muebles, colchones, frazadas, electrodomésticos, ropa… todo pedido que llega como una necesidad salimos a buscarlo. Nos hemos encontrado con personas muy solidarias y la evidencia de lo entregado está en imágenes en nuestro Instagram y Facebook. Allí también encontrarán los avances de la construcción de una habitación, cocina y galería para Azul, una niña que transita un cáncer y vive en un lugar no apto para su recuperación.
                                PASOS SOLIDARIOS NO CUENTA CON APOYO O SUBSIDIOS OFICIALES, solo cuenta con el aporte de personas que confían en nosotros y contribuyen con dinero o colaboran con lo que pueden y/o consiguen cuando hacemos alguna campaña.
                            </p>
                            <p>
                                En el ultimo Evento, realizado en el mes de abril, entregamos alimentos, ropa, útiles escolares, muebles a la comunidad de la Zona Rural de Monte Cristo. Fueron 403 personas las que recibieron esta ayuda, y hoy esas mismas familias necesitan frazadas y ropa de abrigo, por lo que iniciamos la CAMPAÑA SOLIDARIA DE INVIERNO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros