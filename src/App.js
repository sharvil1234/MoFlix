import Search from "./pages/Search";
import Buffer from "./pages/Buffer";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import React from "react";
import Flix from "./pages/Flix";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route
                path="/home"
                element={<Search />}
            />
            <Route
                path="/buffer"
                element={<Buffer />}
            />
            <Route path="/flix"
                element={<Flix />}
            />
          </Routes>
        </Router>
      </>
  );
}

export default App;
