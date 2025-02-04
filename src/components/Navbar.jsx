import { Link, useNavigate } from "react-router-dom"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from "react-scroll"

const Navbar = () => {

    localStorage.getItem("logged")
    const { REACT_APP_PASOS_LOGGED } = process.env
    const navigate = useNavigate()

    const handleClick = (e) => {
        localStorage.removeItem("logged")
        navigate("/")
    }

    return (
        <Popover className="relative bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="/logo512.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">

                        <ScrollLink to="nosotros" smooth spy className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Sobre nosotros
                        </ScrollLink>
                        <Link to="/noticias" className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Noticias
                        </Link>
                        <ScrollLink to="dona" smooth spy className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Donaciones
                        </ScrollLink>
                        {!localStorage.getItem("logged") &&
                            <Link to="/login" className="text-base font-medium text-gray-600 hover:text-gray-900">
                                Login
                            </Link>
                        }
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link
                            to="/sumate"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Sumate
                        </Link>
                        {localStorage.getItem("logged") === REACT_APP_PASOS_LOGGED &&
                            <>
                                <Link
                                    to="/edicion"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700"
                                >
                                    Subir noticia
                                </Link>
                                <button
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                    onClick={handleClick}
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <Link to='/'>
                                    <img
                                        className="h-8 w-auto"
                                        src="/logo512.png"
                                        alt="Workflow"
                                    />
                                </Link>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <ScrollLink to="nosotros" smooth spy className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Nosotros
                                </ScrollLink>
                                <Link to="/noticias" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Noticias
                                </Link>
                                <ScrollLink to="dona" smooth spy className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Dona
                                </ScrollLink>
                                <Link to="/login" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Login
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="/sumate"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Sumate
                                </Link>
                                {localStorage.getItem("logged") === REACT_APP_PASOS_LOGGED &&
                                    <>
                                        <Link
                                            to="/edicion"
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                        >
                                            Subir una noticia
                                        </Link>
                                        <button
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                                            onClick={handleClick}
                                        >
                                            Cerrar sesión
                                        </button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Navbar