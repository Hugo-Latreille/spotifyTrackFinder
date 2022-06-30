// == Import npm
import React from "react";

import Login from "src/components/Login";
import Search from "src/components/Search";
import TrackResults from "src/components/TrackResults";
import trackSearch from "src/data/track_search";
import "semantic-ui-css/semantic.min.css";
import "./app.scss";

// == Composant
const App = () => {
  return (
    <div className="app">
      <Login />
      <Search placeholder="Chercher une chanson" />
      <TrackResults />
    </div>
  );
};

// == Export
export default App;
