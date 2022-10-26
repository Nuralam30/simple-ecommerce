import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';

export const UserContext = createContext();

function App(props) {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <h2>email : {loggedInUser.email}</h2>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={ <Review></Review>}></Route>
          <Route path='/inventory' element={ <PrivateRoute redirectTo='/login'><Inventory></Inventory></PrivateRoute>} ></Route>
          <Route path='/product/:productKey' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='/shipment' element={ <PrivateRoute redirectTo='/login'><Shipment></Shipment></PrivateRoute>}></Route>
          {/* <Route exact element={<PrivateRoute  />} >
            <Route exact path="/shipment" element={<Shipment />} />
          </Route> */}
          <Route path='/login' element={ <Login></Login>} ></Route>
          <Route path='/profile' element={ <PrivateRoute redirectTo='/login'><UserProfile></UserProfile></PrivateRoute>} ></Route>
          <Route path='*' element={ <NotFound></NotFound>} ></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
