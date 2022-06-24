import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/img/grupoSolidario.JPG'
import foot from '../assets/img/foot.png'
import { Link as ScrollLink } from "react-scroll"

const Hero = () => {
    return (
        <div className="relative bg-gray-50">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline text-blue-600">Pasos</span>{' '}
                            <span className="block text-pink-600 xl:inline">solidarios</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Somos un grupo que trabaja apoyando a organizaciones sociales, merenderos y comedores de Córdoba, aportando recursos que contribuyan a:
                        </p>
                        <ul className='mt-4 flex flex-col gap-1'>

                            <li className='flex'>
                                <img src={foot} alt="" className='h-6 w-6' />
                                <span className="ml-2 text-lg text-gray-500">
                                    Cubrir necesidades alimentarias de niños y niñas asistentes
                                </span>
                            </li>

                            <li className='flex'>
                                <img src={foot} alt="" className='h-6 w-6' />
                                <span className="ml-2 text-lg text-gray-500">
                                    Ayudar a mejorar espacios
                                </span>
                            </li>

                            <li className='flex'>
                                <img src={foot} alt="" className='h-6 w-6' />
                                <span className="ml-2 text-lg text-gray-500">
                                    Impulsar el desarrollo de sus capacidades para la autogestión
                                </span>
                            </li>


                        </ul>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    to="/sumate"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Sumate
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <ScrollLink
                                    to="nosotros"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                >
                                    Más info
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src={heroImg}
                        alt="Pasos solidarios"
                    />
                </div>
            </main>
        </div>
    )
}

export default Hero