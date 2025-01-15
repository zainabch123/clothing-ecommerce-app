import { useRef } from "react";
import productImages from "../../data/productImagesData";
import CarouselCard from "../carouselCard/carouselCard";


function Trending({ handleCarouselNav}) {
      const trendingCarouselRef = useRef(null);
    
    return (
      <section className="trending-section">
        <h1>Trending</h1>

        <div className="trending-carousel">
          <button
            className="carousel-button"
            id="left-button"
            onClick={() => handleCarouselNav(trendingCarouselRef, "left")}
          >
            Left
          </button>
          <ul
            className="trending-carousel-card-container"
            ref={trendingCarouselRef}
          >
            {productImages.map((product, index) => {
              return <CarouselCard key={index} product={product} />;
            })}
          </ul>
          <button
            className="carousel-button"
            id="right-button"
            onClick={() => handleCarouselNav(trendingCarouselRef, "right")}
          >
            Right
          </button>
        </div>
      </section>
    );
}

export default Trending;