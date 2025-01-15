
function CarouselCard({ product }) {
    return (
      <li className="carousel-card">
        <div className="carousel-card-img">
          <img src={product.imageSrc} />
        </div>
        <div className="carousel-card-info">{product.info}</div>
      </li>
    );
}

export default CarouselCard;