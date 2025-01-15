import "./carouselCard.css";

function CarouselCard({ product }) {
  return (
    <li className="carousel-card">
      <div className="carousel-card-img">
        <img src={product.imageSrc} />
      </div>
      <div className="carousel-card-info">
        <h3>{product.name}</h3>
        <p>{product.rating.toFixed(1)}</p>
        <p>£{product.price.toFixed(2)}</p>
      </div>
      <div className="carousel-card-button">
        <button className="add-to-bag-button">Add To Bag</button>
      </div>
    </li>
  );
}

export default CarouselCard;
