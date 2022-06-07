import imgSolidaria from '../assets/img/imgSolidaria.jpg'

const NoticiasCard = ({ noticia }) => {
  const { titulo, texto, img } = noticia
  return (
    <div>
      <h4>{titulo}</h4>
      <p>{texto}</p>
      <img src={img} alt="" />
    </div>
  )
}

export default NoticiasCard