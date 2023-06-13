import "./App.css";
import "antd/dist/reset.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Page/Main";
import NotFound from "./Page/404";
import Login from "./Page/Login";
import Dashboard from "./Page/Dashboard/Dashboard";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";
import PrivateRoute from "./Components/PrivateRoute";
// import { Provider } from 'react-redux';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="page1"
            element={
              <PrivateRoute>
                <Page1 />
              </PrivateRoute>
            }
          />
          <Route
            path="page2"
            element={
              <PrivateRoute>
                <Page2 />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer hideProgressBar />
    </Router>
  );
}

export default App;
