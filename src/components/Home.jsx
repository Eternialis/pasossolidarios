import grupoSolidario from '../assets/img/grupoSolidario.JPG'
import NoticiasCard from './NoticiasCard'

const Home = () => {
    return (
        <div>
            <header>
                <img src={grupoSolidario} alt="grupo pasos solidario" />
            </header>
            <section>
                <NoticiasCard />
                <NoticiasCard />
                <NoticiasCard />
            </section>
        </div>
    )
}

export default Home