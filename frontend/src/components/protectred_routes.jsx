import { Navigate } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('jwt')

    return(
        token ? <Component {...rest} /> : <Navigate to="/auth/login" />
    )
}

export default ProtectedRoute;