import { useRef } from "react";
import productImages from "../../data/productImagesData";

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
              <li key={index} className="carousel-card">
                <div className="carousel-card-img">
                  <img src={product.imageSrc} />
                </div>
                <div className="carousel-card-info">{product.info}</div>
              </li>
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
