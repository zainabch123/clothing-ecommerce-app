import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClickLogin = (event) => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">H&M</div>
        <a href="left-menu" style={{ color: "black" }}>
          Menu Button
        </a>
        <nav className="nav-bar">
          <a href="#" style={{ color: "black" }}>
            Women
          </a>
          <a href="#" style={{ color: "black" }}>
            Men
          </a>
          <a href="#" style={{ color: "black" }}>
            Kids
          </a>
          <a href="#" style={{ color: "black" }}>
            Home
          </a>
        </nav>
        <div className="user-panel">
          <a href="#" style={{ color: "black" }} onClick={handleOnClickLogin}>
            Log In
          </a>
          <a href="#" style={{ color: "black" }}>
            Search
          </a>
          <a href="#" style={{ color: "black" }}>
            Profile
          </a>
          <a href="#" style={{ color: "black" }}>
            Favourites
          </a>
          <a href="#" style={{ color: "black" }}>
            Shopping Bag
          </a>
        </div>

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
      <main className="overflow-container">
        <section className="image-carousel">Image Carousel</section>
        <section className="featured-items">Featured Items</section>
        <footer className="footer">Footer</footer>
      </main>
    </div>
  );
}

export default App;
