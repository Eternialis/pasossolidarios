
const Dona = () => {
    return (
        <div className="relative bg-indigo-800" id="dona">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/dona.JPG"
                    alt=""
                />
                <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Donaciones</h1>
                <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                    Por donaciones comunicarse con Nico al <a className="font-semibold text-pink-500" href="tel:3512053967">3512053967 </a>
                </p>
                <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                    Para transferencias: Alias <span className="font-semibold text-pink-500" href="tel:3512053967">CIMA.SOTANA.RENO</span>
                </p>
            </div>
        </div>
    )
}

export default Dona