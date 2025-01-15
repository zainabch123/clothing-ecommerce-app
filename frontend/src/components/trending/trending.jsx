import { useRef } from "react";
import productImages from "../../data/productInfo";
import CarouselCard from "../carouselCard/carouselCard";
import CarouselButton from "../carouselButton/carouselButton";

function Trending({ handleCarouselNav }) {
  const trendingCarouselRef = useRef(null);

  return (
    <section className="trending-section">
      <h1>Trending</h1>

      <div className="trending-carousel">
        <CarouselButton
          direction={"left"}
          handleCarouselNav={handleCarouselNav}
          carouselRef={trendingCarouselRef}
        />
        <ul
          className="trending-carousel-card-container"
          ref={trendingCarouselRef}
        >
          {productImages.map((product, index) => {
            return <CarouselCard key={index} product={product} />;
          })}
        </ul>
        <CarouselButton
          direction={"right"}
          handleCarouselNav={handleCarouselNav}
          carouselRef={trendingCarouselRef}
        />
      </div>
    </section>
  );
}

export default Trending;
