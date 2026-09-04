function Card({ item, onRent, isFavorite, onFavorite }) {
  return (
    <div className="card">

      <button
        className="favorite"
        onClick={() => onFavorite(item.id)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <div className="image">
        🏠
      </div>

      <h2>{item.name}</h2>

      <p>📍 {item.location}</p>

      <h3>
        ₹{item.price.toLocaleString("en-IN")} / day
      </h3>

      <button
        className="rent-btn"
        onClick={() => onRent(item)}
      >
        Rent Now
      </button>

    </div>
  );
}

export default Card;