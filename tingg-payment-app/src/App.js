import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import SendMoneyPage from './pages/SendMoneyPage';
import PayBillPage from './pages/PayBillPage';
import BuyAirtimePage from './pages/BuyAirtimePage';
import BuyVoucherPage from './pages/BuyVoucherPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <SideMenu />
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/send-money" component={SendMoneyPage} />
              <Route path="/pay-bill" component={PayBillPage} />
              <Route path="/buy-airtime" component={BuyAirtimePage} />
              <Route path="/buy-voucher" component={BuyVoucherPage} />
              {/* Add more routes as needed */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
