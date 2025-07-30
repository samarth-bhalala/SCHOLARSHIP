import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: 10 }}>Dashboard</Link>
        <Link to="/Home" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/AboutUs" style={{ marginRight: 10 }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
