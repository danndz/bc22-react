import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./BT_HomePage/Home";
import MovieTicket from "./BT_MovieTicket/MovieTicket";
import TodoApp from "./BT_TodoAppAPI/TodoApp";

// React component
function App() {
  return (
    // BrowserRouter: cung cấp các tính năng làm việc với url của browser
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-ticket" element={<MovieTicket />} />
        <Route path="/todos" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
