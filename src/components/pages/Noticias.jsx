import { noticiasCollection } from "../firestore"
import { getDocs } from "firebase/firestore";
import NoticiasCard from "../NoticiasCard"
import { useEffect, useState } from "react";

const Noticias = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const queryNoticias = getDocs(noticiasCollection)
            .then(({ docs }) => {
                setData(docs)
            })
            .catch((error) => {
                console.log(error)
            })
        setLoading(false)
        console.log(data)
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