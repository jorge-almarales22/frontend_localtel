import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { CreateBankAccount } from "./components/dashboard/CreateBankAccount";
import { ConsignMoney } from "./components/dashboard/ConsignMoney";
import { Withdrawals } from "./components/dashboard/Withdrawals";
import { CheckBalance } from "./components/dashboard/CheckBalance";

const App = () => {
  
  return (
    <div className="container">
        <Navbar/>   
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-bank-account" element={<CreateBankAccount />}></Route>
          <Route path="/consign-money" element={<ConsignMoney/>}></Route>
          <Route path="/withdrawals" element={<Withdrawals/>}></Route>
          <Route path="/check-balance" element={<CheckBalance/>}></Route>
        </Routes>   
    </div>
  )
}

export default App;
