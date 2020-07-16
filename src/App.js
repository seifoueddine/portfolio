import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from 'react-ga';
function App() {

    ReactGA.initialize('UA-172859286-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div>
      <Main />
      {/* 237901414 */}
    </div>
  );
}

export default App;
