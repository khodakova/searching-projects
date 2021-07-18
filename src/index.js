import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import SearchServiceContext from "./components/searchServiceContext";
import SearchService from "./services/searchService";
import App from "./components/app";
import ErrorBoundry from "./components/errorBoundry";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const searchService = new SearchService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SearchServiceContext.Provider value={searchService}>
        <Router>
          <App/>
        </Router>
      </SearchServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root')
);