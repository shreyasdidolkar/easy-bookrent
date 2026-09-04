import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [message, setMessage] = useState("");

  const properties = [
    {
      id: 1,
      name: "Small House",
      location: "Pune",
      price: 1200
    },
    {
      id: 2,
      name: "Modern Flat",
      location: "Mumbai",
      price: 1800
    },
    {
      id: 3,
      name: "Family House",
      location: "Nashik",
      price: 1500
    },
    {
      id: 4,
      name: "Luxury Apartment",
      location: "Pune",
      price: 2500
    },
    {
      id: 5,
      name: "Cozy Studio",
      location: "Mumbai",
      price: 1000
    }
  ];

  function rentProperty(item) {
    setMessage(item.name + " rented successfully!");
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  function searchProperties() {
    setPage("properties");
  }

  let filteredProperties = properties.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOrder === "low") {
    filteredProperties.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredProperties.sort((a, b) => b.price - a.price);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        setPage={setPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {page === "home" && (
        <div className="home">
          <h1>Find Your Perfect Stay 🏠</h1>

          <p>
            Comfortable properties at affordable prices.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search city or property..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={searchProperties}>
              🔍 Search
            </button>
          </div>

          <button
            className="view-btn"
            onClick={() => setPage("properties")}
          >
            View All Properties
          </button>
        </div>
      )}

      {page === "properties" && (
        <div className="container">
          <h1>Available Properties 🏡</h1>

          <div className="property-tools">
            <input
              type="text"
              placeholder="Search property..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Sort by Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>

          <div className="cards">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  onRent={rentProperty}
                  isFavorite={favorites.includes(item.id)}
                  onFavorite={toggleFavorite}
                />
              ))
            ) : (
              <p className="no-result">
                😕 No properties found
              </p>
            )}
          </div>

          <p className="message">{message}</p>
        </div>
      )}

      <footer className="footer">
        <p>© 2026 EasyRent. All rights are reserved.</p>
      </footer>
    </div>
  );
}

export default App;