import './App.css';
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize={6} />}></Route>
              <Route exact path="/entertenment" element={<News key="entertainment" country="in" category="entertainment" pageSize={6} />}></Route>
              <Route exact path="/bussiness" element={<News key="business" country="in" category="business" pageSize={6} />}></Route>
              <Route exact path="/general" element={<News key="general" country="in" category="general" pageSize={6} />}></Route>
              <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize={6} />}></Route>
              <Route exact path="/" element={<News key="home" country="in" category="general" pageSize={6} />}></Route>

            </Routes>
          </Router>

        </div>
      </>


    );
  }
}

