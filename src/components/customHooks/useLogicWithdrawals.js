import { useState } from "react";

export const useLogicWithdrawals = () => {

    const [value_to_withdraw, setValue] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [balance, setBalance] = useState("")

    const USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,  })
    
    function handleWidhdrawals(e)
    {
        e.preventDefault();

        const apiURL = `http://localhost:8000/api/auth/withdrawals`

        const token = localStorage.getItem('token')

        const data = {value_to_withdraw, accountNumber};

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
            setBalance(res.data)
        })
    }
    return {
        value_to_withdraw,
        setValue,
        handleWidhdrawals,
        accountNumber,
        setAccountNumber,
        balance,
        USD
    }
}
