import "./carouselButton.css"

function CarouselButton({ direction, handleCarouselNav, carouselRef }) {
  return (
    <button
      className="carousel-button"
      id={`${direction}-button`}
      onClick={() => handleCarouselNav(carouselRef, direction)}
    >
      {direction}
    </button>
  );
};

export default CarouselButton;
