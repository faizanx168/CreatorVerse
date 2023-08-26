import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator";

function App() {
  const linkStyle = {
    marginRight: "10px",
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <Router>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/add" style={linkStyle}>
          Add Creator
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </Router>
  );
}

export default App;
