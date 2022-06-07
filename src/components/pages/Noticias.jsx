import { noticiasCollection } from "../firestore"
import { getDocs } from "firebase/firestore";
import NoticiasCard from "../NoticiasCard"
import { useEffect, useState } from "react";

const Noticias = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getDocs(noticiasCollection)
            .then(({ docs }) => {
                const docsFormateado = docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setData(docsFormateado)
            })
            .catch((error) => {
                //transformar en un toast o en un alert
                console.log(error)
            })
        setLoading(false)
    }, [])

    return (
        <section>
            <div>Noticias</div>
            {loading ? <div>Cargando...</div> :
                <div>
                    {data.map((noticia) => {
                        return <NoticiasCard key={noticia.id} noticia={noticia} />
                    })}
                </div>
            }
        </section>
    )
}

export default Noticias