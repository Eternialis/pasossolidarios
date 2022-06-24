import { noticiasCollection } from "../firestore"
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import pasosSolidariosImg from "../../assets/img/pasosSolidariosDefault.jpg"
import Loading from "../Loading";

const Noticias = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getDocs(noticiasCollection)
            .then(({ docs }) => {
                const docsFormateado = docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setData(docsFormateado)
                console.log(data)
            })
            .catch((error) => {
                //transformar en un toast o en un alert
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            {loading ? <Loading /> :
                <>
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Noticias</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                                Las actualizaciones más recientes de Pasos Solidarios
                            </p>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {data?.map((post) => (
                                <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-cover" src={post.img ? post.img : pasosSolidariosImg} alt="" />
                                    </div>
                                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <div className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-900">{post.titulo}</p>
                                                <p className="mt-3 text-base text-gray-500">{`${post.texto}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </section>
    )
}

export default Noticias