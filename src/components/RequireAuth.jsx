import { Navigate } from "react-router-dom"

const RequireAuth = ({ children }) => {

    localStorage.getItem("logged")
    const { REACT_APP_PASOS_LOGGED } = process.env

    if (localStorage.getItem("logged") === REACT_APP_PASOS_LOGGED) return children

    alert("No tienes permisos para acceder a esta página")
    return < Navigate to="/login" />



}

export default RequireAuth