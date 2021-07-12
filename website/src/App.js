import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import Home from './components/routes/Home'
import About from './components/routes/About'
import Contact from './components/routes/Contact'
import NotFound from './components/routes/NotFound'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import Portfolio from './components/routes/Portfolio'

// const divStyle = {
//   BackgroundColor:  bgColors.Yellow,
// }

function App() {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/Portfolio-Website/' component={Home}/>
              <Route exact path='/Portfolio-Website/about' component={About}/>
              <Route exact path='/Portfolio-Website/Portfolio' component={Portfolio}/>
              <Route exact path='/Portfolio-Website/contact' component={Contact}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </Layout>
      <Footer />
    </>
  );
}

export default App;
