import './App.css';
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import Account from './components/account'
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
