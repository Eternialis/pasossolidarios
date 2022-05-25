localStorage.getItem("logged")

const { REACT_APP_PASOS_LOGGED } = process.env

const RequireAuth = ({ children }) => {
    return (
        <div>RequireAuth</div>
    )
}

export default RequireAuth