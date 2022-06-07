import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from "react-router-dom";

import store from './redux/store';

import WeatherCalendar from './components/WeatherCalendar/WeatherCalendar';
import GlobalStyle from './globalStyles';
import { PageContainer } from './App.styled';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <GlobalStyle />
        <PageContainer>
          <Routes>
            <Route path="/" element={<WeatherCalendar />} />
          </Routes>
        </PageContainer>
      </Provider>
    </HashRouter>
  );
}

export default App;
