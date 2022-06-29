import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ConsumeTableGrid from '../poc/ConsumeTableGrid/ConsumeTableGrid';
import JestTesting from '../poc/JestTesting/jestTesting';
import Puppeteer from '../poc/puppeteer/puppeteer';
import Realtime from '../poc/realtime/realtime';
import ReduxDemo from '../poc/redux/reduxDemo';
import store from '../poc/redux/store';
import Home from '../screens/home/home';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route path='/poc/react-testing-puppeteer' element={<Puppeteer />} />
              <Route path='/poc/react-testing-jest' element={<JestTesting />} />
              <Route path='/poc/react-realtime' element={<Realtime />} />
              <Route path='/poc/table-grid' element={<ConsumeTableGrid />} />
              <Route path='/poc/redux' element={<ReduxDemo />} />
            </Route>
            <Route path='/tab1' element={<h3>Tab 1</h3>} />
            <Route path='/tab2' element={<h3>Tab 2</h3>} />
            <Route path='/search' element={<h3>Tab 2</h3>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
