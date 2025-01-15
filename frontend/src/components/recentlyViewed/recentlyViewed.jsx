import { useRef } from "react";
import productImages from "../../data/productImagesData";
import CarouselCard from "../carouselCard/carouselCard";
import CarouselButton from "../carouselButton/carouselButton";

function RecentlyViewed({ handleCarouselNav }) {
  const recentlyViewedCarouselRef = useRef(null);

  return (
    <section className="recently-viewed-section">
      <h1>Recently Viewed</h1>

      <div className="recently-viewed-carousel">
        <CarouselButton
          direction={"left"}
          handleCarouselNav={handleCarouselNav}
          carouselRef={recentlyViewedCarouselRef}
        />
        <ul
          className="recently-viewed-carousel-card-container"
          ref={recentlyViewedCarouselRef}
        >
          {productImages.map((product, index) => {
            return <CarouselCard key={index} product={product} />;
          })}
        </ul>
        <CarouselButton
          direction={"right"}
          handleCarouselNav={handleCarouselNav}
          carouselRef={recentlyViewedCarouselRef}
        />
      </div>
    </section>
  );
}

export default RecentlyViewed;
