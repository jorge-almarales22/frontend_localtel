import { useState } from "react"

export const useLogicCheckBalance = () => {
    const [account, setAccount] = useState("")
    const [balance, setBalance] = useState(0)
    const USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,  })

    function handleCheckBalance(e)
    {
        e.preventDefault();

        const apiURL = `http://localhost:8000/api/auth/check-balance/${account}`

        const token = localStorage.getItem('token')

        fetch(apiURL, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            }
        }).then(res => res.json())
        .then(res => setBalance(res))
    }
  return {
    account,
    setAccount,
    handleCheckBalance,
    USD,
    setBalance,
    balance
  }
}
