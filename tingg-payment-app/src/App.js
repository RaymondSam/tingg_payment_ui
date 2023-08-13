import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Header from './Header';
import SideMenu from './SideMenu';
import SendMoney from './SendMoney';
import PayBill from './PayBill';
import BuyAirtime from './BuyAirtime';
import BuyVoucher from './BuyVoucher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
