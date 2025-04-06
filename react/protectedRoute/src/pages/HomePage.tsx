import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const HomePage = (props: Props) => {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/")
        }
    }, [navigate])

    const handle = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        // alert("logout")
    }
    return (
        <div>HomePage
            <button onClick={handle}>Logout</button>
        </div>
    )

}

export default HomePage;