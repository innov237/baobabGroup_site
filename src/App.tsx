import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import ContactForm from './components/ContactForm/contactForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
