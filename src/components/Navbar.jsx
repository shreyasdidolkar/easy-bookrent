function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h1>EasyRent</h1>

      <div>
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("properties")}>
          Properties
        </button>
      </div>
    </nav>
  )
}

export default Navbar