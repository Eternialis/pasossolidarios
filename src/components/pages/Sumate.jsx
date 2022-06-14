import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

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
                                Si te interesa ser parte de Pasos Solidarios, podes contactarte a través de nuestras redes.
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
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">https://www.instagram.com/pasossolidarios</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sumate