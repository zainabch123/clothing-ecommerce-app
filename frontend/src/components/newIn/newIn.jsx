import { useRef } from "react";
import productImages from "../../data/productInfo";
import CarouselCard from "../carouselCard/carouselCard";
import CarouselButton from "../carouselButton/carouselButton";

function NewIn({ handleCarouselNav }) {
  const newInCarouselRef = useRef(null);

  return (
    <section className="new-in-section">
      <h1>New In</h1>

      <div className="new-in-carousel">
        <CarouselButton
          direction={"left"}
          handleCarouselNav={handleCarouselNav}
          carouselRef={newInCarouselRef}
        />
        <ul className="new-in-carousel-card-container" ref={newInCarouselRef}>
          {productImages.map((product, index) => {
            return <CarouselCard key={index} product={product} />;
          })}
        </ul>
        <CarouselButton
          direction={"right"}
          handleCarouselNav={handleCarouselNav}
          carouselRef={newInCarouselRef}
        />
      </div>
    </section>
  );
}

export default NewIn;
