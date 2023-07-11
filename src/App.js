import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Card from "./Components/shared/Card";

import { RatingProvider } from "./context/RatingContext";
function App() {
  return (
    <RatingProvider>
      <Router>
      <Header />
      <div className="container">
        <Card>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </Card>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/post" element={<Post />} />
          <Route path="/notfound" element={<Error />} /> */}
          {/* <Route path="/post/:id/:name" element={<Post />} /> */}
        </Routes>
      </div>
    </Router>
    </RatingProvider>
    
  );
}

export default App;
