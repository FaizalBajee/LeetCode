import React, { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";
import { PropsWithChildren } from "react";

// type Props = {
//     children: React.ReactNode;
// };

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    useEffect(() => {

        if (!token) {
            navigate("/", { replace: true })
        }

    }, [navigate])

    // if (!token) return null
    return children;


}
export default ProtectedRoute;