import {Link} from 'react-router-dom'

export const Navbar = ({token}) => {
   
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Locatel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item d-flex">
                        {
                            token == null && (
                                <>
                                    <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                                    <Link className="nav-link" aria-current="page" to="/create-bank-account">Create Bank Account</Link>
                                
                                </>
                            )
                        }
                        <Link className="nav-link" aria-current="page" to="/consign-money">Consign Money</Link>
                        <Link className="nav-link" aria-current="page" to="/withdrawals">Withdrawals</Link>
                        <Link className="nav-link" aria-current="page" to="/check-balance">Check Balance</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
