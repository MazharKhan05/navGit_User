import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//Router to route the Components
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
//Toastify
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
//Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
//Components
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import PageNotFound from './Pages/PageNotFound'
import Signin from './Pages/Signin'
import Header from "./layout/Header";
import Footer from './layout/Footer'
import {UserContext} from './Context/UserContext'
import firebaseConfig from './Config/firebaseConfig'

//Init Firebase
firebase.initializeApp(firebaseConfig);

const App =()=> {
  const [user,setUser] = useState(null)
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />//This means for all the other routes rather than mentioned above which does not exist will serve the the component PageNotFound!
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
