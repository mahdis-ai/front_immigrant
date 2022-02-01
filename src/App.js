import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import SendingDocs from './pages/sendingDocs';
import SeeAppointment from './pages/seeAppointment';
import HomePage from './pages/homePage';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import LawyerApp from './pages/lawyerPanel';  
import ClerkApp from './pages/clerkPanel';  

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>


        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/sendingDocs' component={SendingDocs} />
        <Route path='/seeAppointment' component={SeeAppointment} />
        <Route path='/homePage' component={HomePage} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/lawyer-app' component={LawyerApp} />
        <Route path='/clerk-app' component={ClerkApp} />


      </Switch>
    </Router>
  );
}
  
export default App;