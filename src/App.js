import React from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from "react-ga4";
const TRACKING_ID = "G-0S9SHPZK7V";
// import ReactGA from 'react-ga';
function App() {

    // ReactGA.initialize('UA-172859286-1');
    // ReactGA.pageview(window.location.pathname + window.location.search);

      ReactGA.initialize(TRACKING_ID);


  return (
    <div>
      <Main />
      {/* 237901414 */}
    </div>
  );
}

export default App;
