import Header from "./components/header/header.jsx";
import NavBar from "./components/navBar/navBar.jsx";
import HeroImg from "./components/heroImg/heroImg.jsx";
import NewIn from "./components/newIn/newIn.jsx";
import Trending from "./components/trending/trending.jsx";
import RecentlyViewed from "./components/recentlyViewed/recentlyViewed.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {

  const handleCarouselNav = (carouselRef, direction) => {
    const scrollAmount = direction === "left" ? -760 : 760;
    carouselRef.current.scrollLeft += scrollAmount;
  };

  return (
    <div className="container">
      <Header />
      <NavBar />
      <main className="overflow-container">
        <HeroImg />
        <NewIn handleCarouselNav={handleCarouselNav} />
        <Trending handleCarouselNav={handleCarouselNav}/>
        <RecentlyViewed  handleCarouselNav={handleCarouselNav} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
