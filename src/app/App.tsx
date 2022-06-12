import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import JestTesting from '../poc/JestTesting/jestTesting';
import Puppeteer from '../poc/puppeteer/puppeteer';
import Realtime from '../poc/realtime/realtime';
import Home from '../screens/home/home';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/poc/react-testing-puppeteer' element={<Puppeteer />} />
            <Route path='/poc/react-testing-jest' element={<JestTesting />} />
            <Route path='/poc/react-realtime' element={<Realtime />} />
          </Route>
          <Route path='/tab1' element={<h3>Tab 1</h3>} />
          <Route path='/tab2' element={<h3>Tab 2</h3>} />
          <Route path='/search' element={<h3>Tab 2</h3>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
