import { useRef } from "react";
import productImages from "../../data/productImagesData";


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
            onClick={() => handleCarouselNav(trendingCarouselRef, "right")}
          >
            Right
          </button>
        </div>
      </section>
    );
}

export default Trending;