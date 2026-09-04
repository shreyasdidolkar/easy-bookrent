function Navbar({ setPage, darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <h1>🏠 EasyRent</h1>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("properties")}>
          Properties
        </button>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;