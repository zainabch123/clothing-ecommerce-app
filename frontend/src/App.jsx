import { useState, useRef } from "react";
import heroImg from "./assets/heroImg9.jpg";
import item1 from "./assets/item3.jpg";
import item2 from "./assets/item5.jpg";
import item3 from "./assets/item6.jpg";
import item4 from "./assets/item7.jpg";
import item5 from "./assets/item8.jpg";
import item6 from "./assets/item9.jpg";
import item7 from "./assets/item10.jpg";
import item8 from "./assets/item11.jpg";
import item9 from "./assets/item12.jpg";
import item10 from "./assets/item13.jpg";
import item11 from "./assets/item14.jpg";



function App() {
  const newInCarouselRef = useRef(null);
  const trendingCarouselRef = useRef(null);
  const recentlyViewedCarouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClickLogin = (event) => {
    setIsVisible(!isVisible);
  };

  const handleCarouselNav = (carouselRef, direction) => {
    const scrollAmount = direction === "left" ? -400 : 400;
    carouselRef.current.scrollLeft += scrollAmount;
  }

  return (
    <div className="container">
      <header className="header">
        <div className="language-options-menu">
          <a href="#" style={{ color: "black" }}>
            United Kingdom | English
          </a>
        </div>
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            zoomAndPan="magnify"
            viewBox="0 0 37.5 37.499999"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
            </defs>
            <g fill="#222222" fillOpacity="1">
              <g transform="translate(6.362858, 23.646515)">
                <g>
                  <path d="M 8.828125 -2.265625 C 9.359375 -2.140625 9.832031 -1.898438 10.25 -1.546875 C 10.664062 -1.203125 10.992188 -0.773438 11.234375 -0.265625 C 11.484375 0.234375 11.609375 0.773438 11.609375 1.359375 C 11.609375 2.046875 11.445312 2.671875 11.125 3.234375 C 10.800781 3.796875 10.375 4.242188 9.84375 4.578125 C 9.3125 4.910156 8.722656 5.078125 8.078125 5.078125 C 7.546875 5.078125 7.039062 4.96875 6.5625 4.75 C 6.09375 4.53125 5.710938 4.238281 5.421875 3.875 C 5.140625 3.519531 5 3.128906 5 2.703125 C 5 2.253906 5.15625 1.867188 5.46875 1.546875 C 5.789062 1.222656 6.175781 1.0625 6.625 1.0625 C 7.070312 1.0625 7.453125 1.222656 7.765625 1.546875 C 8.085938 1.867188 8.25 2.253906 8.25 2.703125 C 8.25 3.171875 8.09375 3.554688 7.78125 3.859375 C 7.6875 3.960938 7.601562 4.066406 7.53125 4.171875 C 7.457031 4.285156 7.421875 4.398438 7.421875 4.515625 C 7.421875 4.804688 7.640625 4.953125 8.078125 4.953125 C 8.703125 4.953125 9.269531 4.789062 9.78125 4.46875 C 10.300781 4.144531 10.710938 3.707031 11.015625 3.15625 C 11.328125 2.613281 11.484375 2.015625 11.484375 1.359375 C 11.484375 0.859375 11.363281 0.40625 11.125 0 C 10.894531 -0.40625 10.585938 -0.726562 10.203125 -0.96875 C 9.816406 -1.207031 9.390625 -1.328125 8.921875 -1.328125 C 8.429688 -1.328125 7.984375 -1.195312 7.578125 -0.9375 C 7.179688 -0.675781 6.804688 -0.363281 6.453125 0 C 6.109375 0.375 5.757812 0.75 5.40625 1.125 C 5.0625 1.507812 4.6875 1.828125 4.28125 2.078125 C 3.875 2.335938 3.410156 2.46875 2.890625 2.46875 C 2.398438 2.46875 1.945312 2.34375 1.53125 2.09375 C 1.125 1.84375 0.800781 1.5 0.5625 1.0625 C 0.320312 0.632812 0.203125 0.160156 0.203125 -0.359375 C 0.203125 -1.003906 0.382812 -1.570312 0.75 -2.0625 C 1.113281 -2.5625 1.578125 -2.894531 2.140625 -3.0625 C 1.816406 -3.457031 1.5625 -3.894531 1.375 -4.375 C 1.195312 -4.851562 1.109375 -5.359375 1.109375 -5.890625 C 1.109375 -6.742188 1.320312 -7.519531 1.75 -8.21875 C 2.1875 -8.925781 2.765625 -9.484375 3.484375 -9.890625 C 4.210938 -10.304688 5.015625 -10.515625 5.890625 -10.515625 C 6.609375 -10.515625 7.28125 -10.375 7.90625 -10.09375 C 7.5625 -10.414062 7.210938 -10.832031 6.859375 -11.34375 C 6.515625 -11.863281 6.34375 -12.429688 6.34375 -13.046875 C 6.34375 -13.492188 6.5 -13.878906 6.8125 -14.203125 C 7.132812 -14.523438 7.519531 -14.6875 7.96875 -14.6875 C 8.414062 -14.6875 8.796875 -14.523438 9.109375 -14.203125 C 9.429688 -13.878906 9.59375 -13.492188 9.59375 -13.046875 C 9.59375 -12.703125 9.488281 -12.394531 9.28125 -12.125 C 9.082031 -11.863281 8.828125 -11.660156 8.515625 -11.515625 C 8.046875 -11.328125 7.8125 -11.0625 7.8125 -10.71875 C 7.8125 -10.539062 7.882812 -10.367188 8.03125 -10.203125 C 8.175781 -10.035156 8.351562 -9.878906 8.5625 -9.734375 C 9.21875 -9.316406 9.734375 -8.773438 10.109375 -8.109375 C 10.492188 -7.441406 10.6875 -6.703125 10.6875 -5.890625 C 10.6875 -5.171875 10.519531 -4.488281 10.1875 -3.84375 C 9.851562 -3.207031 9.398438 -2.679688 8.828125 -2.265625 Z M 5.890625 -10.390625 C 4.816406 -10.390625 4.28125 -8.890625 4.28125 -5.890625 C 4.28125 -3.265625 4.703125 -1.789062 5.546875 -1.46875 C 5.773438 -1.601562 6.003906 -1.726562 6.234375 -1.84375 C 6.472656 -1.957031 6.703125 -2.054688 6.921875 -2.140625 C 7.328125 -2.867188 7.53125 -4.117188 7.53125 -5.890625 C 7.53125 -8.890625 6.984375 -10.390625 5.890625 -10.390625 Z M 1.515625 -1.78125 C 1.515625 -1.40625 1.648438 -1.082031 1.921875 -0.8125 C 2.191406 -0.539062 2.515625 -0.40625 2.890625 -0.40625 C 3.285156 -0.40625 3.675781 -0.5 4.0625 -0.6875 C 4.457031 -0.882812 4.863281 -1.097656 5.28125 -1.328125 C 4.664062 -1.410156 4.09375 -1.597656 3.5625 -1.890625 C 3.03125 -2.179688 2.578125 -2.546875 2.203125 -2.984375 C 1.742188 -2.703125 1.515625 -2.300781 1.515625 -1.78125 Z M 1.515625 -1.78125 " />
                </g>
              </g>
            </g>
            <g fill="#222222" fillOpacity="1">
              <g transform="translate(15.932002, 23.646515)">
                <g>
                  <path d="M 4.53125 -14.3125 L 4.53125 -1.15625 C 4.53125 -0.90625 4.613281 -0.679688 4.78125 -0.484375 C 4.945312 -0.285156 5.148438 -0.164062 5.390625 -0.125 L 5.390625 0 L 0.53125 0 L 0.53125 -0.125 C 0.757812 -0.164062 0.957031 -0.285156 1.125 -0.484375 C 1.300781 -0.679688 1.390625 -0.90625 1.390625 -1.15625 L 1.390625 -13.015625 C 1.390625 -13.265625 1.300781 -13.484375 1.125 -13.671875 C 0.957031 -13.867188 0.757812 -13.988281 0.53125 -14.03125 L 0.53125 -14.171875 L 4.109375 -14.6875 C 4.128906 -14.6875 4.140625 -14.6875 4.140625 -14.6875 C 4.148438 -14.6875 4.160156 -14.6875 4.171875 -14.6875 C 4.410156 -14.6875 4.53125 -14.5625 4.53125 -14.3125 Z M 4.53125 -14.3125 " />
                </g>
              </g>
            </g>
            <g fill="#222222" fillOpacity="1">
              <g transform="translate(19.604268, 23.646515)">
                <g>
                  <path d="M 5.515625 -10.515625 C 6.398438 -10.515625 7.203125 -10.273438 7.921875 -9.796875 C 8.640625 -9.328125 9.210938 -8.6875 9.640625 -7.875 C 10.078125 -7.070312 10.296875 -6.179688 10.296875 -5.203125 C 10.296875 -4.222656 10.078125 -3.332031 9.640625 -2.53125 C 9.210938 -1.726562 8.640625 -1.085938 7.921875 -0.609375 C 7.203125 -0.128906 6.398438 0.109375 5.515625 0.109375 C 4.640625 0.109375 3.835938 -0.128906 3.109375 -0.609375 C 2.390625 -1.085938 1.8125 -1.726562 1.375 -2.53125 C 0.945312 -3.332031 0.734375 -4.222656 0.734375 -5.203125 C 0.734375 -6.179688 0.945312 -7.070312 1.375 -7.875 C 1.8125 -8.6875 2.390625 -9.328125 3.109375 -9.796875 C 3.835938 -10.273438 4.640625 -10.515625 5.515625 -10.515625 Z M 5.515625 -0.015625 C 6.597656 -0.015625 7.140625 -1.742188 7.140625 -5.203125 C 7.140625 -8.660156 6.597656 -10.390625 5.515625 -10.390625 C 4.421875 -10.390625 3.875 -8.660156 3.875 -5.203125 C 3.875 -1.742188 4.421875 -0.015625 5.515625 -0.015625 Z M 5.515625 -0.015625 " />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <ul className="user-panel">
          <li style={{ color: "black" }} onClick={handleOnClickLogin}>
            <svg
              role="img"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path
                fillRule="evenodd"
                d="M16.75 6.25a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0Zm-1.5 0a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z M12 12.5c-2.397 0-4.827.238-6.684.991-.935.38-1.767.907-2.367 1.64-.611.746-.949 1.665-.949 2.752V20h1.5v-2.117c0-.753.226-1.334.61-1.802.393-.48.986-.881 1.77-1.2C7.464 14.238 9.66 14 12 14c2.348 0 4.542.214 6.124.845.783.312 1.373.71 1.765 1.192.382.47.61 1.063.61 1.847L20.5 20H22v-2.116c0-1.107-.335-2.04-.947-2.793-.602-.74-1.436-1.266-2.374-1.64-1.858-.74-4.29-.951-6.679-.951Z"
              ></path>
            </svg>
          </li>
          <li style={{ color: "black" }}>
            <svg
              role="img"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path
                fillRule="evenodd"
                d="M14.391 15.452a7 7 0 1 1 1.06-1.06l5.86 5.858-1.061 1.06-5.859-5.858ZM15.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
              ></path>
            </svg>
          </li>
          <li href="#" style={{ color: "black" }}>
            <svg
              role="img"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M13.035 4.54a5.25 5.25 0 1 1 7.425 7.424L12 20.424l-8.46-8.459a5.25 5.25 0 0 1 7.424-7.425l1.037 1.034 1.034-1.034ZM19.4 5.6a3.75 3.75 0 0 0-5.303 0l-2.093 2.094-2.098-2.092a3.75 3.75 0 0 0-5.304 5.303l7.4 7.397 7.398-7.398a3.75 3.75 0 0 0 0-5.304Z"></path>
            </svg>
          </li>
          <li style={{ color: "black" }}>
            <svg
              role="img"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path
                fillRule="evenodd"
                d="M12 2c-1.17 0-2.436.262-3.437.853-1.02.601-1.813 1.586-1.813 2.97v1.178H5.126L2 7.003V21h20V7h-4.75V5.872c0-1.4-.783-2.399-1.806-3.011C14.442 2.26 13.174 2 12 2Zm3.75 6.5V12h1.5V8.5h3.25v11h-17V8.502h3.25V12h1.5V8.5h7.5Zm0-1.5V5.872c0-.75-.389-1.313-1.076-1.724-.71-.424-1.692-.648-2.674-.648-.977 0-1.961.224-2.674.644-.694.41-1.076.962-1.076 1.679v1.178L15.75 7Z"
              ></path>
            </svg>
          </li>
        </ul>

        {isVisible && (
          <div className="login-portal">
            <form>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  placeholder="email"
                  id="email"
                  name="email"
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  name="password"
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </header>
      <nav className="nav-bar">
        <a href="best-sellers" style={{ color: "black" }}>
          Best Sellers
        </a>
        <a href="face" style={{ color: "black" }}>
          Face
        </a>
        <a href="body" style={{ color: "black" }}>
          Body
        </a>
        <a href="hair" style={{ color: "black" }}>
          Hair
        </a>
        <a href="sets" style={{ color: "black" }}>
          Sets
        </a>
      </nav>
      <main className="overflow-container">
        <section className="hero-image-carousel">
          <img className="hero-image" src={heroImg} />
        </section>
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
            <div
              className="new-in-carousel-card-container"
              ref={newInCarouselRef}
            >
              <div className="carousel-card">
                <div className="carousel-card-img">
                  <img src={item1} />
                </div>
                <div className="carousel-card-info">Item 1</div>
              </div>
              <div className="carousel-card">
                <div className="carousel-card-img">
                  <img src={item2} />
                </div>
                <div className="carousel-card-info">Item 2</div>
              </div>
              <div className="carousel-card">
                <div className="carousel-card-img">
                  <img src={item3} />
                </div>
                <div className="carousel-card-info">Item 3</div>
              </div>
              <div className="carousel-card">
                <div className="carousel-card-img">
                  <img src={item5} />
                </div>
                <div className="carousel-card-info">Item 4</div>
              </div>
              <div className="carousel-card">
                <div className="carousel-card-img">
                  <img src={item2} />
                </div>
                <div className="carousel-card-info">Item 5</div>
              </div>
              <div className="carousel-card">
                <div className="carousel-card-img">
                  <img src={item6} />
                </div>
                <div className="carousel-card-info">Item 6</div>
              </div>
            </div>
            <button
              className="carousel-button"
              id="right-button"
              onClick={() => handleCarouselNav(newInCarouselRef, "right")}
            >
              Right
            </button>
          </div>
        </section>
        {/* <section className="new-in-section">
          <div className="content-wrapper">
            <h1>New In</h1>
            <div className="new-in-carousel-container" ref={newInCarouselRef}>
              <button
                className="carousel-button"
                id="left-button"
                onClick={() => handleCarouselNav(newInCarouselRef, "left")}
              >
                Left
              </button>
              <div className="new-in-carousel">
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item1} />
                  </div>
                  <div className="carousel-item-info">Item 1</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item2} />
                  </div>
                  <div className="carousel-item-info">Item 2</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item3} />
                  </div>
                  <div className="carousel-item-info">Item 3</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item5} />
                  </div>
                  <div className="carousel-item-info">Item 4</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item2} />
                  </div>
                  <div className="carousel-item-info">Item 5</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item6} />
                  </div>
                  <div className="carousel-item-info">Item 6</div>
                </div>
              </div>
              <button
                className="carousel-button"
                id="right-button"
                onClick={() => handleCarouselNav(newInCarouselRef, "right")}
              >
                Right
              </button>
            </div>
          </div>
        </section>
        <section className="trending-section">
          <div className="content-wrapper">
            <h1>Trending</h1>

            <div
              className="trending-carousel-container"
              ref={trendingCarouselRef}
            >
              <button
                className="carousel-button"
                id="left-button"
                onClick={() => handleCarouselNav(trendingCarouselRef, "left")}
              >
                Left
              </button>
              <div className="trending-carousel">
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item3} />
                  </div>
                  <div className="carousel-item-info">Item 1</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item6} />
                  </div>
                  <div className="carousel-item-info">Item 2</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item2} />
                  </div>
                  <div className="carousel-item-info">Item 3</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item1} />
                  </div>
                  <div className="carousel-item-info">Item 4</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item3} />
                  </div>
                  <div className="carousel-item-info">Item 5</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img">
                    <img src={item5} />
                  </div>
                  <div className="carousel-item-info">Item 6</div>
                </div>
              </div>
              <button
                className="carousel-button"
                id="right-button"
                onClick={() => handleCarouselNav(trendingCarouselRef, "right")}
              >
                Right
              </button>
            </div>
          </div>
        </section>
        <section className="recently-viewed-section">
          <div className="content-wrapper">
            <h1>Recently Viewed</h1>
            <div
              className="recently-viewed-carousel-container"
              ref={recentlyViewedCarouselRef}
            >
              <button
                className="carousel-button"
                id="left-button"
                onClick={() =>
                  handleCarouselNav(recentlyViewedCarouselRef, "left")
                }
              >
                Left
              </button>
              <div className="recently-viewed-carousel">
                <div className="carousel-item">
                  <div className="carousel-item-img"></div>
                  <div className="carousel-item-info">Item 1</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img"></div>
                  <div className="carousel-item-info">Item 2</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img"></div>
                  <div className="carousel-item-info">Item 3</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img"></div>
                  <div className="carousel-item-info">Item 4</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img"></div>
                  <div className="carousel-item-info">Item 5</div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-img"></div>
                  <div className="carousel-item-info">Item 6</div>
                </div>
              </div>
              <button
                className="carousel-button"
                id="right-button"
                onClick={() =>
                  handleCarouselNav(recentlyViewedCarouselRef, "right")
                }
              >
                Right
              </button>
            </div>
          </div>
        </section> */}
        <footer className="footer">Footer</footer>
      </main>
    </div>
  );
}

export default App;
