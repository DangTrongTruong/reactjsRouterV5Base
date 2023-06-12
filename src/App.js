import './App.css';
import 'antd/dist/reset.css';
import { ToastContainer } from 'react-toastify';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import Main from './Page/Main';
import NotFound from './Page/404';
import Login from './Page/Login';
import { PrivateRoute } from './Components/PrivateRoute';
// import { Provider } from 'react-redux';

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path='/404' exact component={NotFound} />

          <PrivateRoute path="/" component={Main} />
          <PrivateRoute path="/home" component={Main} />
          <Route path='*' exact component={NotFound} />

          <Redirect to="/home" />
        </Switch>
        <ToastContainer hideProgressBar />
      </Router>
  );
}

export default App;
