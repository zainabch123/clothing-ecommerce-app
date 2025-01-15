import { useRef } from "react";
import productImages from "../../data/productImagesData";
import CarouselCard from "../carouselCard/carouselCard";

function NewIn({ handleCarouselNav }) {
  const newInCarouselRef = useRef(null);

  return (
    <section className="new-in-section">
      <h1>New In</h1>

      <div className="new-in-carousel">
        <button
          className="carousel-button"
          id="left-button"
          onClick={() => handleCarouselNav(newInCarouselRef, "left")}
        >
          Left
        </button>
        <ul className="new-in-carousel-card-container" ref={newInCarouselRef}>
          {productImages.map((product, index) => {
            return (
              <CarouselCard key={index} product={product} />
            );
          })}
        </ul>
        <button
          className="carousel-button"
          id="right-button"
          onClick={() => handleCarouselNav(newInCarouselRef, "right")}
        >
          Right
        </button>
      </div>
    </section>
  );
}

export default NewIn;
