import React from 'react'
import { useLogicLogin } from './customHooks/useLogicLogin'
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const {email, password, handleSubmit, setEmail, setPassword} = useLogicLogin();

  if(localStorage.getItem("token")) return <Navigate to="/check-balance"/>

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={event => { setEmail (event.target.value) }}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={event => { setPassword (event.target.value) }}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
