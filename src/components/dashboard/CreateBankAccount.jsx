import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLogicCreateAccount } from '../customHooks/useLogicCreateAccount'

export const CreateBankAccount = () => {

  const {name, email, password, setEmail, setName, setPassword, setValueInitial, value_initial, handleCreateAccount} = useLogicCreateAccount();

  if(localStorage.getItem("token")) return <Navigate to="/check-balance"/>

  return (
    <>
      <div className="alert alert-success" style={{display: "none"}}>
          Create your bank account 
      </div>
      <form className="card my-5" onSubmit={handleCreateAccount}>
          <div className="card-header">
              Bank account created successfully
          </div>
          <div className="card-body">
              <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Jhon Doe" value={name} onChange={event => { setName (event.target.value) }}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Jhondoe@gmail.com" value={email} onChange={event => { setEmail (event.target.value) }}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="********" value={password} onChange={event => { setPassword (event.target.value) }}/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Value Inital</label>
                  <input type="text" className="form-control" placeholder="$0" value={value_initial} onChange={event => { setValueInitial (event.target.value) }}/>
              </div>
              <button className="btn btn-primary">Create Account</button>
          </div>
      </form>
    </>
  )
}
