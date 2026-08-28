import { useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {
  const [page, setPage] = useState("home")

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
    }
  ]

  const [message, setMessage] = useState("")

  function rentProperty(item) {
    setMessage(item.name + " rented successfully!")
  }

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div className="home">
          <h1>Welcome to EasyRent</h1>

          <p>
            Find your perfect rental property.
          </p>

          <button onClick={() => setPage("properties")}>
            View Properties
          </button>
        </div>
      )}

      {page === "properties" && (
        <div className="container">
          <h1>Available Properties</h1>

          <div className="cards">
            {properties.map((item) => (
              <Card
                key={item.id}
                item={item}
                onRent={rentProperty}
              />
            ))}
          </div>

          <p className="message">{message}</p>
        </div>
      )}
    </div>
  )
}

export default App