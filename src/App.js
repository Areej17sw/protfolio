import React from 'react';
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
function App() {
  return (
    <Router><NavMenu/>
<Switch>
 <Route path="/about">
<About/>
  </Route>
  <Route path="/about">
<About/>
  </Route>
  <Route path="/projects">
<Projects/>
  </Route>
  <Route path="/contact">
<Contact/>
  </Route>
  <Route path="/">
<Home/>
  </Route>
</Switch>
    </Router>

 );
}

export default App;
