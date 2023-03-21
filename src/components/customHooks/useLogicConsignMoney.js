import { useState } from "react";

export const useLogicConsignMoney = () => {

    const [value_to_consign, setValue] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [balance, setBalance] = useState("")
    const USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,  })

    function handleConsignMoney(e)
    {
        e.preventDefault();

        const apiURL = `http://localhost:8000/api/auth/consign-money`

        const token = localStorage.getItem('token')

        const data = {value_to_consign, accountNumber};

        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            }, 
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => {
            document.querySelector(".alert").style.display = "block"
            setBalance(res)
        })
    }
    return {
        value_to_consign,
        setValue,
        handleConsignMoney,
        USD,
        accountNumber,
        setAccountNumber,
        balance
    }
}
