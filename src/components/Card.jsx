function Card({ item, onRent }) {
  return (
    <div className="card">

      <div className="image">
        🏠
      </div>

      <h2>{item.name}</h2>

      <p>{item.location}</p>

      <h3>₹{item.price} / day</h3>

      <button onClick={() => onRent(item)}>
        Rent Now
      </button>

    </div>
  )
}

export default Card