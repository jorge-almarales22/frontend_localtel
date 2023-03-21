import { useState } from "react"

export const useLogicCreateAccount = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [value_initial, setValueInitial] = useState("")
    const [token, setToken] = useState(null)

    function handleCreateAccount(e)
    {
        e.preventDefault();

        const apiURL = `http://localhost:8000/api/create-account`

        const data = {name, email, password, value_initial};

        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            }, 
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => {
            setToken(res.token)
            localStorage.setItem('token', res.token)
        })
    }
    return {
        name,
        email,
        password,
        setEmail,
        setName,
        setPassword,
        handleCreateAccount,
        value_initial,
        setValueInitial, 
        token,
        setToken
    }
}
