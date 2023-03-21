import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLogicWithdrawals } from '../customHooks/useLogicWithdrawals'

export const Withdrawals = () => {

  const {handleWidhdrawals, value_to_withdraw, setValue, setAccountNumber, accountNumber, USD, balance} = useLogicWithdrawals();
  if(localStorage.getItem('token') == null) return <Navigate to="/login"/>
  return (
    <>
        <div className="alert alert-success" style={{display: "none"}}>
            Your money was successfully withdrawn. Your balance is {USD.format(balance)}
        </div>
        <form className="card my-5" onSubmit={handleWidhdrawals}>
            <div className="card-header">
              Withdrawals
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Value to withdraw</label>
                    <input type="text" className="form-control" placeholder="$200,000" value={value_to_withdraw} onChange={event => { setValue (event.target.value) }}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control" placeholder="542783-06" value={accountNumber} onChange={event => { setAccountNumber (event.target.value) }}/>
                </div>
                <button className="btn btn-primary">Withdrawals Money</button>
            </div>
        </form>
    </>
  )

}
