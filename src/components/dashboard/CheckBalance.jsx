import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLogicCheckBalance } from '../customHooks/useLogicCheckBalance'

export const CheckBalance = () => {
    const {account, setAccount, handleCheckBalance, balance, setBalance, USD} = useLogicCheckBalance();
    
    if(localStorage.getItem('token') == null) return <Navigate to="/login"/>

    return (
        <>
            <form className="card my-5" onSubmit={handleCheckBalance}>
                <div className="card-header">
                    Check your balance
                </div>
                <div className="card-body">
                    <h5 className="card-title">Your Balance {USD.format(balance)}</h5>
                    <div className="mb-3">
                        <label className="form-label">Number Account</label>
                        <input type="text" className="form-control" placeholder="54276297-05" value={account} onChange={event => { setAccount (event.target.value) }}/>
                    </div>
                    <button className="btn btn-primary">Check Balance</button>
                </div>
            </form>
        </>
    )
}
