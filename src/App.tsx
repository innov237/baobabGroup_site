import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { DividerVertical } from './components/dividerVertical/DividerVertical';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/baobabGroup_site" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <DividerVertical></DividerVertical>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
