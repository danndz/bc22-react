import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./BT_HomePage/Home";
import MovieTicket from "./BT_MovieTicket/MovieTicket";
import TodoApp from "./BT_TodoAppAPI/TodoApp";
import MovieList from "./15_Router/MovieList";
import MovieDetails from "./15_Router/MovieDetails";
import MovieLayout from "./15_Router/MovieLayout";
import DemoStyle from "./16_Style/DemoStyle";

// React component
function App() {
  return (
    // BrowserRouter: cung cấp các tính năng làm việc với url của browser
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h3>Cybersoft</h3>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movie-ticket">
                  Movie Ticket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todos">
                  Todo App
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movie List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-ticket" element={<MovieTicket />} />
        <Route path="/todos" element={<TodoApp />} />
        <Route path="/styles" element={<DemoStyle />} />

        {/* Parent - children routes */}
        <Route
          path="/movies"
          // Component của Parent Route thường được gọi là Layout Component
          // Bên trong MovieLayout cần gọi ra component Outlet để Child Route được hiển thị ra
          element={<MovieLayout />}
        >
          {/* index path khớp 100% với path của Route cha */}
          <Route index element={<MovieList />} />
          {/* Tự động nối path của route cha và con lại với nhau */}
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>

        {/* Nếu không có bất kì path nào khớp với url sẽ render ra route NotFound */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
