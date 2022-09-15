// == Import npm
import React from "react";

import Login from "src/components/Login";
import Search from "src/components/Search";
import TrackResults from "src/components/TrackResults";
import trackSearch from "src/data/track_search";
import "semantic-ui-css/semantic.min.css";
import "./app.scss";
import MenuBar from "../MenuBar";
import { Routes, Route } from "react-router-dom";

// == Composant
const App = () => {
  return (
    <div className="app">
      <Login />
      <Search placeholder="Chercher une chanson" />
      <MenuBar />
      <Routes>
        <Route path="/tracks" element={<TrackResults />} />
        <Route path="/artists" element={<TrackResults />} />
      </Routes>
    </div>
  );
};

// == Export
export default App;
