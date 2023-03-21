import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLogicConsignMoney } from '../customHooks/useLogicConsignMoney';

export const ConsignMoney = () => {
    const {value_to_consign, setValue, accountNumber, setAccountNumber, handleConsignMoney, balance, USD} = useLogicConsignMoney();
    
    if(localStorage.getItem('token') == null) return <Navigate to="/login"/>

  return (
    <>
        <div className="alert alert-success" style={{display: "none"}}>
            Consigned money. Your balance is {USD.format(balance)}
        </div>
        <form className="card my-5" onSubmit={handleConsignMoney}>
            <div className="card-header">
                Consign your Money
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Value to consign</label>
                    <input type="text" className="form-control" placeholder="$200,000" value={value_to_consign} onChange={event => { setValue (event.target.value) }}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-control" placeholder="542783-06" value={accountNumber} onChange={event => { setAccountNumber (event.target.value) }}/>
                </div>
                <button className="btn btn-primary">Consign Money</button>
            </div>
        </form>
    </>
  )
}
