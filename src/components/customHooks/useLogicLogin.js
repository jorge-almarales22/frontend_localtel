import { useState } from "react";

export const useLogicLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)

    function handleSubmit(e)
    {
        e.preventDefault();

        const data = {email, password};

        fetch("http://localhost:8000/api/login", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("token", data.token)
            setToken(data.token)
            
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    }
    return {
        email,
        password,
        handleSubmit,
        setEmail,
        setPassword,
        token
    }
}
