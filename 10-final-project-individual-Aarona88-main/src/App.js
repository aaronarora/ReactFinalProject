import { render } from "react-dom";
import {
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";

import './App.css';

import SearchPage from 'components/SearchPage/SearchPage';
import FavoritesPage from 'components/FavoritesPage/FavoritesPage';

function App() {
  return (
    <div className="App-container">
      <nav className="App-navbar">
        <h1>Library browser</h1>

        <ul>
          <li>
            <NavLink to="search" activeClassName="active">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="favorites" activeClassName="active">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* Front page redirects to search page. */}
        <Route path="/" element={<Navigate replace to="/search" />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
