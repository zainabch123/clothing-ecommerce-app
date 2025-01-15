import { useRef } from "react";
import productImages from "../../data/productImagesData";
import CarouselCard from "../carouselCard/carouselCard";

function RecentlyViewed({ handleCarouselNav }) {
  const recentlyViewedCarouselRef = useRef(null);

  return (
    <section className="recently-viewed-section">
      <h1>Recently Viewed</h1>

      <div className="recently-viewed-carousel">
        <button
          className="carousel-button"
          id="left-button"
          onClick={() => handleCarouselNav(recentlyViewedCarouselRef, "left")}
        >
          Left
        </button>
        <ul
          className="recently-viewed-carousel-card-container"
          ref={recentlyViewedCarouselRef}
        >
          {productImages.map((product, index) => {
            return <CarouselCard key={index} product={product} />;
          })}
        </ul>
        <button
          className="carousel-button"
          id="right-button"
          onClick={() => handleCarouselNav(recentlyViewedCarouselRef, "right")}
        >
          Right
        </button>
      </div>
    </section>
  );
}

export default RecentlyViewed;
